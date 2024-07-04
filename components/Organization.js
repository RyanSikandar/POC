import React from "react";
import { Image, View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import TagComponent from "./TagComponent";

const Organization = () => {
    return (
        <View style={{
            flexDirection: 'column',
            marginTop: 17,
        }}>
            <Text style={{
                marginBottom: 16,
            }}>Organization Affiliation</Text>
            <TagComponent text={'Program: Graduate'} customStyles={{
                container: {
                    marginBottom: 16,
                    paddingHorizontal: 6,
                    paddingVertical: 16,
                    borderRadius: 8,
                },
                text:{}
            }
            } />
            <TagComponent text={'Chapter: Sigma Gamma Rho'} />
            <TagComponent text={'Pledged Date: 2023 Fall'} />
            <TagComponent text={'Lorem Ipsum'} />
            <TagComponent text={'Other Chapter'} />

        </View>)
}

export default Organization;