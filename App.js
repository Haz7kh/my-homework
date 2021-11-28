import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

export default function App() {
  // All Functions
  var textInputValue = "<answer goes here>"; // String variable
  
  const handleChangeText = () => console.log(textInputValue); // const arrow function

  return (
    <View style={main.container}>
      <Text ><h1><u>"Hello world"</u></h1> 
      <p>"my first React Native App 
        here i am trying to explain my App what is for ....etc."
      </p>
      </Text>
      
     <Text>what would you like to get out of this course?</Text>
     <Text>Your answer is: {textInputValue}</Text>
      
      

      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: "https://cdn-japantimes.com/wp-content/uploads/2019/09/p10-schley-helloworld-a-20190919.jpg",
        }}
      />

      <Text>
        Parent text
        <Text style={{ fontWeight: "bold" }}> Child Text </Text>
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },

});
