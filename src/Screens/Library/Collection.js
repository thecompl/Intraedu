import React from 'react';
import { dataIndexAttribute } from 'react-horizontal-scrolling-menu/dist/types/constants';
import { View, Text, Button, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


const Collection = (props) => {

  const books = [
    { name: 'Vikas Yadav', stream: 'FYBCOM',date:'11/11/21',bookname:'ABBCCD',rdate:'1/1/22' },
    { name: 'Vikas Gupta', stream: 'TYBCOM',date:'15/11/21',bookname:'XYZXYZ',rdate:'1/1/22' },
  ]

  return (
    <Animatable.View animation="slideInRight" style={styles.container}>
      {books.map((book, index) => (
        <View key={index}>
          <TouchableOpacity style={{
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
            onPress={() => { props.navigation.navigate('CollectionDetail', { name: book.name, stream: book.stream ,date:book.date, bookname:book.bookname,rdate:book.rdate }) }}
          >
            <View>
              <Text style={{color: '#000000',fontSize: 18,fontFamily: 'Montserrat-SemiBold'}}>{book.name}</Text>
              <Text style={{ color: '#000000', fontFamily: 'Montserrat-Regular'}}>{book.bookname}</Text>
            </View>
            <View>
              <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Montserrat-SemiBold', }}>{book.stream}</Text>
              <Text style={{ color: '#000000',fontFamily: 'Montserrat-Regular' }}>{book.date}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </Animatable.View>
  );
};

export default Collection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
