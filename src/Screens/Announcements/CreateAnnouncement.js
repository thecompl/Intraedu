import React, {useState} from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import StreamDropDown from '../DropDown/StreamDropDown'
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

const CreateAnnouncement = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#FFFFFF'}}>
      <StreamDropDown />
      <View style={styles.container}>
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
              fontFamily: 'Montserrat-Regular',
            }}
          />
        </View>
        <Text style={styles.formtxt}>Add Message:</Text>
        <AutoGrowingTextInput style={styles.txtboxDesc} placeholder={'Add Message'} />

        <Text style={styles.formtxt}>Add Image/Optional:</Text>
        <View style={styles.txtbox}>
          <TextInput
            placeholder='Add Image/Optional'
            placeholderTextColor='#808080'
            style={{
              marginLeft: 0,
              backgroundColor: '#FFFFFF',
              width: '90%',
              height: 40,
              fontFamily: 'Montserrat-Regular',
            }}
          />
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
              borderRadius: 5,
              justifyContent: 'center',
            }}
            onPress={{}}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 20,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default CreateAnnouncement

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
    fontFamily: 'Montserrat-Regular',
  },
  formtxt: {
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: -10,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
})
