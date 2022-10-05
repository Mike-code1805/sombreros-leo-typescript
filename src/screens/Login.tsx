import {useState} from 'react';
import {Field} from 'formik';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../routes/Navigator';
import {loginValidation} from '../validator/loginValidation';
import ButtonShared from '../shared/button/ButtonShared';
import {User} from '../interfaces/interface';
import {useSelector, useDispatch} from 'react-redux';
import {PropsRedux} from '../interfaces/state';
import {login} from '../redux/apiCalls';
import {AppForm, AppFormField, AppFormSubmitButton} from '../components/form';

interface Props extends StackScreenProps<RootStackParams, 'Login'> {}

export const Login = ({navigation}: Props) => {
  const stateUser = useSelector((state: PropsRedux) => state.user);
  const dispatch = useDispatch();

  const handleOnSubmitToLogin = async (user: User) => {
    try {
      const objectToSent = {
        username: user.username,
        password: user.password,
      };
      await login(dispatch, objectToSent);
      if (!stateUser.error) {
        navigation.dispatch(StackActions.replace('Welcome'));
      } else {
        console.log('Error');
      }
    } catch (error) {
      console.log('Error Login');
    }
  };

  const handleOnGoSubmit = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login:</Text>
      <AppForm
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={loginValidation}
        onSubmit={handleOnSubmitToLogin}>
        <Field component={AppFormField} name="username" placeholder="Nombre" />
        <Field
          component={AppFormField}
          name="password"
          placeholder="Contraseña"
          secureTextEntry
          textContentType="password"
        />
        <AppFormSubmitButton title="Ingresar" />
      </AppForm>
      <ButtonShared
        title="Regístrate"
        onPress={handleOnGoSubmit}
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
