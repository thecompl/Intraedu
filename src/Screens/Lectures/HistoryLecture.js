import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const HistoryLecture = () => {

    return (
      <View style={styles.container}>
       <Text>Hii HistoryLecture</Text>
      </View>
    );
};

export default HistoryLecture;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
