import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const AssignBook = (props) => {

    const { name } = props.route.params;
     const { stream } = props.route.params;
     const { value } = props.route.params;

    return (
        <View animation="slideInRight" style={styles.container}>
            {/* <View style={styles.search}>

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
                            fontSize:12,
                            fontFamily: 'Montserrat-Regular',
                        }}
                    />
                    <Feather name="search" size={29} color="#000000" />
                </View>
            </View> */}

            <View>
                <Text style={styles.txt}>
                    Student Info
                </Text>
                <Text style={styles.txt}>
                    Name:
                    <Text style={styles.datatxt}>{name}</Text>
                </Text>
                {/* <Text style={styles.txt}>
                   Std:{book.value}
                </Text> */}
                <Text style={styles.txt}>
                    Stream:
                    <Text style={styles.datatxt}>{stream}</Text>
                </Text>
                <Text style={styles.txt}>
                    Book AssignBook:
                    <Text style={styles.datatxt}>{value}</Text>
                </Text>
                <Text style={styles.txt}>
                    Taken:
                    <Text style={styles.datatxt}></Text>
                </Text>
                <Text style={styles.txt}>
                    Return Date:
                    <Text style={styles.datatxt}></Text>
                </Text>
            </View>
           
            <View>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#C4C4C4",
                    width: "90%",
                    height: 50,
                    borderColor: "#C4C4C4",
                    alignSelf: "center",
                    borderWidth: 2,
                    marginTop: 30,
                    borderRadius: 5,
                    justifyContent: 'center',
                  


                }}
                    onPress={{}}
                >
                    <Text style={{
                        color: '#FFFFFF',
                        fontSize: 18,
                        fontFamily: 'Montserrat-SemiBold',
                    }}>Notify Student</Text>

                </TouchableOpacity>
            </View>
        </View>

    );
};

export default AssignBook;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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

    txt: {
        marginTop: 20,
        paddingHorizontal: 20,
        color: "#000000",
        fontFamily: 'Montserrat-Regular',
    },
    txtbox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        width: "90%",
        height: 50,
        borderColor: "#D3D3D3",
        alignSelf: "center",
        borderWidth: 1,
        marginTop: 15,
        borderRadius: 5,
    },
    formtxt: {
        marginTop: 25,
        paddingHorizontal: 20,
        marginBottom: -10,
        color: "#000000"
    },
    datatxt: {
        fontWeight: 'bold',
        // fontSize: 18,
    },
});
