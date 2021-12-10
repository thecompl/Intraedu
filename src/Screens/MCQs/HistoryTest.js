import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const HistoryTest = () => {

    return (
      <View style={styles.container}>
       <Text>Hii HistoryTest</Text>
      </View>
    );
};

export default HistoryTest;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
