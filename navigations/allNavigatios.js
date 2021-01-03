import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllFilms from './allFilms';
import FavoriteFilms from './favouriteFilms';

const Tab = createBottomTabNavigator();

class AllNavigations extends Component{
    render() {
        return (
          <NavigationContainer>
            <Tab.Navigator tabBarOptions={{keyboardHidesTabBar: true, labelStyle: {fontSize: 20, marginBottom: 10}}}>
              <Tab.Screen name="Search" component={AllFilms}/>
              <Tab.Screen name="Favorite movies" component={FavoriteFilms}/>
            </Tab.Navigator>
          </NavigationContainer>
          
        );
        }
}

export default AllNavigations;