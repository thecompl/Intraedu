import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const SubmitedTest = () => {

    return (
      <View style={styles.container}>
       <Text>Hii SubmitedTest</Text>
      </View>
    );
};

export default SubmitedTest;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
