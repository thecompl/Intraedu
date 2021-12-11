// import component
import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const SubjectDropDown = () => {
  DropDownPicker.setListMode('SCROLLVIEW')
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    {label: 'Maths', value: 'Faculty Name'},
    {label: 'Science', value: 'Name'},
    {label: 'English', value: 'Names'},
  ])
  return (
    <View>
      <Text style={styles.labeltxt}>Subject </Text>
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
        // dropDownDirection="TOP"
        style={{
          width: '90%',
          alignSelf: 'center',
          backgroundColor: '#E5E5E5',
          borderColor: '#E5E5E5',
          marginTop: 10,
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
    </View>
  )
}
export default SubjectDropDown

const styles = StyleSheet.create({
  labeltxt: {
    color: '#000000',
    marginLeft: 15,
    marginTop: 20,
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
})
