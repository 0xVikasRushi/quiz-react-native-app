import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Results from "./screens/results";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Quiz /> */}
      <Results />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 16,
  },
});
