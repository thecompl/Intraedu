import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const UpComingLecture = () => {

    return (
      <View style={styles.container}>
       <Text>Hii UpComingLecture</Text>
      </View>
    );
};

export default UpComingLecture;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
