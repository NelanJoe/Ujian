import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function JadwalItem({item, pressHandler}) {
return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 20,
        borderWidth: 1,
        backgroundColor: '#00a8ff',
        borderStyle: 'dashed',
        borderRadius: 10
    }
});