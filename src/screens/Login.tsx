import {useContext, useEffect} from 'react';
import {Field} from 'formik';
import {Alert, StyleSheet, Text, View, Keyboard} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../routes/Navigator';
import {loginValidation} from '../validator/loginValidation';
import ButtonShared from '../shared/button/ButtonShared';
import {User} from '../interfaces/interface';
import {AppForm, AppFormField, AppFormSubmitButton} from '../components/form';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'Login'> {}

export const Login = ({navigation}: Props) => {
  const {signIn, errorMessage, removeError} = useContext(AuthContext);

  useEffect(() => {
    if (errorMessage.length === 0) return;
    Alert.alert('Login incorrecto', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  const onLogin = ({username, password}: User) => {
    Keyboard.dismiss();
    signIn({username, password});
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
        onSubmit={onLogin}>
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
