import {StackScreenProps} from '@react-navigation/stack';
import {Field} from 'formik';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import AppForm from '../components/form/AppForm';
import AppFormField from '../components/form/AppFormField';
import AppFormSubmitButton from '../components/form/AppFormSubmitButton';
import {HatProps} from '../interfaces/interface';
import {RootStackParams} from '../routes/Navigator';
import ButtonShared from '../shared/button/ButtonShared';
import {hatValidaton} from '../validator/hatValidaton';
import * as color from '../shared/theme/color';
import * as font from '../shared/theme/font';
import {equalsObsjects} from '../functions/equalsObsjects';

interface Props extends StackScreenProps<RootStackParams, 'EdiHat'> {}

export const EdiHat = ({navigation, route}: Props) => {
  const data1 = {
    id: '1',
    name: 'edit',
  };
  const data2 = {
    id: '1',
    name: 'edit',
  };
  const handleOnSubmitToEdit = async (values: HatProps) => {
    if (!equalsObsjects(values, route.params)) {
      console.log(true);
      console.log({values});
      console.log(route.params);
      console.log('NOT PASS TEST');
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
        date: values.date,
        pendiente: true,
      };
      console.log(objectToSent);
      console.log('PASS TEST');
    }
  };
  return (
    <ScrollView style={styles.addHat}>
      <AppForm
        initialValues={{
          name: route.params.name,
          color_hat: route.params.color_hat,
          cintillo: route.params.cintillo,
          tafalete: route.params.tafalete,
          measure: route.params.measure,
          color_tape: route.params.color_tape,
          size: route.params.size,
          state: route.params.state,
          price: route.params.price,
          advancement: route.params.advancement,
          address: route.params.address,
          observations: route.params.observations,
          state_payment: route.params.state_payment,
        }}
        validationSchema={hatValidaton}
        onSubmit={handleOnSubmitToEdit}>
        <Text style={styles.addHat__text}>Nombre: </Text>
        <Field
          component={AppFormField}
          name="name"
          placeholder={route.params.name}
        />
        <Text style={styles.addHat__text}>Color de Sombrero: </Text>
        <Field
          component={AppFormField}
          name="color_hat"
          placeholder={route.params.color_hat}
        />
        <Text style={styles.addHat__text}>Cintillo (si) (no): </Text>
        <Field
          component={AppFormField}
          name="cintillo"
          placeholder={route.params.cintillo}
        />
        <Text style={styles.addHat__text}>Tafalete (si) (no): </Text>
        <Field
          component={AppFormField}
          name="tafalete"
          placeholder={route.params.tafalete}
        />
        <Text style={styles.addHat__text}>Medida(cm): </Text>
        <Field
          component={AppFormField}
          name="measure"
          placeholder={`${route.params.measure}cm`}
        />
        <Text style={styles.addHat__text}>Color de Cinta: </Text>
        <Field
          component={AppFormField}
          name="color_tape"
          placeholder={`${route.params.color_tape}`}
        />
        <Text style={styles.addHat__text}>Tamaño: </Text>
        <Field
          component={AppFormField}
          name="size"
          placeholder={`${route.params.size}`}
        />
        <Text style={styles.addHat__text}>Estado (1°) (2°) (3°) (4°): </Text>
        <Field
          component={AppFormField}
          name="state"
          placeholder={`${route.params.state}°`}
        />
        <Text style={styles.addHat__text}>Precio (S/.): </Text>
        <Field
          component={AppFormField}
          name="price"
          placeholder={`S/.${route.params.price}`}
        />
        <Text style={styles.addHat__text}>Adelanto (S/.): </Text>
        <Field
          component={AppFormField}
          name="advancement"
          placeholder={`S/.${route.params.advancement}`}
        />
        <Text style={styles.addHat__text}>Domicilio: </Text>
        <Field
          component={AppFormField}
          name="address"
          placeholder={`${route.params.color_tape}`}
        />
        <Text style={styles.addHat__text}>Observaciones: </Text>
        <Field
          component={AppFormField}
          name="observations"
          placeholder={`${route.params.color_tape}`}
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
          placeholder={`${route.params.color_tape}`}
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
