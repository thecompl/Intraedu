import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StandardAssSelectBtn from "./StandardAssSelectBtn";
import StreamAssSelectBtn from "./StreamAssSelectBtn";
import DocumentPicker from 'react-native-document-picker';

const CreateAss = (props) => {

    DropDownPicker.setListMode("SCROLLVIEW");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Faculty Name', value: 'Faculty Name' },
        { label: 'Name', value: 'Name' },

    ]);

    const [opens, setOpens] = useState(false);
    const [values, setValues] = useState(null);
    const [subjectitems, setSubjectItems] = useState([
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'C', value: 'C' },
    ]);



    return (
        <ScrollView  showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={{ marginTop: 35 }}>

            </View>

            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}

                placeholder="Choose Faculty"
                multiple={true}
                min={0}
                max={5}
                autoScroll={true}
                // dropDownDirection="Bottom"
                style={{
                    // marginTop: 40,
                    width: "90%",
                    alignSelf: "center",
                    backgroundColor: "#E5E5E5",
                    borderColor: "#E5E5E5",
                }}
                textStyle={{
                    fontSize: 15,
                    fontFamily: 'Montserrat-Regular',

                }}
                dropDownContainerStyle={{
                    width: "90%",
                    alignSelf: "center",
                    backgroundColor: "#E5E5E5",
                    borderColor: "#E5E5E5",
                }}
            />
            {/* <StreamAssSelectBtn /> */}
            <StandardAssSelectBtn />


            <View>
                <Text style={styles.labeltxt}>
                    Subject
                </Text>
                <View style={{ marginTop: 20, }}>

                    <DropDownPicker
                        open={opens}
                        value={values}
                        items={subjectitems}
                        setOpen={setOpens}
                        setValue={setValues}
                        setItems={setSubjectItems}

                        placeholder="Select Subject"
                        multiple={true}
                        min={0}
                        max={5}
                        autoScroll={true}
                        // dropDownDirection="Bottom"
                        style={{
                            width: "90%",
                            alignSelf: "center",
                            backgroundColor: "#E5E5E5",
                            borderColor: "#E5E5E5",
                        }}
                        textStyle={{
                            fontSize: 15,
                            fontFamily: 'Montserrat-Regular',
                        }}
                        dropDownContainerStyle={{
                            width: "90%",
                            alignSelf: "center",
                            backgroundColor: "#E5E5E5",
                            borderColor: "#E5E5E5",
                        }}
                    />

                    <View >
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#C4C4C4",
                            width: "80%",
                            height: 50,
                            borderColor: "#C4C4C4",
                            alignSelf: "center",
                            borderWidth: 2,
                            marginTop: "10%",
                            marginBottom: 15,
                            bottom: 0,
                            borderRadius: 5,
                            justifyContent: 'center',


                        }}
                            onPress={async () => {
                                try {
                                    const res = await DocumentPicker.pick({
                                        type: [DocumentPicker.types.allFiles],
                                    })

                                    console.log(
                                        JSON.stringify(res),
                                        // res.type, // mime type
                                        // res.name,
                                        // res.size,
                                    )
                                } catch (err) {
                                    if (DocumentPicker.isCancel(err)) {
                                        // User cancelled the picker, exit any dialogs or menus and move on
                                    } else {
                                        throw err
                                    }
                                }
                            }}
                        >
                            <Text style={{
                                color: '#000000',
                                fontSize: 20,
                                fontFamily: 'Montserrat-SemiBold',
                            }}>
                                Attach File
                                <MaterialCommunityIcons
                                    name="plus"
                                    size={20}
                                />
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <Text style={styles.formtxt}>
                        ADD Message:
                    </Text>
                    <View style={styles.txtboxDesc}>
                        <TextInput
                            placeholder="ADD Message"
                            placeholderTextColor="#808080"
                            style={{
                                marginLeft: 2,
                                backgroundColor: "#FFFFFF",
                                width: "90%",
                                height: 70,
                                fontFamily: 'Montserrat-Regular',
                            }}
                        />
                    </View>

                    <View >
                        <TouchableOpacity style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#E5E5E5",
                            width: "80%",
                            height: 50,
                            borderColor: "#E5E5E5",
                            alignSelf: "center",
                            borderWidth: 2,
                            marginTop: "15%",
                            marginBottom: 30,
                            bottom: 0,
                            borderRadius: 5,
                            justifyContent: 'center',

                        }}
                            onPress={() => { props.navigation.navigate('') }}
                        >
                            <Text style={{
                                color: '#000000',
                                fontSize: 18,
                                fontFamily: 'Montserrat-SemiBold',

                            }}>Submit</Text>

                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default CreateAss;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',

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
    txtboxDesc: {
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "#FFFFFF",
        width: "90%",
        height: 80,
        borderColor: "#D3D3D3",
        alignSelf: "center",
        borderWidth: 1,
        marginTop: 15,
        borderRadius: 5,
    },
    formtxt: {
        marginTop: 10,
        paddingHorizontal: 20,
        marginBottom: -10,
        color: "#000000",
        fontFamily: 'Montserrat-Regular',
    },
    labeltxt:
    {
        color: '#000000',
        marginLeft: 15,
        marginTop: 10,
        fontSize: 18,
        fontFamily: 'Montserrat-Regular',
    },
});
