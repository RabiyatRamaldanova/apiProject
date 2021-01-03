import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../style/styles';
import {connect} from 'react-redux';

class FavoriteFilms extends Component{

    render(){
        console.log("data",this.props.array)
        return(
            <ScrollView style={styles.scroll}>
                {this.props.array?.map((item,index) => (
                <View key={index} style={{alignItems: 'center'}}>
                    <Image source={{uri: item?.favoriteMovieImage}} style={styles.image}/>
                   <Text style={styles.text}>
                       {item.favoriteMovieTitle}
                   </Text>
                </View>
                ))}
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return{
        state,
        array: state.reducer2.arrayOfFavorite
    }
}
export default connect(mapStateToProps)(FavoriteFilms);