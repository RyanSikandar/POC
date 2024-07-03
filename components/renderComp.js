import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const SelectTag = ({ data, multiSelect = true }) => {
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
            <TouchableOpacity
                onPress={() => handleSelect(item)}
                style={styles.item}
            >
                <View style={[styles.container, isSelected(item) && {
                    backgroundColor: 'black'
                }]}>
                    <Text style={[styles.text,
                    isSelected(item) && {
                        color: '#fff'
                    }
                    ]}>{item}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Where would you like to work?</Text>
            <FlatList
                data={data}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                renderItem={renderItem}
                keyExtractor={(item) => item}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 16,
        backgroundColor: '#e6e6e6',
    }
    ,
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    columnWrapper: {
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    container: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 18,
        paddingVertical: 6,
        backgroundColor: '#f0f0f0',
        width: 110,
        alignItems: 'center',

    },
    text: {
        fontSize: 16,
        color: '#000',
        flexWrap: 'wrap',
        maxWidth: 110,
    },
    item: {
        marginBottom: 10,
        marginHorizontal: 10,
    },
});

export default SelectTag;
