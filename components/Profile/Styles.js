import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        borderBottomColor: '#0000001A',
        borderBottomWidth: 1,
        paddingBottom: 17,
    },
    infoContainer: {
        flexDirection: 'column',
    },
    nameContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingRight: 8,
        color: '#000',
    },
    icon: {
        height: 24,
        width: 24,
        marginRight: 8,
    },
    container: {
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
    detailsContainer: {
        flexDirection: 'column',
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
    },
    dotDark: {
        borderRadius: 10,
        backgroundColor: '#7F7F7F',
        height: 10,
        width: 10,
    },
    dotLight: {
        borderRadius: 10,
        backgroundColor: '#B5B5B5',
        height: 10,
        width: 10,
    },
    detailText: {
        fontSize: 13,
        color: '#000',
        marginLeft: 8,
        fontWeight: '400',
        lineHeight: 18,
    },
    moreIcon: {
        height: 8,
        width: 22,
        tintColor: '#0000008F',
        marginTop: 12,
    },
});

export default styles;
