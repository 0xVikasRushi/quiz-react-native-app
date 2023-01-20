import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>
          Question this is question jdbnsad jhdksa
        </Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.optionsButtons}>
          <Text style={styles.option}>option 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionsButtons}>
          <Text style={styles.option}>option 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionsButtons}>
          <Text style={styles.option}>option 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionsButtons}>
          <Text style={styles.option}>option 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Skip</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>End</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  topText: {
    fontSize: 36,
    fontWeight: "600",
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  buttons: {
    marginBottom: 16,
    paddingVertical: 12,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#76C893",
    padding: 20,
    borderRadius: 16,
  },
  option: {
    fontSize: 24,
    color: "white",
    fontWeight: "500",
  },
  buttontext: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
  },
  optionsButtons: {
    paddingVertical: 12,
    marginVertical: 6,
    borderRadius: 12,
    backgroundColor: "#1A759F",
    paddingHorizontal: 12,
  },
});
