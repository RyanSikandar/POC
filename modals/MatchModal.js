import React, { useState } from "react";
import { Button, Text, View, Modal, TouchableWithoutFeedback, StyleSheet, Image } from "react-native";
import { icons } from "../assets";

function ModalTester() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={{ flex: 1 }}>
            <Button title="Show modal" onPress={toggleModal} />

            <Modal
                transparent
                visible={isModalVisible}
                animationType="fade"
                onRequestClose={toggleModal}
            >
                <TouchableWithoutFeedback onPress={toggleModal}>
                    <View style={styles.backdrop}>
                        <View style={styles.modalContainer}>
                            <Image source={icons.heart} style={styles.image} />
                            <Text style={styles.text}>It's a match!</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000004D',
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFFCC',
        width: '60%',
        padding: 32,
        borderRadius: 16,
    },
    text: {
        fontWeight: '800',
        color: 'black',
        fontSize: 40,
        lineHeight: 48,
        letterSpacing: 0.5,
        textAlign: 'center',
    },
    image:
        { width: 80, height: 80, marginBottom: 10 }

});

export default ModalTester;
