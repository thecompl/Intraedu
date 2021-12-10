import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = (props) => {

  return (
    <ScrollView  showsVerticalScrollIndicator={false} style={styles.container}>
      <View>

        <View style={styles.header}>
          <Text style={styles.headline}>Good Morning!</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.headline}>Teacher's Dashboard</Text>
        </View>

        <View style={styles.search}>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#262630",
              width: "70%",
              height: 45,
              borderRadius: 13,
              paddingHorizontal: 10,

            }}>
            <FontAwesome name="circle-o" size={30} color="#FFFFFF" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#FFFFFF"
              style={{
                marginLeft: 15,
                backgroundColor: "#262630",
                width: "70%",
                height: 45,
                color: "#FFFFFF",
                fontFamily: 'Montserrat-Regular',
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#262630",
              width: "15%",
              height: 45,
              borderRadius: 13,
              justifyContent: 'center'
            }}>
            <TouchableOpacity>
              <Ionicons name="arrow-forward" size={35} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => { props.navigation.navigate('Student') }}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/image1.png")}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Students</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => { props.navigation.navigate('Exam') }}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/image2.png")}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Exams</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn}
            onPress={() => { props.navigation.navigate('Event') }}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/image3.png")}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Events</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.categoryContainer, { marginTop: 10 }]}>
          <TouchableOpacity style={styles.categoryBtn}
            onPress={() => { props.navigation.navigate('Library') }}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/image4.png")}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Library</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn}
            onPress={() => { props.navigation.navigate('Notification') }}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/image5.png")}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Complaints</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn}
            onPress={() => { props.navigation.navigate('LeaveApp') }}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/image6.png")}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Leave</Text>
            <Text style={styles.categoryBtnsTxt}>Application </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.categoryContainer, { marginTop: 10 }]}>
          <TouchableOpacity style={styles.categoryBtn}
            onPress={() => { props.navigation.navigate('Notification') }}
          >
            <View style={styles.categoryIcons}>
              <Image
                source={require("../../assets/image7.png")}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Performance</Text>
            <Text style={styles.categoryBtnsTxt}>Reports</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn}
            onPress={() => { props.navigation.navigate('Document') }}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/image8.png")}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Documents</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn}
            onPress={() => { props.navigation.navigate('Ptm') }}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/image9.png")}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>PTM</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: 'row',

          width: '61%',
          // alignSelf: 'center',
          marginLeft: "4.5%",
          marginTop: 10,
          marginBottom: 10,
        }}>
          <TouchableOpacity style={styles.categoryBtn}
            onPress={() => { props.navigation.navigate('Youtube') }}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/image11.png")}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>YouTube</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn}
            onPress={() => { props.navigation.navigate('AttendanceShow') }}
          >
            <View style={styles.categoryIcon}>
              <Image
                source={require("../../assets/image12.png")}
              />
            </View>
            <Text style={styles.categoryBtnTxt}>Attendance</Text>
          </TouchableOpacity>


        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E4E4E4",

  },
  headline: {
    flexDirection: "row",
    color: 'black', // <-- The magic
    textAlign: 'center', // <-- The magic

    fontSize: 22,
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-SemiBold'

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
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    // backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    // fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins-SemiBold'
  },
  categoryIcons: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    marginTop: 10,
    // backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnsTxt: {
    alignSelf: 'center',
    marginTop: -7,
    // fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins-SemiBold'
  },
});

