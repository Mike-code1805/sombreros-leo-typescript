import {StackScreenProps} from '@react-navigation/stack';
import {Field} from 'formik';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import {HatProps} from '../interfaces/interface';
import {RootStackParams} from '../routes/Navigator';
import ButtonShared from '../shared/button/ButtonShared';
import {hatValidaton} from '../validator/hatValidaton';
import * as color from '../shared/theme/color';
import * as font from '../shared/theme/font';
import {equalsObsjects} from '../functions/equalsObsjects';
import {CommonActions} from '@react-navigation/native';
import {AppForm, AppFormField, AppFormSubmitButton} from '../components/form';
import {useContext} from 'react';
import {HatsContext} from '../context/HatContext';

interface Props extends StackScreenProps<RootStackParams, 'EdiHat'> {}

export const EdiHat = ({navigation, route}: Props) => {
  const {updateHat, hat} = useContext(HatsContext);

  const handleOnSubmitToEdit = async (values: HatProps) => {
    if (equalsObsjects(values, route.params)) {
      Alert.alert('Por favor escriba lo que desea editar');
    } else {
      const objectToSent = {
        name: values.name,
        color_hat: values.color_hat,
        cintillo: values.cintillo,
        tafalete: values.tafalete,
        measure: values.measure,
        color_tape: values.color_tape,
        size: values.size,
        state: values.state,
        price: parseFloat(values.price).toFixed(2),
        advancement: parseFloat(values.advancement).toFixed(2),
        address: values.address,
        observations: values.observations,
        state_payment: values.state_payment.toLowerCase(),
        date: route.params.date,
        pendiente: true,
      };
      updateHat(route.params._id!, objectToSent);
      navigation.dispatch(
        CommonActions.navigate('DetailsHat', {_id: route.params._id}),
      );
    }
  };
  return (
    <ScrollView style={styles.addHat}>
      <AppForm
        initialValues={{
          name: hat.name,
          color_hat: hat.color_hat,
          cintillo: hat.cintillo,
          tafalete: hat.tafalete,
          measure: hat.measure,
          color_tape: hat.color_tape,
          size: hat.size,
          state: hat.state,
          price: hat.price,
          advancement: hat.advancement,
          address: hat.address,
          observations: hat.observations,
          state_payment: hat.state_payment,
          pendiente: hat.pendiente,
          date: hat.date,
        }}
        validationSchema={hatValidaton}
        onSubmit={handleOnSubmitToEdit}>
        <Text style={styles.addHat__text}>Nombre: </Text>
        <Field component={AppFormField} name="name" placeholder={hat.name} />
        <Text style={styles.addHat__text}>Color de Sombrero: </Text>
        <Field
          component={AppFormField}
          name="color_hat"
          placeholder={hat.color_hat}
        />
        <Text style={styles.addHat__text}>Cintillo (si) (no): </Text>
        <Field
          component={AppFormField}
          name="cintillo"
          placeholder={hat.cintillo}
        />
        <Text style={styles.addHat__text}>Tafalete (si) (no): </Text>
        <Field
          component={AppFormField}
          name="tafalete"
          placeholder={hat.tafalete}
        />
        <Text style={styles.addHat__text}>Medida(cm): </Text>
        <Field
          component={AppFormField}
          name="measure"
          placeholder={`${hat.measure}cm`}
        />
        <Text style={styles.addHat__text}>Color de Cinta: </Text>
        <Field
          component={AppFormField}
          name="color_tape"
          placeholder={`${hat.color_tape}`}
        />
        <Text style={styles.addHat__text}>Tamaño: </Text>
        <Field
          component={AppFormField}
          name="size"
          placeholder={`${hat.size}`}
        />
        <Text style={styles.addHat__text}>
          Estado (1°) (2°) (3°) (4°) (5°):{' '}
        </Text>
        <Field
          component={AppFormField}
          name="state"
          placeholder={`${hat.state}°`}
        />
        <Text style={styles.addHat__text}>Precio (S/.): </Text>
        <Field
          component={AppFormField}
          name="price"
          placeholder={`S/.${hat.price}`}
        />
        <Text style={styles.addHat__text}>Adelanto (S/.): </Text>
        <Field
          component={AppFormField}
          name="advancement"
          placeholder={`S/.${hat.advancement}`}
        />
        <Text style={styles.addHat__text}>Domicilio: </Text>
        <Field
          component={AppFormField}
          name="address"
          placeholder={`${hat.address}`}
        />
        <Text style={styles.addHat__text}>Observaciones: </Text>
        <Field
          component={AppFormField}
          name="observations"
          placeholder={`${hat.observations}`}
        />
        <View style={styles.addHat__container}>
          <Text style={styles.addHat__text}>Estado Pago: </Text>
          <Text style={styles.addHat__text}>Pendiente</Text>
          <Text style={styles.addHat__text__state}>(p)</Text>
          <Text style={styles.addHat__text}> Cancelado</Text>
          <Text style={styles.addHat__text__state}>(c)</Text>
        </View>

        <Field
          component={AppFormField}
          name="state_payment"
          placeholder={`${hat.state_payment}`}
        />
        <AppFormSubmitButton title="Editar" />
      </AppForm>
      <View style={styles.addHat__buttonClear}>
        <ButtonShared
          onPress={() => navigation.goBack()}
          title="Cancelar"
          color="red"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addHat: {
    padding: 10,
    marginBottom: 50,
  },
  addHat__buttonClear: {
    marginBottom: 20,
  },
  addHat__container: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  addHat__text: {
    fontSize: 14,
    color: color.brown,
    fontFamily: font.font,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  addHat__text__state: {
    fontSize: 16,
    color: color.brown,
    fontFamily: font.font,
    fontWeight: 'bold',
  },
});
