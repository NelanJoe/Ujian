import React, {Component} from 'react';
import {AppRegistry, 
    FlatList, 
    StyleSheet,
    Text, 
    View, 
    Image, 
    ListView, 
    Alert, 
    Platform, 
    TouchableHighlight,
    TouchableOpacity,
    Modal,
    Button} from 'react-native';
import flatListData from '../data/flatListData';
import Header from '../components/header';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import EditModal from './EditModal';


class FlatListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0,
            show:false
        };
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return{
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    }
    render(){
        const swipeSettings = {
            autoClose : true,
            onClose : (secId, rowId, direction) => {
                if(this.state.activeRowKey != null){
                this.setState({activeRowKey: null});
                }
            },
            onOpen : (secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.key});
            },
            left : [{ onPress : () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Apakah kamu yakin untuk menghapus?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Passed'), style: 'cancel'},
                                {text: 'Yes', onPress: ()=> {
                                flatListData.splice(this.props.index, 1)
                                this.props.parentFlatList.refreshFlatList(deletingRow)
                            }},
                            ],
                            {cancelable: true}
                        )
                    },
                    text : 'Delete', type: 'delete'
                }
            ],

            right: [{  onPress: () => {
                // alert("update");
                this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index],this);
            },
            text: 'Edit', type: 'primary'
            }],
            rowId: this.props.index,
            sectionID: 1
        }
        return(
            <Swipeout {...swipeSettings}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                
            <View style={{
                flex:1,
                flexDirection: 'row',
                 // backgroundColor: this.props.index % 2 == 0 ? 'blue': 'skyblue' 
                 backgroundColor: 'skyblue',
                 borderRadius: 30,
                 marginBottom: 10,
                 marginTop: 10
                }}>
                <Image
                    source={{uri:this.props.item.imageUrl}}
                    style={{width: 100, height: 100, margin:5, borderRadius: 50}}  
                >
                </Image>
                <View>
            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
            <TouchableOpacity onPress={() => {this.setState({show:true})}}>
            <TouchableOpacity
                style={{
                alignItems: "center",
                backgroundColor: "#6190E8",
                padding: 10,
                paddingHorizontal: 50,
                borderRadius: 30
                }}
                onPress={() => {this.setState({show:true})}}
            >
                <Text style={{color: "white"}}>Selengkapnya</Text>
            </TouchableOpacity>
                <Modal
                    transparent={true}
                    visible={this.state.show}
                    >
                        <View style={{backgroundColor: '#000000aa', flex: 1}}>
                            <View style={{backgroundColor: '#6190E8', margin:50,padding:40,borderRadius: 10, flex:1}}>

                                <Text style={{textAlign : "justify", fontSize: 15, color:'white'}}>{this.props.item.description}</Text>

                            <Button title="Close" onPress={() => {this.setState({show:false})}}/>
                            </View>
                        </View>
                    </Modal>
                </TouchableOpacity>
            </View>
            </View>
            <View style={{
                height: 1,
                backgroundColor: 'white',
                padding: 1,
            }}>
            </View>
            </View>

            </Swipeout>

        )
    }
}
const styles = StyleSheet.create({
flatListItem:{
    color: 'white',
    padding: 5,
    fontSize: 20,
}
});


export default class BasicFlatListData extends Component{
    constructor(props){
        super(props);
        this.state = ({
            deletedRowKey: null,
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (activekey) => {
        this.setState((prevState) => {
            return{
                deletedRowKey: activekey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd(){
        // alert("Berhasil ditambah");
        this.refs.addModal.showAddModal();
    }
    render(){
        return(
            <View style={{flex:1, marginTop: Platform.OS === 'android' ? 30 : 0}}>
                <Header />
                <View
                    style={{
                        backgroundColor: 'skyblue',
                        height: 50,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}
                >
                        <TouchableHighlight
                            style={{marginRight: 10}}
                            underlayColor='skyblue'
                            onPress={this._onPressAdd}
                        >
                            <Image 
                                style={{width: 35, height: 35}}
                                source={require('../icons/plus.png')}
                            />
                        </TouchableHighlight>

                </View>
                <FlatList
                ref={"flatList"}
                data={flatListData}
                renderItem={({item, index}) => {
                    return (
                        <FlatListItem item={item} index={index} parentFlatList={this}>

                        </FlatListItem>
                    );
                }}
                >

                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}>
                    
                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>

                </EditModal>
            </View>

        )
    }
}

