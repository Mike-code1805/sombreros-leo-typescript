import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {StackActions} from '@react-navigation/native';
import * as color from '../shared/theme/color';
import * as font from '../shared/theme/font';
import {StackScreenProps} from '@react-navigation/stack';
import {getImageColors} from '../helpers/getImageColors';
import {GradientContext} from '../context/GradientContext';
import {RootStackParams} from '../routes/Navigator';
import ButtonShared from '../shared/button/ButtonShared';
import {GradientBackground} from '../components/gradient/GradientBackground';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PropsRedux} from '../interfaces/state';
import {useDispatch, useSelector} from 'react-redux';
import {getHats, getHatsRecicle} from '../redux/apiCalls';
import {logout} from '../redux/userRedux';

interface Props extends StackScreenProps<RootStackParams, 'Welcome'> {}

export const Welcome = ({navigation}: Props) => {
  const {setMainColors} = useContext(GradientContext);
  const stateUserAuth = useSelector(
    (state: PropsRedux) => state.user.currentUser,
  );
  const dispatch = useDispatch();

  const getPosterColors = async () => {
    const uri = require('../shared/desing/hat.png');
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({primary, secondary});
  };

  const sendTokenUser = async () => {
    await AsyncStorage.setItem('token', stateUserAuth.data.token.authToken);
  };

  useEffect(() => {
    getPosterColors();
    sendTokenUser();
    getHats(dispatch);
    getHatsRecicle(dispatch);
  }, []);

  const handleOnGoSubmitGo = () => {
    // console.log(stateUserAuth);
    dispatch(logout());
    // navigation.dispatch(StackActions.replace('Hats'));
  };

  return (
    <GradientBackground>
      <View style={styles.wel}>
        <View style={styles.image}>
          <Image
            style={styles.logo}
            source={require('../shared/desing/hat.png')}
          />
        </View>
        <View style={styles.welcome}>
          <Text style={styles.welcome__text}>
            Hola, ¿cómo estás? Soy Sombrerito, una App que te ayudará a trabajar
            con tus clientes registrando sus pedidos y dándote esa facilidad de
            manejo para una mejor experiencia... Sombrerito versión--1.0.0
          </Text>
          <ButtonShared
            title="Ir a los Sombreros"
            onPress={handleOnGoSubmitGo}
            isValid={true}
          />
        </View>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  wel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  welcome: {
    padding: 10,
    paddingBottom: 25,
    position: 'absolute',
    width: '80%',
    height: '80%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  linear: {
    width: '100%',
    height: '100%',
  },
  welcome__text: {
    fontFamily: font.font,
    color: color.white,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  logo: {
    position: 'relative',
    width: '100%',
    height: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    opacity: 0.7,
  },
});
