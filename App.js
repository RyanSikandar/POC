import { SelectedScreen } from './selectedScreen';
import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import SelectView from "./components/SelectView_component";
import SelectTag from './components/renderComp';

const handleSelect = (selectedItems) => {
  if (selectedItems.length === 0) {
    return;
  }
  Alert.alert('Your choices', selectedItems.join(', '));
}

const App = () => {
  return (
    // <>
    //   <View style={styles.container}>
    //     <Text style={styles.title}>Multi Select</Text>
    //     <SelectView data={['CitrusBits', 'Systems Limited', 'Confiz', 'Google', 'Appleafkshvkdsjfffffffffjffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaff']} multiSelect={true} />
    //   </View>
    //   <View style={styles.container}>
    //     <Text style={styles.title}>Single Select</Text>
    //     <SelectView data={['CitrusBits', 'Systems Limited', 'Confiz', 'Google', 'Appleafkshvkdsjfffffffffjffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaff']} multiSelect={false} />
    //   </View>
    // </>
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Multi Select</Text>
        <SelectTag data={['CitrusBits', 'Systems Limited', 'Confiz', 'Google', 'Apple', 'lahore']} multiSelect={true} selectHandle={handleSelect} />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Single Select</Text>
        <SelectTag data={['CitrusBits', 'Systems Limited', 'Confiz', 'Google', 'Apple', 'SanFrancisco','asssssssaaaaaaaaaaaaaaaaaaaaa','shdjd','ada']} multiSelect={false} selectHandle={handleSelect} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e6e6e6',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    //underline
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
    color: '#000',
    //bold
    fontWeight: 'bold',
  },
});

export default App;
