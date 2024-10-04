import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/goal-item";
import GoalIinput from "./components/goal-input";

export default function App() {
  const [myGoals, setMyGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Adding a generic property in app.json file would apply to all major screens in a Native app

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const addGoalHandler = (goal) => {
    setMyGoals((prevGoals) => [
      ...prevGoals,
      { text: goal, id: Math.random().toString() },
    ]);
    hideModal();
  };

  const deleteItem = (id) => {
    setMyGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.button}>
        <Button title="Add New Goal" color="black" onPress={showModal} />
      </View>
      <GoalIinput
        onAddGoal={addGoalHandler}
        visible={modalVisible}
        invisible={hideModal}
      />
      <View style={styles.goalContainer}>
        <FlatList
          data={myGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteItem}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  goalContainer: {
    paddingVertical: 10,
    paddingTop: 5,
    flex: 8,
  },
  button: {
    marginVertical: 10,
  },
});
