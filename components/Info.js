import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Info = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>A little more about me...</Text>
            <Text style={styles.bodyText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: 'white',
        borderBottomColor: '#0000001A',
        borderBottomWidth: 1,
        paddingBottom: 17,
    },
    headerText: {
        fontSize: 13,
        fontWeight: '400',
        color: ' #00000099',
        marginBottom: 16,
    },
    bodyText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
        fontWeight: '350'
    },
});

export default Info;
