import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CategoryCard.style';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const CategoryCard = ({item}) => {
  console.log('Category Card Render edildi !!' + item);
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        {/* <Image source={{uri: item.strMealThumb}} /> */}
        {/* <Text></Text> */}
        <Text>CategoryCard</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
