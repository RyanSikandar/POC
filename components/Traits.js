import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Box from "./Box";

export default function Traits() {
    return (
        <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            marginTop: 17,
            marginBottom:117
        }}>
            <Box heading={"Height"} trait={"5' 11\""} />
            <Box heading={"Religion"} trait={"Islam"}/>
            <Box heading={"Politics"} trait={"Liberal"}/>
            <Box heading={"Kids"} trait={"No"}/>
            <Box heading={"Drinks"} trait={"No"}/>
            <Box heading={"Smokes"} trait={"No"}/>

        </View>
    )
}