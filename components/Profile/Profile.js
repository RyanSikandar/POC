import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { icons } from "../../assets";
import styles from "./Styles";
import TagComponent from "../TagComponent";
import Detail from "../Detail";

const Profile = () => {
    return (
        <View style={styles.profileContainer}>
            <View style={styles.infoContainer}>
                <View style={styles.nameContainer}>

                    <Text style={styles.nameText}>Aliya, 24</Text>
                    <Image source={icons.female} style={styles.icon} />
                    <TagComponent text={'Sigma Gamma Rho'} />
                </View>
                <View style={styles.detailsContainer}>
                    <Detail text={'Senior UI/UX Designer, CitrusBits'} light={false} />
                    <Detail text={'Graduate'} />
                </View>
            </View>
            <View>
                <Image source={icons.more} style={styles.moreIcon} />
            </View>
        </View>
    );
}



export default Profile;