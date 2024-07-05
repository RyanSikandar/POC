import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Carousel from "../components/Carousel";
import Profile from "../components/Profile/Profile";
import Organization from "../components/Organization";
import Interests from "../components/Interests";
import Prompt from "../components/Prompt";
import Info from "../components/Info";

const ProfileConnecting = () => {
    return (
        <View style={styles.wrapper}>
            <ScrollView>
                <Carousel />
                <View style={styles.contentWrapper}>
                    <Profile />
                    <Organization />
                    <Interests />
                    <Prompt />
                    <Info />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentWrapper: {
        marginHorizontal: 16,
    },
});

export default ProfileConnecting;
