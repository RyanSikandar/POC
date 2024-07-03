import React, { useCallback } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";

const SelectView = ({ data, multiSelect = true }) => {
    const [selectedItems, setSelected] = React.useState([]);



    const handleSelect = (item) => {
        let newSelectedItems;
        if (multiSelect) {
            if (selectedItems.includes(item)) {
                newSelectedItems = selectedItems.filter((i) => i !== item);
            } else {
                newSelectedItems = [...selectedItems, item];
            }
        } else {
            newSelectedItems = selectedItems.includes(item) ? [] : [item];
        }
        setSelected(newSelectedItems);
    };

    const isSelected = (item) => {
        return selectedItems.includes(item);
    };

    const renderItem = ({ item }) => {
        return (
            <View
                style={styles.item}
            >
                <Text style={styles.itemText}>{item}</Text>
                <TouchableOpacity style={styles.box} onPress={() => handleSelect(item)}
                >
                    {isSelected(item) && <View style={{ backgroundColor: 'black', flex: 1 }} />}
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <FlatList
            data={data}
            renderItem={
                renderItem}
            keyExtractor={(item) => item}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        flex: 1,
        flexWrap: 'wrap',
        marginRight: 30,
        color: '#000',
        fontSize: 16,
    },
    box: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    }
});

export default SelectView;
