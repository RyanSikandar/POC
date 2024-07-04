import React from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import Carousel from "../components/Carousel";
import Profile from "../components/Profile/Profile";
import Organization from "../components/Organization";

const ProfileConnecting = () => {
    return (
        <ScrollView style={styles.container}
            contentContainerStyle={{
                flexGrow: 1,
            }}>
            <Carousel />
            <Profile />
            <Organization />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 16
    },
});

export default ProfileConnecting;