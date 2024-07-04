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
                transparent={true}
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 242,
        width: 226,
        padding: 32,
        borderRadius: 16,
        borderColor: 'black',
        shadowColor: 'black',
        elevation: 5,
    },
    text: {
        fontWeight: '800',
        color: 'black',

        fontSize: 40,
        lineHeight: 48,
        letterSpacing: 0.5,
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    image:
        { width: 80, height: 78, marginBottom: 10 }

});

export default ModalTester;
