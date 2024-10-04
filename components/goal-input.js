import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalIinput = (props) => {
  const [goal, setGoal] = useState("");

  const inputHandler = (text) => {
    setGoal(text);
  };

  const addGoalHandler = () => {
    if (goal.trim() === "") {
      alert("Goal cannot be empty!");
    } else {
      props.onAddGoal(goal);
      setGoal("");
    }
  };

  const hideModal = () => {
    props.invisible();
    setGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/goal.png")}
            style={styles.goalImage}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={inputHandler}
            placeholder="Your course goal"
            value={goal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add goal" onPress={addGoalHandler} color="black" />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={hideModal} color="gray" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalIinput;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inputBox: {
    padding: 10,
    width: "95%",
    borderRadius: 8,
    backgroundColor: "white",
    marginVertical: 10,
  },
  inputContainer: {
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, 
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  goalImage: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
});
