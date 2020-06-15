/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Platform,
  StatusBar,
  DrawerLayoutAndroid,
  Dimensions,
  StyleSheet,
  I18nManager,
} from 'react-native';

import {LineChart} from 'react-native-chart-kit';

function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
}

const {width, height} = Dimensions.get('window');

function MainScreen({navigation, route}) {
  const {name, ID} = route.params;
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);

  let apiUriForGet = `http://sehatak-api.herokuapp.com/deviceTestInfo/${ID}`;

  // let apiData = [];

  const getDataFromApi = async () => {
    setLoading(true);
    try {
      await fetch(apiUriForGet)
        .then((response) => response.json())
        .then((responseJson) => {
          let JSONArray = responseJson.map((item, index) => {
            console.log(item);
            return {
              national_id: item.national_id ? item.national_id : '',
              systolic_pressure: item.blood_pressure.systolic_pressure
                ? item.blood_pressure.systolic_pressure
                : '',
              diastolic_pressure: item.blood_pressure.diastolic_pressure
                ? item.blood_pressure.diastolic_pressure
                : '',
              body_temperature: item.body_temperature
                ? item.body_temperature
                : '',
              oxygen_percentage: item.oxygen_percentage
                ? item.oxygen_percentage
                : '',
              pulse: item.pulse ? item.pulse : '',
            };
          });
          setApiData(JSONArray);
          setLoading(false);
          console.log('------------- Api data are: ', JSONArray);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (e) {
      console.log(e);
    }
  };
  // const lastItem = apiData[apiData.length - 1];
  // console.log('the last item', lastItem);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    getDataFromApi();
  }, [refreshing]);

  useEffect(() => {
    getDataFromApi();
  }, []);
  const navigationView = <View style={{flex: 1, backgroundColor: '#fff'}} />;
  const drawerLayout = () => {
    {
      Platform.OS === 'android' ? (
        <DrawerLayoutAndroid
          drawerWidth={150}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
          // ref={(_drawer) => (this.drawer = _drawer)}
          // onDrawerOpen={console.log(' from android ')}
        />
      ) : (
        navigation.openDrawer()
      );
    }
  };
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressBackgroundColor="#39b54a"
          tintColor="#39b54a"
        />
      }>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View>
        {apiData.slice(-1).map((item) => (
          <View
            style={{
              alignItems: 'center',
              paddingBottom: 20,
            }}>
            <ImageBackground
              source={require('../images/bg.png')}
              style={{
                borderColor: '#000',
                resizeMode: 'stretch',
                height: Platform.OS === 'ios' ? height * 0.58 : height * 0.6,
                width: width,
              }}
              imageStyle={{
                borderBottomRightRadius: 50,
                borderBottomLeftRadius: 50,
              }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  // navigation.openDrawer();
                  drawerLayout();
                }}>
                <Image
                  source={require('../images/menu.png')}
                  style={{
                    position: 'absolute',
                    width: 25,
                    height: 25,
                    top: Platform.OS === 'ios' ? 70 : 60,
                    left: 20,
                  }}
                />
              </TouchableOpacity>
              <Image
                source={require('../images/avatar.jpg')}
                style={{
                  position: 'absolute',
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  top: Platform.OS === 'ios' ? 60 : 60,
                  right: 20,
                }}
              />
              <Text
                style={{
                  fontSize: 45,
                  color: '#fff',
                  marginTop: Platform.OS === 'ios' ? 160 : 120,
                  marginLeft: 30,
                  fontWeight: '300',
                  // fontFamily: 'montserrat', //tahoma, verdana, arial;
                }}>
                {I18nManager.isRTL ? 'أهلا بك' : 'welcome'} {'\n'}
                {name}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                  width: '90%',
                  marginTop: Platform.OS === 'ios' ? 80 : 70,
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
                      {I18nManager.isRTL ? 'الآكسجين' : 'Oxygen'}
                    </Text>
                    <Image
                      source={require('../images/oxygen.png')}
                      style={styles.imageStyle}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 3,
                      marginLeft: 10,
                    }}>
                    <Text style={{fontWeight: '500', fontSize: 25}}>
                      {/* {parseInt(75 + Math.random() * (100 - 75))} */}
                      {item.oxygen_percentage}
                    </Text>
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 12,
                        color: 'grey',
                        alignSelf: 'center',
                        marginLeft: 5,
                      }}>
                      {/* mL / mmHg */}
                      {I18nManager.isRTL ? 'مل / مم زئبق' : 'mL / mmHg'}
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
                      {I18nManager.isRTL ? 'النبض' : 'Pulse'}
                    </Text>
                    <Image
                      source={require('../images/pulse.png')}
                      style={styles.imageStyle}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 3,
                      marginLeft: 10,
                    }}>
                    <Text style={{fontWeight: '500', fontSize: 25}}>
                      {/* {parseInt(60 + Math.random() * (100 - 60))} */}
                      {item.pulse}
                    </Text>
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 12,
                        color: 'grey',
                        alignSelf: 'center',
                        marginLeft: 5,
                      }}>
                      {I18nManager.isRTL ? 'نبضة في الدقيقة' : 'BPM'}
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
                marginTop: Platform.OS === 'ios' ? 50 : 70,
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
                    {I18nManager.isRTL ? 'الحرارة' : 'Temperature'}
                  </Text>
                  <Image
                    source={require('../images/temp.png')}
                    style={styles.imageStyle}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 3,
                    marginLeft: 10,
                  }}>
                  <Text style={{fontWeight: '500', fontSize: 25}}>
                    {/* {parseInt(36.1 + Math.random() * (37.2 - 36.1))} */}
                    {item.body_temperature}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 12,
                      color: 'grey',
                      alignSelf: 'center',
                      marginLeft: 5,
                    }}>
                    {I18nManager.isRTL ? 'درجة حرارة  الجسم' : '°C'}
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
                    {I18nManager.isRTL ? 'الدم' : 'Blood'}
                    {'\n'}
                    {I18nManager.isRTL ? 'ضغط' : 'Pressure'}
                  </Text>
                  <Image
                    source={require('../images/pressure.png')}
                    style={styles.imageStyle}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 3,
                    marginLeft: 10,
                  }}>
                  <Text style={{fontWeight: '500', fontSize: 25}}>
                    {/* {parseInt(120 + Math.random() * (139 - 120))} {'/'}
                      {parseInt(80 + Math.random() * (89 - 80))} */}
                    {item.systolic_pressure}
                    {'/'}
                    {item.diastolic_pressure}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 12,
                      color: 'grey',
                      alignSelf: 'center',
                      marginLeft: 5,
                    }}>
                    {I18nManager.isRTL ? 'مم زئبق' : 'mmHg'}
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
        ))}
      </View>

      <View
        style={{
          alignSelf: 'center',
          borderRadius: 20,
          shadowRadius: 20,
        }}>
        {Platform.OS === 'ios' ? (
          <Button
            title="Do The Test"
            color="#006837"
            onPress={() => {
              navigation.navigate('Test');
            }}
          />
        ) : (
          <Text
            style={{
              backgroundColor: 'transparent',
              color: '#006837',
              fontSize: 20,
            }}
            onPress={() => {
              navigation.navigate('Test');
            }}>
            {I18nManager.isRTL ? 'قم بالإختبار' : 'Do The Test'}
          </Text>
        )}
      </View>
    </ScrollView>
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
    marginRight: 10,
  },
  card: {
    backgroundColor: '#FFF',
    width: width * 0.42,
    height: Platform.OS === 'ios' ? 200 : 200,
    borderRadius: 20,
    shadowOffset: {height: 8, width: 4},
    shadowColor: '#0003',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    paddingHorizontal: 6,
  },
});

export default MainScreen;
