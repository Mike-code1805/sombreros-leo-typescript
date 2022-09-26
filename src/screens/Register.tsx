import {StackScreenProps} from '@react-navigation/stack';
import {Field} from 'formik';
import {Alert, StyleSheet, Text, View} from 'react-native';
import AppForm from '../components/form/AppForm';
import AppFormField from '../components/form/AppFormField';
import {RootStackParams} from '../routes/Navigator';
import {registerValidation} from '../validator/registerValidation';
import AppFormSubmitButton from '../components/form/AppFormSubmitButton';
import ButtonShared from '../shared/button/ButtonShared';
import {User} from '../interfaces/interface';

interface Props extends StackScreenProps<RootStackParams, 'Register'> {}

export const Register = ({navigation}: Props) => {
  const handleOnSubmitToRegister = async (values: User) => {
    if (values.username === '') {
      Alert.alert('Por favor escribe algo');
    } else {
      const objectToSent = {
        username: values.username,
        password: values.password,
        passwordConfirmation: values.passwordConfirmation,
      };
      console.log(objectToSent);
    }
  };

  const handleOnGoLogin = () => {
    navigation.navigate('Login');
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
        onSubmit={handleOnSubmitToRegister}>
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
