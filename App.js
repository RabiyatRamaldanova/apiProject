
import React, {Component} from 'react';
import { View, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity, Text} from 'react-native';

 

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: "shrek",
      arrayOfData: []
    }
  }

  defaultImage = 'https://c0.klipartz.com/pngpicture/564/490/gratis-png-cine-claqueta-cine-movie4k-to-pizarras-s.png'

  componentDidMount = async () => {
    this.getMovie();
  }

  getMovie = async () =>{
    try{
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.title}`);
      const arrayOfData = await response.json();
      this.setState({arrayOfData});
    } catch (e) {
      console.log("URL is wrong")
    }
  }

  changeData(inputText){
    this.setState({title: inputText});
  }

  render() {
  return (
    <View  style={{flex: 1, backgroundColor: 'pink'}}>
      <View style={{flex: 0.2, marginTop: 20}}>
        <TextInput onChangeText={inputText => this.changeData(inputText)} placeholder='Введите название фильма'  style={{flex: 0.6, backgroundColor: 'white', fontSize: 20}}/>
        <TouchableOpacity onPress={() => this.getMovie()} style={{flex: 0.4, backgroundColor: 'yellow', width: '40%', alignSelf: 'center'}}>
          <Text style={{color: 'pink', alignSelf: 'center', justifyContent: 'center', fontSize: 20, fontStyle: 'italic'}}>
            SEARCH
          </Text>
        </TouchableOpacity>
       
      </View>
      
        <ScrollView style={{flex: 0.8}}>
          {this.state.arrayOfData.map((item, index) => (
            <View key={index}>
          <Image source={{uri: item?.show?.image?.medium ?? this.defaultImage}} style={{flex:0.9, width: 180, height: 200, backgroundColor: 'white', marginTop: 30, justifyContent: 'center',  alignSelf: 'center'}}/>
          <Text style={{flex: 0.2, fontSize: 20, alignSelf: 'center',  marginTop: 10}}>
            {item.show.name}
          </Text>
          </View>
          ))}
        </ScrollView>
    </View>
  );
  }
}

export default App;