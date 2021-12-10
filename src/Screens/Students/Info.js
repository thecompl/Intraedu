import React, { useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar, TextInput } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Info = () => {
    //   -----------------DropDownPicker------------
    DropDownPicker.setListMode("SCROLLVIEW");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'cdd', value: 'cdd' },
        { label: 'aaaa', value: 'aaaa' }
    ]);
    const [opens, setOpens] = useState(false);
    const [values, setValues] = useState(null);
    const [Genderitems, setGenderItems] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ]);
    const [opened, setOpened] = useState(false);
    const [valued, setValued] = useState(null);
    const [Subitems, setSubItems] = useState([
        { label: 'Math', value: 'Math' },
        { label: 'ABC', value: 'ABC' },
        { label: 'CDE', value: 'CDE' },
    ]);


    // --------Date-time Picker----------
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        //For Date Picker
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate)
        console.log(fDate)

        //  -------For Both Date and Time Picker---------
        // let tempDate = new Date(currentDate);
        // let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        // let fTime = 'Hours:' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes();
        // setText(fDate + '/n + fTime)
        // console.log(fDate + '(n' + fTime + ')')

    };


  

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    // const showTimepicker = () => {
    //     showMode('time');
    // };

   return (
        <ScrollView  showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#C4C4C440",
                        width: "80%",
                        height: 80,
                        borderRadius: 13,
                        alignSelf: "center",
                        marginTop:20,
                        paddingHorizontal: 20,
                    }}>
                    <FontAwesome5
                        name="user-alt"
                        size={20}
                        color="#000000"
                    />
                    <Text style={styles.label}>
                        Add Profile Picture
                    </Text>
                </View>
                <Text style={styles.formtxt}>
                    Name:
                </Text>
                <View style={styles.txtbox}>
                    <TextInput
                        placeholder="ENTER NAME"
                        placeholderTextColor="#808080"
                        style={{
                            marginLeft: 2,
                            backgroundColor: "#FFFFFF",
                            width: "90%",
                            height: 40,
                            fontFamily: 'Montserrat-Regular'
                        }}
                    />
                </View>
                <Text style={styles.formtxt}>
                    Mobile No:
                </Text>
                <View style={styles.txtbox}>
                    <TextInput
                        placeholder="ENTER MOIBLE NUMBER"
                        placeholderTextColor="#808080"
                        style={{
                            marginLeft: 2,
                            backgroundColor: "#FFFFFF",
                            width: "90%",
                            height: 40,
                            fontFamily: 'Montserrat-Regular'
                        }}
                    />
                </View>
                <Text style={styles.formtxt}>
                    Email ID:
                </Text>
                <View style={styles.txtbox}>
                    <TextInput
                        placeholder="EMAIL ID HERE"
                        placeholderTextColor="#808080"
                        style={{
                            marginLeft: 2,
                            backgroundColor: "#FFFFFF",
                            width: "90%",
                            height: 40,
                            fontFamily: 'Montserrat-Regular'
                        }}
                    />
                </View>
                <Text style={styles.formtxt}>
                    STANDARD:
                </Text>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.txtbox}
                    placeholder="SELECT STANDARD"
                    dropDownDirection="TOP"
                    dropDownContainerStyle={{
                        width: "90%",
                        alignSelf:"center",
                        borderColor:"#C4C4C4",
                        
                      }}
                    textStyle={{
                        fontSize: 15,
                        color: '#000000',
                        fontFamily: 'Montserrat-Regular',
                    }}
                />
                <Text style={styles.formtxt}>
                    Gender:
                </Text>
                <DropDownPicker
                    open={opens}
                    value={values}
                    items={Genderitems}
                    setOpen={setOpens}
                    setValue={setValues}
                    setItems={setGenderItems}
                    style={styles.txtbox}
                    placeholder="SELECT Gender"
                    // dropDownDirection="Bottom"
                     dropDownContainerStyle={{
                      width: "90%",
                      alignSelf:"center",
                      borderColor:"#C4C4C4"
                    }}
                    textStyle={{
                        fontSize: 15,
                        color: '#000000',
                        fontFamily: 'Montserrat-Regular',
                    }}
                />
                <Text style={styles.formtxt}>
                    DOB:
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#FFFFFF",
                        width: "90%",
                        height: 50,
                        borderColor: "#D3D3D3",
                        paddingHorizontal: 0,
                        borderWidth: 2,
                        marginTop: 15,
                        borderRadius: 10,
                        alignSelf: "center",
                        
                    }}>
                    <TextInput
                        placeholder="SELECT DOB"
                        placeholderTextColor="#808080"
                        style={{
                            marginLeft: 2,
                            backgroundColor: "#FFFFFF",
                            width: "90%",
                            height: 40,
                            fontFamily: 'Montserrat-Regular',
                        }}
                    >{text}</TextInput>
                    <MaterialCommunityIcons
                        name="calendar-blank-outline"
                        size={26}
                        color="#434b56"
                        onPress={showDatepicker}
                    />


                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
                <Text style={styles.formtxt}>
                    Select Subjects:
                </Text>
                <DropDownPicker
                    open={opened}
                    value={valued}
                    items={Subitems}
                    setOpen={setOpened}
                    setValue={setValued}
                    setItems={setSubItems}
                    style={styles.txtbox}
                    placeholder="Choose Subjects"
                    // dropDownDirection="Bottom"
                     dropDownContainerStyle={{
                      width: "90%",
                      alignSelf:"center",
                      borderColor:"#C4C4C4"
                    }}
                    textStyle={{
                        fontSize: 15,
                        color: '#000000',
                        fontFamily: 'Montserrat-Regular',
                    }}
                />
                
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#FFFFFF",
                        width: "80%",
                        height: 60,
                        borderColor: "#000000",
                        alignSelf: "center",
                        borderWidth: 2,
                        marginTop: 15,
                        borderRadius: 10,
                        justifyContent: 'center',
                        elevation: 3,
                        

                    }}>
                        <Text style={{
                            color: '#000000',
                            fontFamily: 'Montserrat-Regular',
                        }}>Cancel</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#000000",
                        width: "80%",
                        height: 60,
                        borderColor: "#D3D3D3",
                        alignSelf: "center",
                        borderWidth: 2,
                        marginTop: 15,
                        borderRadius: 10,
                        justifyContent: 'center',
                        elevation: 3,

                    }}
                    onPress={{}}
                    >
                        <Text style={{
                            color: '#FFFFFF',
                            fontFamily: 'Montserrat-Regular',
                        }}>Save</Text>

                    </TouchableOpacity>
                </View>
            </View >

        </ScrollView >
    )
}

export default Info


const styles = StyleSheet.create({
    container: {
        // marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
    },
    label: {
        flexDirection: "row",
        color: 'black', // <-- The magic
        textAlign: 'center', // <-- The magic
        fontFamily:'Montserrat-SemiBold',
        fontSize: 15,
        paddingHorizontal: "10%"

    },
    txtbox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        width: "90%",
        height: 50,
        borderColor: "#D3D3D3",
        alignSelf: "center",
        borderWidth: 2,
        marginTop: 15,
        borderRadius: 10,
        
    },
    formtxt: {
        marginTop: 10,
        paddingHorizontal: 20,
        marginBottom: -10,
        fontFamily: 'Montserrat-Regular',
        color:"#000000",
    },
})