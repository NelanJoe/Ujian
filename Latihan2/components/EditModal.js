import React, {Component} from 'react';
import{
    AppRegistry, FlatList, Text, StyleSheet, View, Image, Dimensions, Platform, TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');
export default class EditModal extends Component{
    constructor(props){
        super(props);
        this.state={
            newFoodName: '',
            newFoodDescription:'',
            newFoodImage:''
        };
    }
    showEditModal = () => {
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    }
    render(){
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'android' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height:280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    //alert("Modal ditutup");
                }}
            >
                <Text 
                style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginTop: 40,
                    fontSize: 16
                }}
                >
                    Ini Informasi Makanan</Text>
                    <TextInput style={{
                        height: 40,
                        borderBottomColor: 'black',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({newFoodName: text})}
                    placeholder="Tambahkan Makanan Baru"
                    value={this.state.newFoodName}
                    />
                    <TextInput style={{
                        height: 40,
                        borderBottomColor: 'black',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({newFoodDescription: text})}
                    placeholder="Tambahkan Deskripsi Baru"
                    value={this.state.newFoodDescription}
                    />
                    <TextInput style={{
                        height: 40,
                        borderBottomColor: 'black',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({newFoodImage: text})}
                    placeholder="Tambahkan Gambar"
                    value={this.state.newFoodImage}
                    />
                    <Button
                        style={{
                            fontSize: 18,
                            color: 'white'
                        }}
                        containerStyle={{
                            padding: 8,
                            marginLeft: 70,
                            marginRight: 70,
                            height: 40,
                            borderRadius: 6,
                            backgroundColor: 'skyblue'
                        }}
                        onPress={() => {
                            if(this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0){
                                alert("Form belum diinput");
                                return;
                            }
                            const newKey = this.generateKey(24);
                            const newFood ={
                                key: newKey,
                                name: this.state.newFoodName,
                                imageUrl: this.state.newFoodImage,
                                description: this.state.newFoodDescription
                            };
                            flatListData.push(newFood);
                            this.props.parentFlatList.refreshFlatList(newKey);
                            this.refs.myModal.close();
                        }}
                    >
                        Save
                    </Button>
            </Modal>
        )
    }
}
