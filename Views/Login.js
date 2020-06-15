/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  Alert,
  AsyncStorage,
  Platform,
  StatusBar,
  StyleSheet,
  I18nManager,
} from 'react-native';

function Login({navigation}) {
  const [name, setName] = useState('');
  const [ID, setID] = useState('');

  const submit = async () => {
    AsyncStorage.setItem('user', JSON.stringify({name, ID}));
    navigation.navigate('Details', {name, ID});
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image style={styles.logoStyle} source={require('../images/logo.png')} />

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View
        style={{
          width: '90%',
          height: 48,
          paddingLeft: 10,
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            alignSelf: 'flex-start',
            marginLeft: 10,
          }}>
          {I18nManager.isRTL ? 'الإسم الكامل' : 'Full Name'}
        </Text>
        <TextInput
          placeholder={I18nManager.isRTL ? 'الإسم' : 'Name'}
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: 48,
            borderRadius: 20,
            paddingLeft: 10,
            writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
            marginTop: 10,
          }}
          keyboardType="default"
          onChangeText={(val) => setName(val)}
          value={name}
          maxLength={40}
        />
      </View>

      <View
        style={{
          width: '90%',
          height: 48,
          paddingLeft: 10,
          marginTop: 30,
          marginBottom: 40,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            alignSelf: 'flex-start',
            marginLeft: 10,
          }}>
          {I18nManager.isRTL ? 'الهوية الوطنية' : 'National id'}
        </Text>
        <TextInput
          placeholder={I18nManager.isRTL ? '١٢٣٤٦٧٨٩' : '123456789'}
          textAlign={I18nManager.isRTL ? 'right' : 'left'}
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: 48,
            borderRadius: 20,
            writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
            paddingLeft: 10,
            marginTop: 10,
          }}
          keyboardType="number-pad"
          onChangeText={(val) => setID(val)}
          value={ID}
          maxLength={40}
        />
      </View>
      {Platform.OS === 'ios' ? (
        <View>
          {name === '' || ID === '' ? (
            <Button
              title="Login"
              onPress={() => Alert.alert('Some field are ampty')}
            />
          ) : (
            <Button title="Login" onPress={submit} />
          )}
        </View>
      ) : (
        <View>
          {name === '' || ID === '' ? (
            <Text
              style={{color: '#0d81fe', fontSize: 20}}
              onPress={() => Alert.alert('Some field are empty')}>
              {I18nManager.isRTL ? 'تسجيل دخول' : 'Login'}
            </Text>
          ) : (
            <Text style={{color: '#0d81fe', fontSize: 20}} onPress={submit}>
              {I18nManager.isRTL ? 'تسجيل دخول' : 'Login'}
            </Text>
          )}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  logoStyle: {
    width: '100%',
    height: '35%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
export default Login;
