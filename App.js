import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./navigation/index";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 16,
  },
});
