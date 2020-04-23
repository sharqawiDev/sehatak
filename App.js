/* eslint-disable radix */
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
  Alert,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LineChart} from 'react-native-chart-kit';
import {CheckBox} from 'native-base';

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
          ID Number
        </Text>
        <TextInput
          placeholder="123456789"
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: 48,
            borderRadius: 20,
            paddingLeft: 10,
            marginTop: 10,
          }}
          keyboardType="number-pad"
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
                fontSize: 45,
                color: '#fff',
                marginTop: 140,
                marginLeft: 30,
                fontWeight: '300',
                // fontFamily: 'arial', //tahoma, verdana, arial;
              }}>
              Good Morning {'\n'}
              {name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
                width: '90%',
                marginTop: 50,
              }}>
              <TouchableOpacity style={styles.card}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 16,
                      marginLeft: 10,
                      fontWeight: '600',
                    }}>
                    Oxygen
                  </Text>
                  <Image
                    source={require('./images/oxygen.png')}
                    style={styles.imageStyle}
                  />
                </View>
                <View
                  style={{flexDirection: 'row', marginTop: 3, marginLeft: 10}}>
                  <Text style={{fontWeight: '500', fontSize: 25}}>
                    {parseInt(75 + Math.random() * (100 - 75))}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 12,
                      color: 'grey',
                      alignSelf: 'center',
                      marginLeft: 5,
                    }}>
                    mL / mmHg
                  </Text>
                </View>
                <LineChart
                  data={{
                    labels: [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                    ],
                    datasets: [
                      {
                        data: [
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                        ],
                      },
                    ],
                  }}
                  width={172} // from react-native
                  height={100}
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: '#000',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(000, 000, 000, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: '3',
                      strokeWidth: '1',
                      stroke: '#000',
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.card}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 16,
                      marginLeft: 10,
                      fontWeight: '600',
                    }}>
                    Pulse
                  </Text>
                  <Image
                    source={require('./images/pulse.png')}
                    style={styles.imageStyle}
                  />
                </View>
                <View
                  style={{flexDirection: 'row', marginTop: 3, marginLeft: 10}}>
                  <Text style={{fontWeight: '500', fontSize: 25}}>
                    {parseInt(60 + Math.random() * (100 - 60))}
                  </Text>
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
                <LineChart
                  data={{
                    labels: [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                    ],
                    datasets: [
                      {
                        data: [
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                          Math.random() * 100,
                        ],
                      },
                    ],
                  }}
                  width={172} // from react-native
                  height={100}
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: '#000',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(000, 000, 000, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: '3',
                      strokeWidth: '1',
                      stroke: '#000',
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              marginTop: 80,
            }}>
            <TouchableOpacity style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 16,
                    marginLeft: 10,
                    fontWeight: '600',
                  }}>
                  Temperature
                </Text>
                <Image
                  source={require('./images/temp.png')}
                  style={styles.imageStyle}
                />
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 3, marginLeft: 10}}>
                <Text style={{fontWeight: '500', fontSize: 25}}>
                  {parseInt(36.1 + Math.random() * (37.2 - 36.1))}
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: 'grey',
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}>
                  °C
                </Text>
              </View>
              <LineChart
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                      ],
                    },
                  ],
                }}
                width={172} // from react-native
                height={100}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#000',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(000, 000, 000, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '3',
                    strokeWidth: '1',
                    stroke: '#000',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 16,
                    marginLeft: 10,
                    fontWeight: '600',
                  }}>
                  Blood{'\n'}Pressure
                </Text>
                <Image
                  source={require('./images/pressure.png')}
                  style={styles.imageStyle}
                />
              </View>
              <View
                style={{flexDirection: 'row', marginTop: 3, marginLeft: 10}}>
                <Text style={{fontWeight: '500', fontSize: 25}}>
                  {parseInt(120 + Math.random() * (139 - 120))} {'/'}
                  {parseInt(80 + Math.random() * (89 - 80))}
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    color: 'grey',
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}>
                  mmHg
                </Text>
              </View>
              <LineChart
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                      ],
                    },
                  ],
                }}
                width={172} // from react-native
                height={100}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#000',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(000, 000, 000, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '3',
                    strokeWidth: '1',
                    stroke: '#000',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button
        title="Do The Test"
        color="#39b54a"
        onPress={() => {
          navigation.navigate('Test');
        }}
      />
    </ScrollView>
  );
}

const Question = ({question}) => {
  const [yesColor, setYesColor] = useState('white');
  const [noColor, setNoColor] = useState('white');
  const [yesText, setYesText] = useState('black');
  const [noText, setNoText] = useState('black');

  const checked = () => {
    question.answer = 'Yes';
    setYesColor('green');
    setYesText('white');
    setNoColor('white');
    setNoText('black');
  };

  const unChecked = () => {
    question.answer = 'No';
    setNoColor('red');
    setNoText('white');
    setYesColor('white');
    setYesText('black');
  };

  return (
    <View>
      <View style={styles.qCard}>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: '500',
          }}>
          {question.title}
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
                backgroundColor: yesColor,
                justifyContent: 'center',
                alignItems: 'center',
                width: 60,
                height: 30,
                flexDirection: 'row',
              }}
              onPress={() => checked()}>
              <Text style={{color: yesText, fontSize: 20, fontWeight: 'bold'}}>
                {' '}
                YES
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginRight: 20}}>
            <TouchableOpacity
              style={{
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: noColor,
                justifyContent: 'center',
                alignItems: 'center',
                width: 60,
                height: 30,
                flexDirection: 'row',
              }}
              onPress={() => unChecked()}>
              <Text style={{color: noText, fontSize: 20, fontWeight: 'bold'}}>
                {' '}
                NO
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

function Testing({navigation}) {
  const questions = [
    {title: 'Do you have a dry cough?', answer: ''},
    {title: 'Do you have breathing difficulties?', answer: ''},
    {title: 'Do you have fever?', answer: ''},
    {title: 'Do you have fatigue and fatigue?', answer: ''},
    {title: 'Do you have runny nose?', answer: ''},
    {title: 'Do you have sore throat?', answer: ''},
  ];

  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
          marginVertical: 10,
          fontWeight: 'bold',
        }}>
        Please Answer the following questions:
      </Text>
      {questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginVertical: 15,
          backgroundColor: 'green',
          borderColor: 'grey',
          borderWidth: 1,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          width: 100,
          height: 30,
        }}
        onPress={() => {
          Alert.alert('Thanks for doing the test 😘');
          navigation.goBack();
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '500',
          }}>
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#006837',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#006837',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Test"
          component={Testing}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#006837',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 9,
    marginTop: 10,
    resizeMode: 'contain',
    backgroundColor: '#fff',
    marginRight: 10,
  },
  card: {
    backgroundColor: '#FFF',
    width: width * 0.42,
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
  qCard: {
    borderRadius: 20,
    borderWidth: 0,
    shadowOffset: {height: 8, width: 4},
    shadowColor: '#0003',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 10,
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
  // temp 36.1 -- 37.2
  // pulse 60 -- 100
  //oxy 75 -- 100
  //pres 120/80 -- 139/89
}
