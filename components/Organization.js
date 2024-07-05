import React from "react";
import { Image, View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import TagComponent from "./TagComponent";

const Organization = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.mainText}>Organization Affiliation</Text>
            <TagComponent text={'Program: Graduate'} customStyles={styles} />
            <TagComponent text={'Chapter: Sigma Gamma Rho'} customStyles={styles} />
            <TagComponent text={'Pledged Date: 2023 Fall'} customStyles={styles} />
            <TagComponent text={'Lorem Ipsum'} customStyles={styles} />
            <TagComponent text={'Other Chapter'} customStyles={styles} />
        </View>)
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 8,
    },
    wrapper: {
        flexDirection: 'column',
        marginTop: 17,
        borderBottomColor: '#0000001A',
        borderBottomWidth: 1,
        paddingBottom: 17,
    },
    mainText: {
        marginBottom: 16,
    }
});

export default Organization;
