import { Text, View, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE
      }}
    >
      <Image 
        source={require("../assets/images/landing.png")}
        style={{width:"100%", height:300, marginTop: 70}}
      />
      <View style={{
        padding: 25,
        backgroundColor: Colors.PRIMARY,
        height: "100%",
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
      }}>
        <Text style={{
          color: Colors.WHITE,
          fontSize: 32,
          textAlign: "center",
          fontFamily: "outfit-bold"
        }}>
          Welcome To Coaching Guru
        </Text>
        <Text style={{
          fontSize: 20,
          color: Colors.WHITE,
          marginTop: 20,
          textAlign: "center",
          fontFamily: "outfit"
        }}>
          Transform your Ideas into engaging educational content, effortlessly with AI 📚 🤖
        </Text>
        <View style={[styles.button, {marginTop: 40}]}>
          <Text style={[styles.buttonText, {color: Colors.PRIMARY}]}>Get Started</Text>
        </View>
        <View style={[styles.button,{
          backgroundColor: Colors.PRIMARY,
          borderWidth: 1,
          borderColor: Colors.WHITE
        }]}>
          <Text style={[styles.buttonText, {color: Colors.WHITE}]}>Already have an account?</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    marginTop: 10,
    borderRadius: 10
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "outfit"
  }
})
