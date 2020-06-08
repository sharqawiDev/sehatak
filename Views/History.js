/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {SafeAreaView} from 'react-native-safe-area-context';

function History({navigation}) {
  var hours = new Date().getHours();
  var min = new Date().getMinutes();
  // var sec = new Date().getSeconds();

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={{alignSelf: 'center', fontSize: 25, fontWeight: 'bold'}}>
            History
          </Text>
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <Image
              source={require('../images/dut.png')}
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
                    source={require('../images/oxygen.png')}
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
                  source={require('../images/11.png')}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 20,
                    marginLeft: 10,
                    alignSelf: 'center',
                    fontFamily: 'verdana',
                  }}>
                  Normal
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
                    source={require('../images/temp.png')}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginLeft: 10,
                      fontWeight: '500',
                    }}>
                    Temperature
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.warringCard}
                  source={require('../images/22.png')}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 20,
                    alignSelf: 'center',
                    marginLeft: 10,
                    fontFamily: 'verdana',
                  }}>
                  Abnormal
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
                    source={require('../images/pulse.png')}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginLeft: 10,
                      fontWeight: '500',
                    }}>
                    Pulse
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.warringCard}
                  source={require('../images/33.png')}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 20,
                    alignSelf: 'center',
                    marginLeft: 10,
                    fontFamily: 'verdana',
                  }}>
                  Risky
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
                    source={require('../images/pressure.png')}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginLeft: 10,
                      fontWeight: '500',
                    }}>
                    Blood Pressure
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.warringCard}
                  source={require('../images/11.png')}
                />
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 20,
                    alignSelf: 'center',
                    marginLeft: 10,
                    fontFamily: 'verdana',
                  }}>
                  Normal
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    padding: 8,
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
    height: 30,
    width: 30,
    borderRadius: 10,
    shadowOffset: {height: 8, width: 4},
    shadowColor: '#0003',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    paddingHorizontal: 6,
    alignSelf: 'center',
  },
});
export default History;
