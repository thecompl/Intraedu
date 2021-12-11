import React from 'react'
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'

const ReportAttendance = (props) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => { props.navigation.navigate('HistoryAttendance') }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#D3D3D3',
            width: '90%',
            height: 80,
            borderRadius: 13,
            alignSelf: 'center',
            marginTop: 30,
            marginBottom: 10,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.label}>Stream Name</Text>
          <Feather name='download' size={30} color='#000000' />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ReportAttendance

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  label: {
    flexDirection: 'row',
    color: 'black', // <-- The magic
    textAlign: 'center', // <-- The magic
    fontSize: 17,
    fontFamily: 'Montserrat-SemiBold',
    // paddingHorizontal: "10%",
  },
})
