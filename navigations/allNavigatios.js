import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllFilms from '../screens/allFilms';
import FavoriteFilms from '../screens/favouriteFilms';

const Tab = createBottomTabNavigator();

class AllNavigations extends Component{
    render() {
        return (
          <NavigationContainer>
            <Tab.Navigator tabBarOptions={{keyboardHidesTabBar: true, labelStyle: {fontSize: 20, marginBottom: 10}, activeBackgroundColor: 'pink'}}>
              <Tab.Screen name="Search" component={AllFilms}/>
              <Tab.Screen name="Favorite movies" component={FavoriteFilms}/>
            </Tab.Navigator>
          </NavigationContainer>
          
        );
        }
}

export default AllNavigations;