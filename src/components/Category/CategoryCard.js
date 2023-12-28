import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from './CategoryCard.style';

const Category = ({item, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.card_container}>
          <Image style={styles.image} source={{uri: item.strCategoryThumb}} />
          <View>
            <Text style={styles.header}>{item.strCategory}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Category;
