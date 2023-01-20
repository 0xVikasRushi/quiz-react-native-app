import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import Title from "../components/title";
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/speech-text-concept-illustration_114360-4162.jpg?w=1380&t=st=1674221537~exp=1674222137~hmac=a8e3776332ee04f741575805a5eb79741e3572df7b5535ba894a66a67f0fc759",
          }}
          style={styles.banner}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
        <Text>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 30,
  },
});
