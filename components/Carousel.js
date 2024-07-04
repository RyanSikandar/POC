import React from "react";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";

const Carousel = () => {
    return (
        <View style={styles.Carousel}>
            <Text style={styles.Number}>1/8</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Carousel: {
        height: '40%',
        width: '100%',
        backgroundColor: '#D9D9D9',
        position: 'relative',
    },
    Number: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 10,
        fontSize: 12,
        fontWeight: '500'
    },

});

export default Carousel;