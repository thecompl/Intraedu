import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const Library = () => {

    return (
        <Animatable.View animation="slideInRight" style={styles.container}>
            <View style={styles.search}>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#FFFFFF",
                        width: "100%",
                        height: 50,
                        borderColor: "#D3D3D3",
                        paddingHorizontal: 0,
                        borderWidth: 2,
                        marginTop: 15,
                        borderRadius: 10,
                    }}>

                    <TextInput
                        placeholder="Search by Names./Contact number"
                        placeholderTextColor="#808080"
                        style={{
                            marginLeft: 0,
                            backgroundColor: "#FFFFFF",
                            width: "90%",
                            height: 40,
                        }}
                    />
                    <Feather name="search" size={29} color="#000000" />
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#C4C4C440",
                    width: "90%",
                    height: 80,
                    borderRadius: 13,
                    alignSelf: "center",
                    marginTop: 30,
                    marginBottom: 10,
                    paddingHorizontal: 20,
                }}>
                <Feather
                    name="book"
                    size={35}
                    color="#000000"
                    // style={{
                    //     backgroundColor: 'grey',
                    //     borderWidth: 0,
                    //     alignItems: 'center',
                    //     justifyContent: 'center',
                    //     alignSelf: 'center',
                    //     width: 40,
                    //     height: 40,
                    //     borderRadius: 15,
                    // }}
                />
                <Text style={styles.label}>
                    Book Name
                </Text>
            </View>
        </Animatable.View>

    );
};

export default Library;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',

    },
    label: {
        flexDirection: "row",
        color: 'black', // <-- The magic
        textAlign: 'center', // <-- The magic
        fontWeight: 'bold',
        fontSize: 19,
        paddingHorizontal: "10%"

    },      
    search: {
        height: 60,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        justifyContent: "space-between",
        borderWidth: 0,
        borderColor: "#E4E4E4",

    },
});




