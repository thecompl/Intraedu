import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {Avatar} from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'

const CollectionDetail = props => {
  const {name, bookname, stream, date, rdate} = props.route.params

  return (
    <ScrollView style={styles.container}>
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
                                fontSize: 12,
                                fontFamily: 'Montserrat-Regular',
                            }}
                        />
                             <Feather name="search" size={29} color="#000000" />
                </View>
            </View> */}

      <View style={{marginTop: 15}}>
        <Text style={styles.txt}>Student Info</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 20,
            alignItems: 'flex-end',
          }}>
          <Text style={styles.txt}>
            Name:
            <Text style={styles.datatxt}>{name}</Text>
          </Text>
          <Avatar.Image
            source={{}}
            size={50}
            style={{backgroundColor: '#000000'}}
          />
        </View>
        {/* <Text style={styles.txt}>
                        Std:{book.value}
                    </Text> */}
        <Text style={styles.txt}>
           Stream:
           <Text style={styles.datatxt}>{stream}</Text>
         </Text>
         <Text style={styles.txt}>
           Book Assigned:
           <Text style={styles.datatxt}>{bookname}</Text>
         </Text>
         <Text style={styles.txt}>
           Taken:
           <Text style={styles.datatxt}>{date}</Text>
         </Text>
         <Text style={styles.txt}>
           Return Date:
           <Text style={styles.datatxt}>{rdate}</Text>
         </Text>
      </View>
      <View>
        <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#C4C4C4',
          width: '90%',
          height: 50,
          borderColor: '#D3D3D3',
          alignSelf: 'center',
          borderWidth: 2,
          marginTop: 40,
          marginBottom: 20,
          borderRadius: 5,
          justifyContent: 'center',
        }}
        onPress={() => {}}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 18,
            fontFamily: 'Montserrat-SemiBold',
          }}>
         Collected
        </Text>
      </TouchableOpacity>
      <Text
         style={{
        //    marginTop: 20,
           paddingHorizontal: 20,
           fontSize: 20,
           alignSelf: 'center',
           color: '#000000',
           fontFamily: 'Montserrat-SemiBold',
         }}>
         OR
       </Text>
       <View>
         <TouchableOpacity
           style={{
             flexDirection: 'row',
             alignItems: 'center',
             backgroundColor: '#C4C4C4',
             width: '90%',
             height: 50,
             borderColor: '#C4C4C4',
             alignSelf: 'center',
             borderWidth: 2,
             marginTop: 20,
             borderRadius: 5,
             justifyContent: 'center',
           }}
           onPress={{}}>
           <Text
             style={{
               color: '#FFFFFF',
               fontSize: 18,
               fontFamily: 'Montserrat-SemiBold',
             }}>
             Call
           </Text>
         </TouchableOpacity>
       </View>
      </View>
    </ScrollView>
    // <View style={styles.container}>
    //   <View>
    //     <Text style={styles.txt}>Student Info</Text>
    //     <View
    //       style={{
    //         flex: 1,
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         marginRight: 20,
    //         alignItems: 'flex-end',
    //       }}>
    //       <Text style={styles.txt}>
    //         Name:
    //         <Text style={styles.datatxt}>{name}</Text>
    //       </Text>
    //       <Avatar.Image
    //         source={{}}
    //         size={50}
    //         style={{backgroundColor: '#000000'}}
    //       />
    //     </View>
    //     {/* <Text style={styles.txt}>
    //                Std:{book.value}
    //             </Text> */}
    //     
    //   </View>

    //   <View>
    //     <TouchableOpacity
    //       style={{
    //         flexDirection: 'row',
    //         alignItems: 'center',<Text style={styles.txt}>
    //       Stream:
    //       <Text style={styles.datatxt}>{stream}</Text>
    //     </Text>
    //     <Text style={styles.txt}>
    //       Book CollectionDetail:
    //       <Text style={styles.datatxt}>{bookname}</Text>
    //     </Text>
    //     <Text style={styles.txt}>
    //       Taken:
    //       <Text style={styles.datatxt}>{date}</Text>
    //     </Text>
    //     <Text style={styles.txt}>
    //       Return Date:
    //       <Text style={styles.datatxt}>{rdate}</Text>
    //     </Text>
    //         backgroundColor: '#C4C4C4',
    //         width: '90%',
    //         height: 50,
    //         borderColor: '#C4C4C4',
    //         alignSelf: 'center',
    //         borderWidth: 2,
    //         marginTop: 30,
    //         borderRadius: 5,
    //         justifyContent: 'center',
    //       }}
    //       onPress={{}}>
    //       <Text
    //         style={{
    //           color: '#FFFFFF',
    //           fontSize: 18,
    //           fontFamily: 'Montserrat-SemiBold',
    //         }}>
    //         Collected
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    //   <Text
    //     style={{
    //       marginTop: 20,
    //       paddingHorizontal: 20,
    //       fontSize: 20,
    //       alignSelf: 'center',
    //       color: '#000000',
    //       fontFamily: 'Montserrat-SemiBold',
    //     }}>
    //     OR
    //   </Text>
    //   <View>
    //     <TouchableOpacity
    //       style={{
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         backgroundColor: '#C4C4C4',
    //         width: '90%',
    //         height: 50,
    //         borderColor: '#C4C4C4',
    //         alignSelf: 'center',
    //         borderWidth: 2,
    //         marginTop: 30,
    //         borderRadius: 5,
    //         justifyContent: 'center',
    //       }}
    //       onPress={{}}>
    //       <Text
    //         style={{
    //           color: '#FFFFFF',
    //           fontSize: 18,
    //           fontFamily: 'Montserrat-SemiBold',
    //         }}>
    //         Call
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  )
}

export default CollectionDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  txt: {
    marginTop: 20,
    paddingHorizontal: 20,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
  txtbox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 50,
    borderColor: '#D3D3D3',
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 5,
  },
  formtxt: {
    marginTop: 25,
    paddingHorizontal: 20,
    marginBottom: -10,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
  datatxt: {
    fontWeight: 'bold',
    // fontSize: 18,
  },
})
