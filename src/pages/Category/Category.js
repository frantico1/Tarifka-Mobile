import React from 'react';
import {FlatList, StyleSheet, View, Item, Text} from 'react-native';
import CategoryCard from '../../components/Category/CategoryCard';
import useFetch from '../../hooks/useFetch/useFetch';

import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';

import {API_CATEGORY} from '@env';

const Category = ({navigation}) => {
  const {loading, error, data} = useFetch(API_CATEGORY);

  const renderItem = ({item}) => {
    console.log('İtem render ! ' + item.strCategory);
    return (
      <CategoryCard
        item={item}
        onSelect={() => handleCategorySelect(item.strCategory)}
      />
    );
  };

  const handleCategorySelect = item => {
    console.log('HandleSelect: ' + item);
    navigation.navigate('CategoryDetail', item);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Category;
