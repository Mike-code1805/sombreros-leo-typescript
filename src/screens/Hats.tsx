import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as color from '../shared/theme/color';
import * as font from '../shared/theme/font';
import {ButtonsOpacity} from '../components/buttons/ButtonsOpacity';

export const Hats = ({navigation}: any) => {
  const gotoAdd = () => {
    navigation.navigate('AddHat');
  };

  const gotoRecicle = () => {
    navigation.navigate('Recicle');
  };

  return (
    <View style={styles.noteCard}>
      {false ? (
        <View style={styles.loader}>
          <ActivityIndicator size={'large'} color={color.brown} />
        </View>
      ) : (
        <>
          <View style={styles.header}>
            <Text
              style={styles.header__text}
              onPress={() => navigation.navigate('Profile')}>
              Hola *Name*!
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
          <Text style={styles.noteCard__text}>Total: *Hats Number*</Text>
          <View style={styles.noteCard__divider} />
          <View style={styles.noteCard__search}>
            <View style={styles.noteCard__search__input__container}>
              <TextInput
                placeholder="Buscar..."
                style={styles.noteCard__search__input}
                onChangeText={text => console.log(text)}
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
            <ButtonsOpacity name="refresh-outline" />
          </View>
          <ScrollView style={styles.noteCard__scrollView}>
            {false ? (
              <View style={styles.loaderHats}>
                <TouchableOpacity />
              </View>
            ) : true ? (
              <View style={styles.noteCard__scrollView__empty}>
                <Text style={styles.noteCard__scrollView__empty__text}>
                  No hay sombreros aún!
                </Text>
              </View>
            ) : null}
          </ScrollView>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    padding: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteCard: {
    padding: 10,
    marginBottom: 40,
    flex: 1,
    justifyContent: 'center',
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
    backgroundColor: color.brown,
    width: 50,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  noteCard__search__input__container: {
    height: 40,
    width: '65%',
    flexDirection: 'row-reverse',
  },
  noteCard__search__input: {
    height: 40,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 60,
    fontWeight: 'bold',
    opacity: 0.8,
    fontSize: 18,
    color: color.black,
    shadowColor: color.brown,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: color.white,
    borderColor: color.brown,
    borderWidth: 3,
    borderRadius: 5,
    fontFamily: font.font,
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
