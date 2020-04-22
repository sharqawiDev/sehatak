/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import groupImage from './images/Group5Copy3.png';

const {width, height} = Dimensions.get('window');
function HomeScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image style={styles.logoStyle} source={require('./images/logo.png')} />

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
          Full Name
        </Text>
        <TextInput
          placeholder="Name"
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: 48,
            borderRadius: 20,
            paddingLeft: 10,
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
          Email Address
        </Text>
        <TextInput
          placeholder="Example@gmail.com"
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: 48,
            borderRadius: 20,
            paddingLeft: 10,
            marginTop: 10,
          }}
          keyboardType="email-address"
          onChangeText={(val) => setEmail(val)}
          value={email}
          maxLength={40}
        />
      </View>
      {name === '' || email === '' ? (
        <Button title="Login" />
      ) : (
        <Button
          title="Login"
          onPress={() => navigation.navigate('Details', {name})}
        />
      )}
    </View>
  );
}

function DetailsScreen({navigation, route}) {
  const {name} = route.params;
  return (
    <ScrollView>
      <View>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 30,
            paddingBottom: 20,
          }}>
          <ImageBackground
            source={require('./images/bg.png')}
            style={{
              borderColor: '#000',
              resizeMode: 'stretch',
              height: height * 0.5,
              width: width,
            }}
            imageStyle={{
              borderBottomRightRadius: 50,
              borderBottomLeftRadius: 50,
            }}>
            <Text
              style={{
                fontSize: 30,
                alignSelf: 'center',
                color: '#fff',
                marginTop: 40,
              }}>
              Good Morning {'\n'}
              {JSON.stringify(name)} {'\n'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
                width: '90%',
                marginTop: 150,
              }}>
              <TouchableOpacity style={styles.card}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{alignSelf: 'center', fontSize: 18}}>Pulse</Text>
                  <Image
                    source={require('./images/oxygen.png')}
                    style={styles.imageStyle}
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: '500', fontSize: 25}}> 122</Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 12,
                      color: 'grey',
                      alignSelf: 'center',
                      marginLeft: 5,
                    }}>
                    BPM
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{alignSelf: 'center', fontSize: 18}}>Pulse</Text>
                  <Image
                    source={require('./images/pulse.png')}
                    style={styles.imageStyle}
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: '500', fontSize: 25}}> 122</Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 12,
                      color: 'grey',
                      alignSelf: 'center',
                      marginLeft: 5,
                    }}>
                    BPM
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              marginTop: 100,
            }}>
            <TouchableOpacity style={styles.card}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{alignSelf: 'center', fontSize: 18}}>Pulse</Text>
                <Image
                  source={require('./images/temp.png')}
                  style={styles.imageStyle}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: '500', fontSize: 25}}> 122</Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: 'grey',
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}>
                  BPM
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{alignSelf: 'center', fontSize: 18}}>Pulse</Text>
                <Image
                  source={require('./images/pressure.png')}
                  style={styles.imageStyle}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: '500', fontSize: 25}}> 122</Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: 'grey',
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}>
                  BPM
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 30,
    height: 30,
    borderRadius: 9,
    marginTop: 10,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#FFF',
    width: width * 0.35,
    height: 200,
    borderRadius: 20,
    shadowOffset: {height: 8, width: 4},
    shadowColor: '#0003',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    paddingHorizontal: 6,
  },
  logoStyle: {
    width: '100%',
    height: '35%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
export default App;

{
  /* <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      /> */
}
{
  /* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */
}
{
  /* <Button title="Go back" onPress={() => navigation.goBack()} /> */
}
