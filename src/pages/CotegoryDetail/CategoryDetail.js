import React, {useEffect} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import CategoryFiltred from '../../components/CategoryFiltredCard/CategoryCard';
import useFetch from '../../hooks/useFetch/useFetch';
import {API_CATEGORY_DETAIL_FILTER} from '@env';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';
import styles from './CategoryDetail.style';

const CategoryDetail = item => {
  // console.log('CateogoryDetail: ' + JSON.stringify(item.route.params));
  console.log('URL: ' + API_CATEGORY_DETAIL_FILTER + item.route.params);
  const {loading, error, data} = useFetch(
    `${API_CATEGORY_DETAIL_FILTER}${item.route.params}`,
  );

  const renderCategoryFiltred = ({item}) => {
    <CategoryFiltred item={item} />;
  };

  if (loading) {
    <Loading />;
  }

  if (error) {
    <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderCategoryFiltred} />
    </View>
  );
};

export default CategoryDetail;

// CateogoryDetail: {"navigation":{},"route":{"key":"CategoryDetail-8v87BXJC1C5_4oGqlfo_3","name":"CategoryDetail","params":"Beef"}}
//  LOG  []
