import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    // View was added for styling purposes on iOS
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        // style was added for touch effect on iOS
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 5,
    marginBottom: 8,
    backgroundColor: "lightgray",
  },
  goalText: {
    color: "black",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
