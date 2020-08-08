import React,{useState} from 'react';
import{
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput, 
  ScrollView, 
  FlatList, 
  TouchableOpacity} from 'react-native';
import Header from './components/header';
import JadwalItem from './components/jadwalItem';
export default function App(){
    const [jadwal,setJadwal] = useState([
      {text: 'Bangun Tahajud', key: '1'},
      {text: 'Shalat Shubuh', key: '2'},
      {text: 'Al Matsurat', key: '3'},
      {text: 'Halaqah Shubuh', key: '4'},
      {text: 'Kuliah ( Belajar )', key: '5'},
      {text: 'Dhuha', key: '6'},
      {text: 'Shalat Dzuhur', key: '7'},
      {text: 'Ashar Berjamaah', key: '8'},
      {text: 'Maghrib Berjamaah', key: '9'},
      {text: 'Isya Berjamaah', key: '10'},
      {text: 'Kajian', key: '11'},
      {text: 'Piket Asrama', key: '12'},
      {text: 'Olahraga', key: '13'}
    ]);

    const pressHandler = (key) => {
      setJadwal((prevJadwal) => {
        return prevJadwal.filter(jadwal => jadwal.key != key);
      })
    }
  return(
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList 
          data = {jadwal}
          renderItem={({item}) => (
            <JadwalItem item={item} pressHandler={pressHandler}/>
          )}
          />
        </View>
      </View>
    </View>
  )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03d3fc',

  },

  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});