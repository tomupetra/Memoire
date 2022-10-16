import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.unfinished}>
                <View style={styles.rect}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    unfinished: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    rect: {
        width: 14,
        height : 14,
        backgroundColor: '#000',
        borderRadius: 5,
        marginRight: 15,
        marginLeft: 5,
        opacity: 0.5,
    },
    itemText: {
        maxWidth: '90%',
    },
    
});

export default Task;