import styles from "./Profile/Styles";
import { View, Text } from "react-native";
import React from "react";

function Detail({ text, light = true }) {
    return (<View style={styles.detailRow}>
        <View style={light ? styles.dotLight : styles.dotDark} />
        <Text style={styles.detailText}>{text}</Text>
    </View>);
}

export default Detail;