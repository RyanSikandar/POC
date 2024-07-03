import React, { useCallback } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";

const SelectView = ({ data, multiSelect = true, onSelect }) => {
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
        onSelect(newSelectedItems);
    };

    const isSelected = (item) => {
        return selectedItems.includes(item);
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => handleSelect(item)}
            >
                <Text style={styles.itemText}>{item}</Text>
                {isSelected(item) && <Text>✔</Text>}
            </TouchableOpacity>
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
    },
});

export default SelectView;
