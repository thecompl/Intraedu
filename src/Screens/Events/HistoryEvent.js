import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const HistoryEvent = () => {

    return (
      <View style={styles.container}>
       <Text>Hii HistoryEvent</Text>
      </View>
    );
};

export default HistoryEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
