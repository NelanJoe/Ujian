import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return(
<View style={styles.header}>
        <Text style={styles.title}>Menu Makanan</Text>
</View>
)}
const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: '#9c88ff'
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
});                                                                               