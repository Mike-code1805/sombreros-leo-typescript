import {useContext, useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Field} from 'formik';
import {Alert, Keyboard, StyleSheet, Text, View} from 'react-native';
import {RootStackParams} from '../routes/Navigator';
import {registerValidation} from '../validator/registerValidation';
import ButtonShared from '../shared/button/ButtonShared';
import {AppForm, AppFormField, AppFormSubmitButton} from '../components/form';
import {useDispatch, useSelector} from 'react-redux';
import {PropsRedux} from '../interfaces/state';
import {logout} from '../redux/userRedux';
import {AuthContext} from '../context/AuthContext';
import {RegisterData} from '../interfaces/user';

interface Props extends StackScreenProps<RootStackParams, 'Register'> {}

export const Register = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const userState = useSelector((state: PropsRedux) => state.user);
  const {signUp, errorMessage, removeError} = useContext(AuthContext);

  useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert('Registro incorrecto', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  const onRegister = ({
    username,
    password,
    passwordConfirmation,
  }: RegisterData) => {
    Keyboard.dismiss();
    signUp({
      username,
      password,
      passwordConfirmation,
    });
  };

  const handleOnGoLogin = () => {
    navigation.navigate('Login');
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
        onSubmit={onRegister}>
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
