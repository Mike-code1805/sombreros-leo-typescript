import {StackScreenProps} from '@react-navigation/stack';
import {Field} from 'formik';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {RootStackParams} from '../routes/Navigator';
import {registerValidation} from '../validator/registerValidation';
import ButtonShared from '../shared/button/ButtonShared';
import {User} from '../interfaces/interface';
import {AppForm, AppFormField, AppFormSubmitButton} from '../components/form';
import {useDispatch, useSelector} from 'react-redux';
import {login, register} from '../redux/apiCalls';
import {PropsRedux} from '../interfaces/state';
import {useEffect, useState} from 'react';
import {logout} from '../redux/userRedux';
import {StackActions} from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'Register'> {}

export const Register = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const userState = useSelector((state: PropsRedux) => state.user);

  const handleOnSubmitToRegister = async (values: User) => {
    try {
      if (values.username === '') {
        Alert.alert('Por favor escribe algo');
      } else {
        const objectToSent = {
          username: values.username,
          password: values.password,
          passwordConfirmation: values.passwordConfirmation,
        };
        await register(dispatch, objectToSent);
        if (!userState.error) {
          navigation.dispatch(StackActions.replace('Welcome'));
        } else if (userState.error) {
          Alert.alert(
            'ERROR:',
            'Usuario no Registrado D: pruebe probar con otro Nombre de Usuario',
          );
        }
      }
    } catch (error) {
      Alert.alert('ERROR: Usuario no Registrado D:');
    }
  };

  const handleOnGoLogin = () => {
    // navigation.navigate('Login');
    console.log(userState);
  };

  const handleOnGoLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registrarse:</Text>
      <AppForm
        initialValues={{
          username: '',
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={registerValidation}
        onSubmit={(e: any) => handleOnSubmitToRegister(e)}>
        <Field component={AppFormField} name="username" placeholder="Nombre" />
        <Field
          component={AppFormField}
          name="password"
          placeholder="Contraseña"
          secureTextEntry
          textContentType="password"
        />
        <Field
          component={AppFormField}
          name="passwordConfirmation"
          placeholder="Confirmar Contraseña"
          secureTextEntry
          textContentType="password"
        />
        <AppFormSubmitButton title="Registrarse" />
      </AppForm>
      <ButtonShared
        title="Volver"
        onPress={handleOnGoLogin}
        isValid={true}
        color={'brown'}
      />
      <ButtonShared
        title="Salir"
        onPress={handleOnGoLogout}
        isValid={true}
        color={'brown'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 60,
    padding: 10,
  },
  text: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontSize: 20,
    color: 'black',
  },
});
