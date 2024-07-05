import { SelectedScreen } from './selectedScreen';
import React from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import SelectView from "./components/SelectView_component";
import SelectTag from './components/SelectTag';
import ModalTester from './modals/MatchModal';
import ProfileConnecting from './screens/ProfileConnecting';

const handleSelect = (selectedItems) => {
  if (selectedItems.length === 0) {
    return;
  }
  Alert.alert('Your choices', selectedItems.join(', '));
}

const App = () => {
  return (
    //Select and shit checkbox etc
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

    //tags and shit
    // <>
    //   <View style={styles.container}>
    //     <Text style={styles.title}>Multi Select</Text>
    //     <SelectTag data={['CitrusBits', 'Systems Limited', 'Confiz', 'Google', 'Apple', 'lahore']} multiSelect={true} selectHandle={handleSelect} />
    //   </View>

    //   <View style={styles.container}>
    //     <Text style={styles.title}>Single Select</Text>
    //     <SelectTag data={['CitrusBits', 'Systems Limited', 'Confizzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz dgfdfgdfg dfgdfg dfgdfgdfg dfgdfg', 'New Zealand', 'Google', 'Apple', 'SanFrancisco', 'United States of America', 'shdjd', 'ada', "Pakistan", "India"]} multiSelect={false} selectHandle={handleSelect} />
    //   </View>
    // </>
    //<ModalTester/>
    

      <ProfileConnecting />

  );
};

export default App;
