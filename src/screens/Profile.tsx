import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as color from '../shared/theme/color';
import * as font from '../shared/theme/font';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../routes/Navigator';
import {GradientBackground} from '../components/gradient/GradientBackground';
import {PropsRedux} from '../interfaces/state';
import {logout} from '../redux/userRedux';
import ButtonShared from '../shared/button/ButtonShared';

interface Props extends StackScreenProps<RootStackParams, 'Profile'> {}

export const Profile = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const stateUser = useSelector((state: PropsRedux) => state.user.currentUser);

  const handlePressLogout = () => {
    dispatch(logout());
  };
  return (
    <GradientBackground>
      <View style={styles.profile}>
        <View style={styles.profile__container}>
          <Text style={styles.profile__text}>
            Hola{' '}
            {stateUser === null
              ? 'NAME'
              : stateUser.data.token.username}
            este será tu perfil que muy pronto irá mejorando...
          </Text>
          <ButtonShared
            title="Cerrar Sesión"
            onPress={handlePressLogout}
            isValid={true}
            color={'black'}
          />
        </View>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  profile__container: {
    padding: 10,
    paddingBottom: 25,
    position: 'absolute',
    width: '100%',
    height: '30%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  profile__text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: font.font,
    color: color.white,
  },
  linear: {
    width: '100%',
    height: '100%',
  },
});
