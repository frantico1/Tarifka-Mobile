import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFA500',

    flex: 1,
  },
  card_container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    margin: 7,
    flexWrap: 'wrap',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  image: {width: 70, height: 70, borderRadius: 50, margin: 10},
  header: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    paddingLeft: 10,
  },
});
