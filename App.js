import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import SelectView from "./components/SelectView_component";


//only alert when the user selects an item
const handleSelect = (selectedItems) => {
  if (selectedItems.length === 0) {
    return;
  }
  Alert.alert('Selected Items', selectedItems.join(', '));
};

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Multi Select</Text>
        <SelectView data={['CitrusBits', 'Systems Limited', 'Confiz', 'Google', 'Appleafkshvkdsjfffffffffjffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaff']} multiSelect={true} onSelect={handleSelect} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Single Select</Text>
        <SelectView data={['CitrusBits', 'Systems Limited', 'Confiz', 'Google', 'Appleafkshvkdsjfffffffffjffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaff']} multiSelect={false} onSelect={handleSelect} />
      </View>
    </>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
});

export default App;
