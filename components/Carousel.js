import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const { height: ScreenHeight, width: ScreenWidth } = Dimensions.get('screen');

const Carousel = () => {
    const carouselItems = [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
        { id: 4, text: 'Item 4' },
        { id: 5, text: 'Item 5' },
    ];

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            style={styles.carousel}>
            {carouselItems.map(item => (
                <View key={item.id} style={styles.carouselItem}>
                    <Text style={styles.carouselText}>{item.text}</Text>
                    <Text style={styles.Number}>{item.id}/{carouselItems.length}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    carousel: {
        height: ScreenHeight * 0.30,
        width: ScreenWidth,
        backgroundColor: '#D9D9D9',
    },
    carouselItem: {
        width: ScreenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselText: {
        fontSize: 24,
        color: '#333',
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

