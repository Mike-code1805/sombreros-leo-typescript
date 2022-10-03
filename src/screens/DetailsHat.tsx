import {StackScreenProps} from '@react-navigation/stack';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {data} from '../data/data';
import {RootStackParams} from '../routes/Navigator';
import * as color from '../shared/theme/color';
import * as font from '../shared/theme/font';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'DetailsHat'> {}

export const DetailsHat = ({navigation, route}: Props) => {
  const onPressState_Payment = async () => {
    try {
      console.log(route.params)
    } catch (error) {
      console.log(error);
    }
  };

  const onPressPendiente = async () => {
    try {
      console.log('onPressPendiente');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.details}>
      {false ? (
        <View style={styles.loader}>
          <ActivityIndicator size={'large'} color={color.brown} />
        </View>
      ) : (
        <View style={styles.detailsHat}>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Nombre: </Text>
            <Text style={styles.detailsHat__text}>{route.params.name}</Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Fecha: </Text>
            <Text style={styles.detailsHat__text}>{route.params.date}</Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Color de Sombrero: </Text>
            <Text style={styles.detailsHat__text}>{route.params.color_hat}</Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Cintillo: </Text>
            <Text style={styles.detailsHat__text}>{route.params.cintillo}</Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Tafalete: </Text>
            <Text style={styles.detailsHat__text}>{route.params.tafalete}</Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Medida: </Text>
            <Text style={styles.detailsHat__text}>{route.params.measure}cm</Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Color de Cinta: </Text>
            <Text style={styles.detailsHat__text}>{route.params.color_tape}</Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Tamaño: </Text>
            <Text style={styles.detailsHat__text}>{route.params.size}</Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Estado: </Text>
            <Text style={styles.detailsHat__text}>{route.params.state}°</Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Precio: </Text>
            <Text style={styles.detailsHat__text}>S/.{route.params.price}</Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Adelanto: </Text>
            <Text style={styles.detailsHat__text}>
              S/.{route.params.advancement}
            </Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Domicilio: </Text>
            <Text style={styles.detailsHat__text}>{route.params.address}</Text>
          </View>
          <View style={styles.detailsHat__container}>
            <Text style={styles.detailsHat__textData}>Observaciones: </Text>
            <Text style={styles.detailsHat__text}>{route.params.observations}</Text>
          </View>
          {route.params.pendiente ? (
            <View style={styles.detailsHat__container}>
              <Text style={styles.detailsHat__textData__worked}>
                Pendiente De Trabajarlo
              </Text>
            </View>
          ) : null}
          {route.params.state_payment === 'c' ? (
            <View style={styles.detailsHat__container}>
              <Text style={styles.detailsHat__textData}>
                Sombrero Pagado y Entregado
              </Text>
            </View>
          ) : (
            <View style={styles.detailsHat__container}>
              <Text style={styles.detailsHat__textData__pendiente}>
                Sombrero Pendiente de Pago y Entrega
              </Text>
            </View>
          )}
        </View>
      )}

      <View style={styles.detailsButtons}>
        <TouchableOpacity
          style={styles.prdetailsButtons__edit}
          onPress={() => navigation.navigate('Hats')}>
          <Icon name="create" color="white" size={23} />
          <Text style={styles.detailsButtons__style__text}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.prdetailsButtons__pay}
          disabled={true ? false : true}
          onPress={onPressState_Payment}>
          <Icon name="thumbs-up" color="white" size={23} />
          <Text style={styles.detailsButtons__style__text}>Entregado</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.prdetailsButtons__work}
          disabled={true ? false : true}
          onPress={onPressPendiente}>
          <Icon name="hammer" color="white" size={23} />
          <Text style={styles.detailsButtons__style__text}>Trabajado</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loader: {
    padding: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    padding: 10,
  },
  detailsHat: {
    padding: 10,
    color: color.black,
    shadowColor: color.brown,
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: color.white,
    borderColor: color.brown,
    borderWidth: 3,
    borderRadius: 5,
  },
  detailsHat__container: {
    flexDirection: 'row',
  },
  detailsHat__text: {
    fontSize: 18,
    fontFamily: font.font,
    fontWeight: 'bold',
  },
  detailsHat__textData: {
    color: color.brown,
    fontFamily: font.font,
    fontWeight: 'bold',
    fontSize: 18,
  },
  detailsHat__textData__pendiente: {
    color: color.green,
    fontFamily: font.font,
    fontWeight: 'bold',
    fontSize: 18,
  },
  detailsHat__textData__worked: {
    color: color.yellow,
    fontFamily: font.font,
    fontWeight: 'bold',
    fontSize: 18,
  },
  detailsButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  prdetailsButtons__edit: {
    width: 'auto',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: color.brown,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    margin: 5,
  },
  prdetailsButtons__pay: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: color.green,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  prdetailsButtons__work: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: color.yellow,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  prdetailsButtons__delete: {
    width: 120,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: color.red,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  detailsButtons__style__text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: color.white,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: font.font,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
