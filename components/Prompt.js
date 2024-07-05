import React from "react";
import { Image, View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import TagComponent from "./TagComponent";

const Prompt = () => {
    return (
        <View style={styles.wrapper}>
            <PromptTag headerText={"Prompt 1"} mainText={'Aenean tincidunt tempus nibh dictum ullamcorper. Proin vitae orci mi.'} />
            <PromptTag headerText={"Prompt 1"} mainText={'Aenean tincidunt tempus nibh dictum ullamcorper. Proin vitae orci mi.'} />
            <PromptTag headerText={"Prompt 1"} mainText={'Aenean tincidunt tempus nibh dictum ullamcorper. Proin vitae orci mi.'} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    wrapper: {
        flexDirection: 'column',
        marginTop: 17,
        borderBottomColor: '#0000001A',
        borderBottomWidth: 1,
        paddingBottom: 17,
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
        color: ' #00000099',
        marginBottom: 8,
    },
    mainText: {
        fontSize: 14,
        color: '#000000DE',
        marginBottom: 8,
        fontWeight: '350',
    }
});

export default Prompt;

function PromptTag({ headerText, mainText }) {
    return (<View style={styles.container}>
        <View>
            <Text style={styles.headerText}>{headerText}</Text>
            <Text style={styles.mainText}>{mainText}</Text>
        </View>
    </View>);
}
