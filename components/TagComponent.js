import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TagComponent = ({ text, customStyles }) => {
    const containerStyles = {
        ...styles.container,
        ...customStyles?.container,
    };

    const textStyles = {
        ...styles.text,
        ...customStyles?.text,
    };

    return (
        <View style={[containerStyles, {textAlign:'left' }]}>
            <Text style={textStyles}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: '#f0f0f0',

    },
    text: {
        fontSize: 16,
        color: '#000',
    },
});

export default TagComponent;
