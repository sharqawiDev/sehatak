/* eslint-disable react-hooks/exhaustive-deps */
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
  RefreshControl,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LineChart} from 'react-native-chart-kit';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';

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

function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
}
function DetailsScreen({navigation, route}) {
  const {name} = route.params;

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
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
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require('./images/menu.png')}
                style={{
                  position: 'absolute',
                  width: 25,
                  height: 25,
                  top: 70,
                  left: 20,
                }}
              />
            </TouchableOpacity>
            <Image
              source={require('./images/avatar.jpg')}
              style={{
                position: 'absolute',
                width: 50,
                height: 50,
                borderRadius: 10,
                top: 60,
                right: 20,
              }}
            />
            <Text
              style={{
                fontSize: 45,
                color: '#fff',
                marginTop: 160,
                marginLeft: 30,
                fontWeight: '300',
                // fontFamily: 'montserrat', //tahoma, verdana, arial;
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
                          parseInt(75 + Math.random() * (100 - 75)),
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
              marginTop: 120,
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
    <View style={{paddingBottom: 10, marginTop: 10}}>
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
    <SafeAreaView>
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 20,
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
            backgroundColor: '#006837',
            borderColor: 'grey',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          onPress={() => {
            Alert.alert('Thanks for doing the test 😘');
            navigation.goBack();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              padding: 20,
              fontWeight: '500',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function Stastics({navigation}) {
  var hours = new Date().getHours();
  var min = new Date().getMinutes();
  // var sec = new Date().getSeconds();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <Image
              source={require('./images/dut.png')}
              style={{
                width: 20,
                height: 20,
                marginLeft: 10,
                alignSelf: 'center',
                marginTop: 5,
              }}
            />
            <Text style={{fontWeight: '500', fontSize: 25, marginLeft: 10}}>
              Today
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#a3a3a3',
                marginLeft: 10,
                marginTop: 10,
                alignSelf: 'center',
              }}>
              {hours}
              {':'}
              {min}
              {' pm'}
            </Text>
          </View>
          <View style={styles.stasticsCard}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  <Image
                    style={styles.warringCard}
                    source={require('./images/oxygen.png')}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginLeft: 10,
                      fontWeight: '500',
                    }}>
                    Oxygen
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderLeftColor: '#dedede',
                  borderLeftWidth: 1,
                  marginTop: 10,
                  paddingLeft: 10,
                }}>
                <Text style={{paddingTop: 5, fontSize: 22, color: 'red'}}>
                  83
                </Text>
                <Text
                  style={{
                    paddingTop: 10,
                    paddingRight: 40,
                    fontSize: 12,
                    color: '#000',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                  }}>
                  mmHg
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.warringCard}
                  source={require('./images/g-1.png')}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 22,
                    marginLeft: 10,
                    marginTop: 25,
                    fontFamily: 'verdana',
                  }}>
                  GOOD
                </Text>
              </View>
              {/* the graph should be here  */}
              <LineChart
                data={{
                  labels: ['0', '1', '2', '3'],
                  datasets: [
                    {
                      // data: [60, 100, 120],
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
                width={200}
                height={70}
                formatYLabel={(value) => `${value}`}
                // yAxisLabel={"good"}
                // withVerticalLabels={(value) => `${value}`}
                // yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#000',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  decimalPlaces: 0, // optional, defaults to 2dp
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
            </View>
          </View>
          <View style={styles.stasticsCard}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text
                  style={{
                    textAlign: 'left',
                    paddingTop: 20,
                    fontSize: 22,
                    marginLeft: 10,
                    fontWeight: '500',
                  }}>
                  Temperature
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderLeftColor: '#dedede',
                  borderLeftWidth: 1,
                  marginTop: 10,
                  marginLeft: 60,
                  paddingLeft: 10,
                }}>
                <Text style={{paddingTop: 5, fontSize: 22, color: 'red'}}>
                  36.5
                </Text>
                <Text
                  style={{
                    paddingTop: 10,
                    paddingRight: 40,
                    fontSize: 12,
                    color: '#000',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                  }}>
                  °C
                </Text>
              </View>
            </View>
            <Text style={{textAlign: 'right', paddingRight: 10, fontSize: 12}}>
              Average
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <Image
                style={styles.warringCard}
                source={require('./images/o-1.png')}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: '400',
                  fontSize: 22,
                  marginRight: 100,
                  marginTop: 10,
                  fontFamily: 'verdana',
                }}>
                Normal
              </Text>
              <Image
                style={[styles.warringCard, styles.imageAlign]}
                source={require('./images/temp.png')}
              />
            </View>
          </View>
          <View style={styles.stasticsCard}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text
                  style={{
                    textAlign: 'left',
                    paddingTop: 20,
                    fontSize: 22,
                    marginLeft: 10,
                    fontWeight: '500',
                  }}>
                  Pulse
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderLeftColor: '#dedede',
                  borderLeftWidth: 1,
                  marginTop: 10,
                  marginLeft: 60,
                  paddingLeft: 10,
                }}>
                <Text style={{paddingTop: 5, fontSize: 22, color: 'red'}}>
                  140
                </Text>
                <Text
                  style={{
                    paddingTop: 10,
                    paddingRight: 40,
                    fontSize: 12,
                    color: '#000',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                  }}>
                  BPM
                </Text>
              </View>
            </View>
            <Text style={{textAlign: 'right', paddingRight: 10, fontSize: 12}}>
              Average
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <Image
                style={styles.warringCard}
                source={require('./images/r-1.png')}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: '400',
                  fontSize: 22,
                  marginRight: 100,
                  marginTop: 10,
                  fontFamily: 'verdana',
                }}>
                Not Good
              </Text>
              <Image
                style={[styles.warringCard, styles.imageAlign]}
                source={require('./images/pulse.png')}
              />
            </View>
          </View>
          <View style={styles.stasticsCard}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text
                  style={{
                    textAlign: 'left',
                    paddingTop: 20,
                    fontSize: 22,
                    marginLeft: 10,
                    fontWeight: '500',
                  }}>
                  Blood Pressure
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  borderLeftColor: '#dedede',
                  borderLeftWidth: 1,
                  marginTop: 10,
                  marginLeft: 60,
                  paddingLeft: 10,
                }}>
                <Text style={{paddingTop: 5, fontSize: 22, color: 'red'}}>
                  110/70
                </Text>
                <Text
                  style={{
                    paddingTop: 10,
                    paddingRight: 40,
                    fontSize: 12,
                    color: '#000',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                  }}>
                  mmHg
                </Text>
              </View>
            </View>
            <Text style={{textAlign: 'right', paddingRight: 10, fontSize: 12}}>
              Average
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <Image
                style={styles.warringCard}
                source={require('./images/g-1.png')}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: '400',
                  fontSize: 22,
                  marginRight: 100,
                  marginTop: 10,
                  fontFamily: 'verdana',
                }}>
                GOOD
              </Text>
              <Image
                style={[styles.warringCard, styles.imageAlign]}
                source={require('./images/pressure.png')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const Drawer = createDrawerNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Home Page',
            headerStyle: {
              backgroundColor: '#006837',
            },
            headerTintColor: '#fff',
            headerLeft: () => (
              <TouchableOpacity>
                <Image
                  source={require('./images/menu.png')}
                  style={{height: 17, width: 25, marginLeft: 10}}
                />
              </TouchableOpacity>
            ),
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="stastics"
          component={Stastics}
          options={{
            title: 'history',
            headerStyle: {
              backgroundColor: '#006837',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Logout',
            headerStyle: {
              backgroundColor: '#006837',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    padding: 8,
  },
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
    shadowOffset: {height: 0, width: 0},
    shadowColor: '#0003',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 10,
  },
  stasticsCard: {
    backgroundColor: '#FFF',
    height: 150,
    borderRadius: 20,
    borderColor: '#dedede',
    borderWidth: 1,
    marginVertical: 5,
    width: '95%',
    alignSelf: 'center',
  },
  warringCard: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    borderRadius: 10,
    shadowOffset: {height: 8, width: 4},
    shadowColor: '#0003',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    paddingHorizontal: 6,
    alignSelf: 'center',
  },
  imageAlign: {
    backgroundColor: '#fff',
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
