import React, {Component} from 'react';
import { View, ScrollView, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import styles from '../style/styles';
import { connect } from 'react-redux';
import {setArrayOfData, setTitle, setFavourite} from '../actions/action1';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class AllFilms extends Component {

  defaultImage = 'https://c0.klipartz.com/pngpicture/564/490/gratis-png-cine-claqueta-cine-movie4k-to-pizarras-s.png';

  componentDidMount(){
    this.getMovie();
  }

  getMovie = async () =>{
    try{
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.props.title}`);
      const arrOfData = await response.json();
      console.log("array Of Data", arrOfData);
      console.log("title",this.props.title);
      this.props.changeArray(arrOfData);
    } catch (error) {
      console.log("getMovie",error)
    }
  }

  checkFavorite(title, image) {
    this.props.changeArrayOfFavorite(title, image);
  }

  render(){
      return (
        <View style={styles.background}>

      <KeyboardAwareScrollView style={styles.topView}>
        <TextInput onChangeText={(text) => this.props.changeTitle(text)} placeholder='Введите название фильма'  style={styles.inputText} onSubmitEditing={() => this.getMovie()}/>
        <TouchableOpacity onPress={() => this.getMovie()} style={styles.button}>
          <Text style={styles.search}>
            SEARCH
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>

        <View style={styles.scroll}>
        <ScrollView >
      <View style={{flex: 1}}>
          {this.props.data?.map((item, index) => (
            <View key={index} style={{flexDirection: 'column', alignItems: 'center'}}>
          <Image source={{uri: item?.show?.image?.medium ?? this.defaultImage}} style={styles.image}/>
          <Text style={styles.text}>
            {item?.show?.name}
          </Text>
          <TouchableOpacity style={{flex: 0.9}} onPress={() => this.checkFavorite(item?.show?.name, item?.show?.image?.medium ?? this.defaultImage)}>
            <View style={{backgroundColor: 'yellow', alignContent: 'center'}}>
            <Text style={styles.text}>
              Add to favorite
            </Text>
            </View>
          </TouchableOpacity>
          </View>
          ))} 
          </View>
          
        </ScrollView>
        </View>
        </View>
    )}
}

function mapStateToProps(state) {
  return {
    title: state.reducer1.title,
    data: state.reducer1.arrayOfData,
  };
}

function mapDispatchToProps(dispatch) {
  return{
    changeTitle: title => dispatch(setTitle(title)),
    changeArray: json => dispatch(setArrayOfData(json)),
    changeArrayOfFavorite: (data, image) => dispatch(setFavourite(data, image)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllFilms)