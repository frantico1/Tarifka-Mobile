import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';

import Category from './pages/Category/Category';
import CategoryDetail from './pages/CotegoryDetail/CategoryDetail';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoryPage"
          component={Category}
          options={{
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {color: '#FFA500', fontWeight: 'bold'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
