import React, { useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CreateEvent = () => {

  DropDownPicker.setListMode("SCROLLVIEW");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Faculty Name', value: 'Faculty Name' },
    { label: 'Name', value: 'Name' },
    { label: 'Names', value: 'Names' },
  ]);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30, }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.txtbox}
          placeholder="Choose Faculty"
          multiple={true}
          min={0}
          max={5}
          // dropDownDirection="Bottom"
          style={{
            width: "90%",
            alignSelf: "center",
            backgroundColor: "#E5E5E5",
            borderColor:'#E5E5E5',
          }}
          textStyle={{
            fontSize: 15,
            fontFamily: 'Montserrat-Regular',
          }}
          dropDownContainerStyle={{
            width: "90%",
            alignSelf: "center",
            backgroundColor: "#E5E5E5",
            borderColor:'#E5E5E5',
          }}
        />
        <Text style={styles.formtxt}>
          Name:
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
              fontSize:13,
              fontFamily: 'Montserrat-Regular',
            }}
          />
        </View>
        <Text style={styles.formtxt}>
          Add Description:
        </Text>
        <View style={styles.txtboxDesc}>
          <TextInput
            placeholder="ADD Description"
            placeholderTextColor="#808080"
            style={{

              backgroundColor: "#FFFFFF",
              width: "90%",
              height: 70,
              fontSize:13,
              fontFamily: 'Montserrat-Regular',
            }}
          />
        </View>

        <Text style={styles.formtxt}>
          Add Image/Optional:
        </Text>
        <View style={styles.txtbox}>
          <TextInput
            placeholder="Add Image/Optional"
            placeholderTextColor="#808080"
            style={{
              marginLeft: 0,
              backgroundColor: "#FFFFFF",
              width: "90%",
              height: 40,
              fontSize:13,
              fontFamily: 'Montserrat-Regular',
            }}
          />
        </View>
        <View>
          <TouchableOpacity style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#D3D3D3",
            width: "80%",
            height: 50,
            borderColor: "#D3D3D3",
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
              fontSize:18,
            fontFamily: 'Montserrat-SemiBold',
              
            }}>Create</Text>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateEvent;

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
});
