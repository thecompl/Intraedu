import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const HistoryAnnouncement = () => {

    return (
      <View style={styles.container}>
       <Text>Hii HistoryAnnouncement</Text>
      </View>
    );
};

export default HistoryAnnouncement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
