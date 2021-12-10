import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { RadioButton } from 'react-native-paper';

const TakeAttendance = () => {



  const [checked, setChecked] = useState('first');
  const users = [
    { id: '1', name: 'Vikash Yadav', checked: 'first', },
    { id: '2', name: 'Vikash Gupta', checked: 'second', },
  ];
  const [stateuser, setStateusers] = useState(users);


  return (
    <View style={styles.container}>
      <View style={styles.rowcontainer}>
        <Text style={styles.rowTxt}>Present</Text>
        <Text style={styles.rowTxt}>Student Name</Text>
        <Text style={styles.rowTxt}>Absent</Text>

      </View>

      {users.map((user, index) => (
        <View style={styles.dataview} key={index}>
          <View style={styles.radio}>
            <RadioButton
              value="first"
              status={user.checked=== 'first' ? 'checked' : 'unchecked'}
              // onPress={() => {setChecked('first');console.log(user.checked);}}
                 onPress={() =>{ setStateusers(user.checked='first');console.log(user.checked);} }
            // color={'#C4C4C4'}
            // onChange={handleChange}
            />

            <Text style={styles.datatxt}>{user.name}</Text>

            <RadioButton
              value="second"
              status={user.checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() =>{  setStateusers(user.checked='second');console.log(user.checked);} }
            // onChange={handleChange}
            />

          </View>
        </View>
      ))}


    </View>
  );
};

export default TakeAttendance;

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
    alignSelf: "center",
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
  radio: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: "center",
  }
});
