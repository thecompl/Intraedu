import React, { useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StandardYTubeSelectBtn from "./StandardYTubeSelectBtn";
import StreamYTubeSelectBtn from "./StreamYTubeSelectBtn";


const ShareYtube = (props) => {

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
            {/* <StreamYTubeSelectBtn /> */}
            <StandardYTubeSelectBtn />


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
                    <Text style={styles.formtxt}>
                        YouTube Embeded Code:
                    </Text>
                    <View style={styles.txtboxDesc}>
                        <TextInput
                            placeholder="PASTE HERE.."
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
                    <Text style={styles.formtxt}>
                        Title:
                    </Text>
                    <View style={styles.txtbox}>
                        <TextInput
                            placeholder="ENTER TITLE"
                            placeholderTextColor="#808080"
                            style={{
                                marginLeft: 0,
                                backgroundColor: "#FFFFFF",
                                width: "90%",
                                height: 40,
                                fontFamily: 'Montserrat-Regular',
                            }}
                        />
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
                            backgroundColor: "#C4C4C4",
                            width: "80%",
                            height: 50,
                            borderColor: "#C4C4C4",
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
                                color: '#FFFFFF',
                                fontSize: 20,
                                fontFamily: 'Montserrat-SemiBold',
                            }}>Share</Text>

                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default ShareYtube;

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
        marginTop: 20,
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
