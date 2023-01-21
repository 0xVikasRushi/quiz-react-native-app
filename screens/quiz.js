import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
    const url =
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNext = () => {
    if (questions !== 9) setQues(ques + 1);
  };

  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.topText}>Q .{questions[ques].question}</Text>
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

            {ques === 9 && (
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>End</Text>
              </TouchableOpacity>
            )}

            {ques !== 9 && (
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttontext}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
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
  parent: { height: "100%" },
});
