import { View, Text, Image, StyleSheet, TextInput, Touchable, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import {useRouter} from "expo-router"

export default function Signup() {
  const router = useRouter()

  return (
    <View style={{
        display: "flex",
        alignItems: "center",
        padding: 20,
        flex: 1,
        backgroundColor: Colors.WHITE,
    }}>
      <Image 
        source={require('../../assets/images/logo.png')}
        style={{width: 200, height: 200}}
      />
      <Text style={{fontSize: 28, fontFamily: 'outfit-bold'}}>Create An Account</Text>
      <TextInput placeholder='Full Name' style={[styles.textInput, {marginTop: 30}]} />
      <TextInput placeholder='Email' style={styles.textInput} />
      <TextInput placeholder='Password' secureTextEntry={true} style={styles.textInput} />
      <TouchableOpacity style={{
        borderWidth: 1,
        borderColor: "Black",
        borderRadius: 10,
        width: "100%",
        marginTop: 30,
        padding: 15,
        backgroundColor: Colors.PRIMARY
      }}>
        <Text style={{
          fontSize: 22,
          textAlign: "center",
          color: Colors.WHITE,
          fontFamily: 'outfit-bold'
        }}>Create Account</Text>
      </TouchableOpacity>
      <View style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: 12
      }}>
        <Text style={{
          fontSize: 17,
          fontFamily: 'outfit',
        }}>Already have an account?</Text>
        <Pressable onPress={() => router.push('./signIn')}>
          <Text style={{
            fontSize: 17,
            fontFamily: 'outfit',
            color: Colors.PRIMARY,
            textDecorationLine: "underline"
          }}>sign in</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 17,
        borderWidth: 1,
        borderColor: "Black",
        borderRadius: 10,
        width: "100%",
        marginTop: 20,
        padding: 15,
    }
})