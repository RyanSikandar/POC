import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Box = ({ heading, trait }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.text}>{trait}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '30%',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 12,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontWeight: '350',
        fontSize: 14,
        color: '#00000099'
    },
    text: {
        fontSize: 14,
        color: "black"
    },
});

export default Box;
