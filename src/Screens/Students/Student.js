import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import SearchInput, {createFilter} from 'react-native-search-filter'
import {DataTable, Avatar,} from 'react-native-paper'
import axios from 'axios'

const Student = props => {
  const users = [
    {id: '1', label: 'ABC Random', value: 'Name'},
    {id: '2', label: 'ABC Random', value: 'Faculty'},
    {id: '3', label: 'ABC Random', value: 'Faculty'},
    {id: '4', label: 'ABC Random', value: 'Faculty'},
    {id: '5', label: 'ABC Random', value: 'Faculty'},
    {id: '6', label: 'ABC Random', value: 'Faculty'},
    {id: '7', label: 'ABC Random', value: 'Faculty'},
  ]
  //----------Search filter-------------
  const KEYS_TO_FILTERS = ['label', 'value']
  const [state, setState] = useState({searchTerm: ''})

  const filterusers = users.filter(
    createFilter(state.searchTerm, KEYS_TO_FILTERS),
  )
  const searchUpdated = term => {
    setState({searchTerm: term})
  }

  // --------APICall----------
  // const [getdata , setGetdata] = useState([]);

  // useEffect(() => {
  //   getapiData();
  // }, [])

  // const getapiData = async () => {
  //   const resp = await axios.get('http://localhost:2222/posts')
  //   setGetdata(resp);
  //   // console.log(resp);
  // }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.search}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: '100%',
            height: 50,
            borderColor: '#D3D3D3',
            paddingHorizontal: 2,
            borderWidth: 2,
            marginTop: 15,
            borderRadius: 10,
          }}>
          <TextInput
            placeholder='Search by Names./Contact number'
            placeholderTextColor='#808080'
            onChangeText={term => {
              searchUpdated(term)
            }}
            style={{
              marginLeft: 0,
              backgroundColor: '#FFFFFF',
              width: '90%',
              height: 40,
              fontSize: 12,
              fontFamily: 'Montserrat-Regular',
            }}
          />
          <Feather name='search' size={29} color='#000000' />
        </View>
      </View>

      {filterusers.map((user, index) => (
        <View style={styles.userinfo} key={index}>
          <DataTable>
            <DataTable.Row style={{borderBottomWidth: 0}}>
              <DataTable.Cell>
                <Avatar.Image
                  source={{}}
                  size={50}
                  style={{backgroundColor: '#000000'}}
                />
              </DataTable.Cell>
              <DataTable.Cell style={{flex: 4.5}}>
                <Text style={styles.label}>{user.label}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      ))}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          height: 60,
          width: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000000',
          borderRadius: 60,
          marginBottom: 30,
        }}
        onPress={() => props.navigation.navigate('TabScreen')}>
        <Feather name='plus' size={30} color='white' />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Student

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  search: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderWidth: 0,
    borderColor: '#E4E4E4',
  },
  userinfo: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    flexDirection: 'row',
    color: 'black', // <-- The magic
    textAlign: 'center', // <-- The magic
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    color: '#000000',
  },
  centeredView: {
    // flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '30%',
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
})
