import React, { useState } from 'react';
import { dataIndexAttribute } from 'react-horizontal-scrolling-menu/dist/types/constants';
import { View, Text, Button, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import DateTimePicker from '@react-native-community/datetimepicker';
import SearchInput, { createFilter } from 'react-native-search-filter';

const HistoryTrans = (props) => {

  const fees = [
    { id: '1', name: 'Transaction', stream: 'FYBCOM', date: '1/1/2022', feename: 'Date', },
     { id: '2', name: 'Transaction', stream: 'TYBCOM', date: '15/11/2021', feename: 'Date', },
  ]
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    //For Date Picker
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setText(fDate)
    console.log(fDate)

  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };


  

   //----------Search filter-------------
   const KEYS_TO_FILTERS = ['name', 'stream','date'];
   const [state, setState] = useState({ searchTerm: '' });

   const filterfees = fees.filter(createFilter(state.searchTerm, KEYS_TO_FILTERS))
   const searchUpdated = (term) => {
       setState({ searchTerm: term })
   }

  return (
    <Animatable.View animation="slideInRight" style={styles.container}>
      <View style={styles.search}>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            width: "100%",
            height: 50,
            borderColor: "#D3D3D3",
            paddingHorizontal: 0,
            borderWidth: 2,
            marginTop: 15,
            borderRadius: 10,
          }}>

          <MaterialCommunityIcons
            name="calendar-blank-outline"
            size={26}
            color="#434b56"
            onPress={showDatepicker}
          />

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <TextInput
            placeholder="Search by Date(DD/MM/YY)"
            placeholderTextColor="#808080"
            onChangeText={(term) => { searchUpdated(term) }}
            style={{
              marginLeft: 0,
              backgroundColor: "#FFFFFF",
              width: "80%",
              height: 40,
              fontSize:12,
              fontFamily: 'Montserrat-Regular',
            }}
          >{text}</TextInput>
          <Feather name="search" size={29} color="#000000" />
        </View>
      </View>
      {filterfees.map((fee, index) => ( 
        <View>
          <TouchableOpacity key={index} style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#E5E5E5",
            width: "90%",
            height: 70,
            borderColor: "#E5E5E5",
            alignSelf: "center",
            borderWidth: 2,
            marginTop: 20,
            borderRadius: 5,
            justifyContent: 'space-between',


          }}
            onPress={() => { props.navigation.navigate('HistoryTransDetail', { name: fee.name, stream: fee.stream, date: fee.date, feename: fee.feename, rdate: fee.rdate }) }}
          >
            <View>

              <Text style={{ color: '#000000', fontFamily: 'Montserrat-Regular', }}>{fee.feename}</Text>
              <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Montserrat-SemiBold', }}>{fee.date}{fee.name}</Text>
            </View>
            <View>
              <Feather
                name="download"
                size={30}
                color="#000000"
              />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </Animatable.View>
  );
};

export default HistoryTrans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  search: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    borderWidth: 0,
    borderColor: "#E4E4E4",

  },
});
