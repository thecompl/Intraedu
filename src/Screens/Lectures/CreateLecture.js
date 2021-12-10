import React, {useState} from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import DropDownPicker from 'react-native-dropdown-picker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DateTimePicker from '@react-native-community/datetimepicker'
import TimeSlider from '../PTM/TimeSlider'
import SingleSelect from './SingleSelect'
import StreamDropDown        from './StreamDropDown'

const CreateLecture = () => {
  DropDownPicker.setListMode('SCROLLVIEW')
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    {label: 'Faculty Name', value: 'Faculty Name'},
    {label: 'Name', value: 'Name'},
    {label: 'Names', value: 'Names'},
  ])

  // --------Date-time Picker----------
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)

    //For Date Picker
    let tempDate = new Date(currentDate)
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear()
    setText(fDate)
    console.log(fDate)
  }

  const showMode = currentMode => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  // const showTimepicker = () => {
  //     showMode('time');
  // };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFFFFF'}}>
      <StreamDropDown />
      <View style={styles.container}>
        <Text style={styles.labeltxt}>Subject</Text>
        <View style={{marginTop: 20}}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder='Select Subject'
            multiple={true}
            min={0}
            max={5}
            searchable={true}
            // autoScroll={true}
            // dropDownDirection="Bottom"
            style={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#E5E5E5',
              borderColor: '#E5E5E5',
            }}
            textStyle={{
              fontSize: 15,
              fontFamily: 'Montserrat-Regular',
            }}
            dropDownContainerStyle={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#E5E5E5',
              borderColor: '#E5E5E5',
            }}
          />
          <Text style={styles.formtxt}>Title:</Text>
          <View style={styles.txtbox}>
            <TextInput
              placeholder='ENTER TITLE'
              placeholderTextColor='#808080'
              style={{
                marginLeft: 0,
                backgroundColor: '#FFFFFF',
                width: '90%',
                height: 40,
                fontSize: 13,
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>
          <Text style={styles.labeltxt}>Choose Timing</Text>
          <Text style={styles.formtxt}>Date</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              width: '90%',
              height: 50,
              borderColor: '#C4C4C4',
              paddingHorizontal: 0,
              borderWidth: 1,
              marginTop: 15,
              borderRadius: 5,
              alignSelf: 'center',
            }}>
            <TextInput
              placeholder='Choose Date'
              placeholderTextColor='#808080'
              style={{
                marginLeft: 0,
                backgroundColor: '#FFFFFF',
                borderColor: '#C4C4C4',
                width: '90%',
                height: 40,
                fontFamily: 'Montserrat-Regular',
              }}>
              {text}
            </TextInput>
            <MaterialCommunityIcons
              name='calendar-blank-outline'
              size={26}
              color='#434b56'
              onPress={showDatepicker}
            />

            {show && (
              <DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={onChange}
              />
            )}
          </View>
          <View>
            <Text style={styles.formtxt}>Time</Text>
            <View>
              <SingleSelect />
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#C4C4C4',
                width: '80%',
                height: 50,
                borderColor: '#C4C4C4',
                alignSelf: 'center',
                borderWidth: 2,
                marginTop: 30,
                marginBottom: 30,
                borderRadius: 5,
                justifyContent: 'center',
              }}
              onPress={{}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Create Lecture
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default CreateLecture

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  txtbox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 50,
    borderColor: '#D3D3D3',
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
  },
  txtboxDesc: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 80,
    borderColor: '#D3D3D3',
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
  },
  formtxt: {
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: -10,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
  labeltxt: {
    color: '#000000',
    marginLeft: 15,
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
})
