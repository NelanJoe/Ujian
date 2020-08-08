import React, { Component } from 'react';
import {
    View,
    Image,
    StayleSheet,
    StyleSheet
} from 'react-native';
import sunda from '../icons/sunda.jpg';

export default class logoItem extends React.Component {
    render(){
        return (
            <View style={styles.logoItem}>
                <Image
                    source={sunda}
                    style={{
                        width: 125, 
                        height: 125, 
                        marginTop: 125, 
                        borderRadius: 50
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoItem: {
       flex: 1,
       backgroundColor: 'rgba(225,225,225, .1)',
       alignItems: 'center',
       justifyContent: 'space-between'
    }
})