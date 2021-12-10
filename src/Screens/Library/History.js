import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';

const HistoryDoc = () => {

    return (
      <Animatable.View animation="slideInRight" style={styles.container}>
       <Text>Hii HistoryDoc</Text>
      </Animatable.View>
    );
};

export default HistoryDoc;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
