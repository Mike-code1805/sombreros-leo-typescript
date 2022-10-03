import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import * as color from '../shared/theme/color';
import * as font from '../shared/theme/font';
import {ButtonsOpacity} from '../components/buttons/ButtonsOpacity';
import {useDispatch, useSelector} from 'react-redux';
import {getHats} from '../redux/apiCalls';
import {PropsRedux} from '../interfaces/state';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../routes/Navigator';
import {HatContainer} from '../components/hats/HatContainer';
import {data} from '../data/data';
import {CommonActions} from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'Hats'> {}

export const Hats = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const hats = useSelector((state: PropsRedux) => state.hat.hats);
  const user = useSelector((state: PropsRedux) => state.user.currentUser);

  const gotoAdd = () => {
    navigation.navigate('AddHat');
  };

  const gotoRecicle = () => {
    navigation.navigate('Recicle');
  };

  const getHatsRefreshButton = () => {
    getHats(dispatch);
    console.log(hats);
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.noteCard}>
      {false ? (
        <View style={styles.loader}>
          <ActivityIndicator size={'large'} color={color.brown} />
        </View>
      ) : (
        <>
          <View style={styles.componentTop}>
            <View style={styles.header}>
              <Text
                style={styles.header__text}
                onPress={() => navigation.navigate('Profile')}>
                Hola {user.token.username}!
              </Text>
              <View style={styles.header__icons}>
                <ButtonsOpacity
                  name="trash-outline"
                  onPress={gotoRecicle}
                  circle
                />
                <ButtonsOpacity name="add-outline" onPress={gotoAdd} circle />
              </View>
            </View>
            <Text style={styles.noteCard__text}>Total: {hats.length}</Text>
            <View style={styles.noteCard__divider} />
            <View style={styles.noteCard__search}>
              <View style={styles.noteCard__search__input__container}>
                <TextInput
                  placeholder="Buscar..."
                  style={styles.noteCard__search__input}
                  onChangeText={text => console.log(text)}
                  placeholderTextColor={color.brown_light}
                />
                <TouchableOpacity
                  style={styles.noteCard__search__button}
                  onPress={text => console.log(text)}>
                  <Text
                    style={
                      true
                        ? styles.noteCard__search__button__text__active
                        : styles.noteCard__search__button__text__inactive
                    }>
                    X
                  </Text>
                </TouchableOpacity>
              </View>
              <ButtonsOpacity name="search-outline" />
              <ButtonsOpacity
                name="refresh-outline"
                onPress={() => getHatsRefreshButton()}
              />
            </View>
          </View>
          <View style={styles.noteCard__scrollView}>
            {false ? (
              <View style={styles.loaderHats}>
                <TouchableOpacity />
              </View>
            ) : hats.length === 0 ? (
              <View style={styles.noteCard__scrollView__empty}>
                <Text style={styles.noteCard__scrollView__empty__text}>
                  No hay sombreros aún!
                </Text>
              </View>
            ) : (
              <FlatList
                data={hats.slice().reverse()}
                renderItem={({item, index}) => (
                  <HatContainer
                    key={item._id}
                    state={
                      item.state_payment === 'c'
                        ? 'Cancelado'
                        : item.state_payment === 't'
                        ? 'Trabajado'
                        : 'Pendiente'
                    }
                    index={index}
                    name={item.name}
                    date={item.date}
                    onPressMirar={() =>
                      navigation.dispatch(
                        CommonActions.navigate('DetailsHat', item),
                      )
                    }
                    onPressDelete={() => console.log('delete')}
                  />
                )}
                keyExtractor={item => item._id!.toString()}
                horizontal={false}
              />
            )}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  componentTop: {
    flex: 2,
  },
  loader: {
    padding: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteCard: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
  },
  noteCard__text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: color.brown,
    marginTop: 0,
    fontFamily: font.font,
  },
  noteCard__divider: {
    width: '100%',
    height: 2,
    backgroundColor: color.brown,
    marginTop: 5,
    marginBottom: 5,
  },
  noteCard__search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  noteCard__search__container: {
    width: 50,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    color: color.brown_light,
  },
  noteCard__search__input__container: {
    height: 40,
    width: '65%',
    flexDirection: 'row-reverse',
    color: color.black,
  },
  noteCard__search__input: {
    height: 40,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 60,
    fontWeight: 'bold',
    opacity: 0.8,
    fontSize: 18,
    shadowColor: color.brown,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    borderColor: color.brown,
    borderWidth: 3,
    borderRadius: 5,
    fontFamily: font.font,
    color: color.black,
  },
  noteCard__search__button: {
    zIndex: 1,
    position: 'absolute',
    width: '15%',
    height: 40,
    flexDirection: 'row-reverse',
    paddingHorizontal: 5,
  },
  noteCard__search__button__text__inactive: {
    color: color.brown,
    fontWeight: 'bold',
    fontSize: 28,
    fontFamily: font.font,
    width: '90%',
    height: 40,
    marginTop: 'auto',
    marginBottom: 'auto',
    opacity: 0,
  },
  noteCard__search__button__text__active: {
    color: color.brown,
    fontWeight: 'bold',
    fontSize: 28,
    fontFamily: font.font,
    width: '90%',
    height: 40,
    marginTop: 'auto',
    marginBottom: 'auto',
    opacity: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 55,
  },
  header__text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: color.brown,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontFamily: font.font,
    textDecorationLine: 'underline',
  },
  header__icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header__icons__trash: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header__icons__container: {
    backgroundColor: color.brown,
    width: 45,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  header__icons__plus: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginTop: 10,
    marginBottom: 10,
    width: 25,
    height: 25,
    color: color.white,
  },
  noteCard__scrollView: {
    marginBottom: 50,
    flex: 5,
  },
  noteCard__scrollView__empty: {
    alignItems: 'center',
    marginTop: 200,
  },
  noteCard__scrollView__empty__text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: color.brown,
    fontFamily: font.font,
  },
  loaderHats: {
    paddingVertical: 130,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
