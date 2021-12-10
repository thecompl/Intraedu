import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const HistoryAttendance = () => {

  const data = ['1/1/21', 'Vikash Gupta', 'yes',]
  const datas = ['2/1/21', 'Vikash Gupta', 'No',]

  return (
    <View style={styles.container}>
      <View style={styles.rowcontainer}>
        <Text style={styles.rowTxt}>Date</Text>
        <Text style={styles.rowTxt}>Student Name</Text>
        <Text style={styles.rowTxt}>Present</Text>

      </View>
      <View style={styles.dataview}>
        {data.map(data => (
          <View>
            <Text style={styles.datatxt}>{data}</Text>
          </View>
        ))}
      </View>
      <View style={styles.dataview}>
        {datas.map(datas => (
          <View>
            <Text style={styles.datatxt}>{datas}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HistoryAttendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  rowcontainer: {

    alignItems: "center",
    paddingHorizontal: "6%",
    flexDirection: 'row',
    justifyContent: "space-between",

  },
  rowTxt: {
    flexWrap: "wrap",
    marginTop: 20,
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Montserrat-SemiBold',
  },
  dataview: {
    paddingHorizontal: "6%",
    marginTop: 10,
    fontSize: 20,
    color: '#000000',
    fontWeight: '500',
    flexDirection: 'row',
    justifyContent: "space-between",
    
  },
  datatxt: {
    alignSelf: "center",
    fontSize: 15,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',

  },
});
