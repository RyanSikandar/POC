import React from "react";
import { Image, View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import TagComponent from "./TagComponent";

const data = [
    'Museum', 'Books', 'Soul Music', 'Gallery', 'Lorem', 'Lorem'
]

const Interests = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.mainText}>Interests</Text>
            <View style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
            }}>
                {data.map((item, index) => {
                    return <TagComponent key={index} text={item} customStyles={styles} />
                })}

            </View>
        </View>)
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
        borderRadius: 100,
        marginHorizontal: 8,
        borderColor: '#BDBDBD',
        borderWidth: 1,
        padding: 4,
    },
    text: {
        fontSize: 14,
        color: '#000000DE',
    },
    wrapper: {
        marginTop: 17,
        borderBottomColor: '#0000001A',
        borderBottomWidth: 1,
        paddingBottom: 17,
    },
    mainText: {
        marginBottom: 16,
    }
});

export default Interests;
