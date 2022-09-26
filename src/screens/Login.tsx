import {useState} from 'react';
import {Field} from 'formik';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../routes/Navigator';
import AppForm from '../components/form/AppForm';
import {loginValidation} from '../validator/loginValidation';
import AppFormField from '../components/form/AppFormField';
import AppFormSubmitButton from '../components/form/AppFormSubmitButton';
import ButtonShared from '../shared/button/ButtonShared';
import {User} from '../interfaces/interface';
import { useSelector, useDispatch } from 'react-redux';
import {PropsRedux} from '../interfaces/state';
import { login } from '../redux/apiCalls';

interface Props extends StackScreenProps<RootStackParams, 'Login'> {}

export const Login = ({navigation}: Props) => {
  const stateUser = useSelector((state: PropsRedux) => state.user);
  const [userState, setUserState] = useState(true);
  const dispatch = useDispatch();
  console.log(stateUser);
  const handleOnSubmitToLogin = async (user: User) => {
    try {
      await login(dispatch, user);
      setUserState(stateUser.error);
      if (!userState) {
        setUserState(stateUser.error);
        navigation.dispatch(StackActions.replace('Welcome'));
      } else {
        const objectToSent = {
          username: user.username,
          password: user.password,
        };
        console.log(objectToSent);
      }
    } catch (error) {
      console.log(error);
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
