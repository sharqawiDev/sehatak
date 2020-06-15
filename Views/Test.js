/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  AsyncStorage,
  StatusBar,
  I18nManager,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

let apiUriForPost = 'http://sehatak-api.herokuapp.com/symptoms_qustions/add';

const Question = ({question, onYesPress, onNoPress, answer}) => {
  const yesButtonColor = answer === true ? 'green' : 'white';
  const yesTextColor = answer === true ? 'white' : 'black';
  const noButtonColor = answer === false ? 'red' : 'white';
  const noTextColor = answer === false ? 'white' : 'black';
  return (
    <View style={{paddingBottom: 10, marginTop: 10, marginBottom: 20}}>
      <View style={styles.qCard}>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: '500',
          }}>
          {question}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row', marginLeft: 20}}>
            <TouchableOpacity
              style={{
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: yesButtonColor,
                justifyContent: 'center',
                alignItems: 'center',
                width: 60,
                height: 30,
                flexDirection: 'row',
              }}
              onPress={onYesPress}>
              <Text
                style={{color: yesTextColor, fontSize: 20, fontWeight: 'bold'}}>
                {I18nManager.isRTL ? 'نعم' : 'YES'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginRight: 20}}>
            <TouchableOpacity
              style={{
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: noButtonColor,
                justifyContent: 'center',
                alignItems: 'center',
                width: 60,
                height: 30,
                flexDirection: 'row',
              }}
              onPress={onNoPress}>
              <Text
                style={{color: noTextColor, fontSize: 20, fontWeight: 'bold'}}>
                {I18nManager.isRTL ? 'لا' : 'NO'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

function Test({navigation}) {
  const [dry_cough, setDry_cough] = useState();
  const [breathing_difficulties, setBreathing_difficulties] = useState();
  const [fever, setFever] = useState();
  const [runny_nose, setRunny_nose] = useState();
  const [sore_throat, setSore_throat] = useState();
  const [fatigue, setFatigue] = useState();

  const postData = async () => {
    let user = await AsyncStorage.getItem('user');
    user = JSON.parse(user);
    try {
      fetch(apiUriForPost, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          national_id: user.ID,
          full_name: user.name,
          dry_cough,
          breathing_difficulties,
          fever,
          fatigue,
          runny_nose,
          sore_throat,
        }),
      });
    } catch (er) {
      console.warn(er);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          {I18nManager.isRTL
            ? 'الرجاء الإجابة على الأسئلة التالية'
            : 'Please Answer the following questions:'}
        </Text>

        <Question
          question={
            I18nManager.isRTL ? 'هل لديك سعال جاف' : 'Do you have a dry cough?'
          }
          answer={dry_cough}
          onYesPress={() => setDry_cough(true)}
          onNoPress={() => setDry_cough(false)}
        />
        <Question
          question={
            I18nManager.isRTL
              ? 'هل تعاني من صعوبات في التنفس؟'
              : 'Do you have breathing difficulties?'
          }
          answer={breathing_difficulties}
          onYesPress={() => setBreathing_difficulties(true)}
          onNoPress={() => setBreathing_difficulties(false)}
        />
        <Question
          question={I18nManager.isRTL ? 'هل لديك حمى؟' : 'Do you have a fever?'}
          answer={fever}
          onYesPress={() => setFever(true)}
          onNoPress={() => setFever(false)}
        />
        <Question
          question={I18nManager.isRTL ? 'هل لديك تعب؟' : 'Do you have fatigue?'}
          answer={fatigue}
          onYesPress={() => setFatigue(true)}
          onNoPress={() => setFatigue(false)}
        />
        <Question
          question={
            I18nManager.isRTL
              ? 'هل لديك سيلان فى الأنف؟'
              : 'Do you have a runny nose?'
          }
          answer={runny_nose}
          onYesPress={() => setRunny_nose(true)}
          onNoPress={() => setRunny_nose(false)}
        />
        <Question
          question={
            I18nManager.isRTL
              ? 'هل لديك التهاب في الحلق'
              : 'Do you have a sore throat?'
          }
          answer={sore_throat}
          onYesPress={() => setSore_throat(true)}
          onNoPress={() => setSore_throat(false)}
        />

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            backgroundColor: '#006837',
            borderColor: 'grey',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          onPress={() => {
            Alert.alert(
              I18nManager.isRTL
                ? ' شكرًا لإجراء الاختبار 😘'
                : 'Thanks for doing the test 😘',
            );
            navigation.goBack();
            postData();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              padding: 20,
              paddingBottom: 25,
              fontWeight: '500',
            }}>
            {I18nManager.isRTL ? 'إرسال' : 'Submit'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  qCard: {
    borderRadius: 20,
    borderWidth: 0,
    shadowOffset: {height: 0, width: 0},
    shadowColor: '#0003',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 10,
    paddingVertical: 20,
  },
});
export default Test;
