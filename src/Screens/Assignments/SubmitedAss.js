import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const SubmitedAss = () => {

    return (
      <View style={styles.container}>
       <Text>Hii SubmitedAss</Text>
      </View>
    );
};

export default SubmitedAss;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
