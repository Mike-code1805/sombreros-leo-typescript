import {StyleSheet, Text, FlatList, View, Alert} from 'react-native';
import React from 'react';
import * as color from '../shared/theme/color';
import * as font from '../shared/theme/font';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../routes/Navigator';
import {ButtonRecicle} from '../components/buttons/ButtonRecicle';
import {useSelector, useDispatch} from 'react-redux';
import {PropsRedux} from '../interfaces/state';
import {HatContainer} from '../components/hats/HatContainer';
import createHatService from '../services/createHatService';
import deleteHatRecicleService from '../services/hatRecicle/deleteHatRecicleService';
import {getHatsRecicle} from '../redux/apiCalls';
import {useNetInfo} from '../hooks/useNetInfo';

interface Props extends StackScreenProps<RootStackParams, 'Recicle'> {}

export const Recicle = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {network} = useNetInfo();

  const hatsRecicle = useSelector(
    (state: PropsRedux) => state.hatRecicle.hatsRecicle,
  );
  const onPressRefresh = () => {
    getHatsRecicle(dispatch);
    console.log(hatsRecicle);
  };
  return (
    <View style={styles.r}>
      <View style={styles.reci}>
        <View style={styles.recicle}>
          <ButtonRecicle title="Regresar" />
          <Text style={styles.recicle__text}>Total: {hatsRecicle.length}</Text>
          <ButtonRecicle title="Recargar" onPress={() => onPressRefresh()} />
        </View>
        <View style={styles.divider} />
        {
          <FlatList
            data={hatsRecicle.slice().reverse()}
            renderItem={({item, index}) => (
              <HatContainer
                key={item._id}
                title={'Salvar'}
                state={
                  item.state_payment === 'c'
                    ? 'Cancelado'
                    : item.state_payment === 't'
                    ? 'Trabajado'
                    : 'Pendiente'
                }
                index={index}
                name={item.name}
                date={item.date}
                onPressMirar={() => {
                  try {
                    Alert.alert(
                      'Recuperar sombrero',
                      '¿Estás seguro que deseas restaurar el sombrero?',
                      [
                        {
                          text: 'No',
                          onPress: () => console.log('cancelado'),
                          style: 'cancel',
                        },
                        {
                          text: 'Si',
                          onPress: () => {
                            if (network) {
                              createHatService(item);
                              deleteHatRecicleService(item._id);
                              navigation.navigate('Hats');
                            } else {
                              Alert.alert('Usted no está conectado a internet');
                            }
                          },
                        },
                      ],
                    );
                  } catch (error) {
                    console.log(error);
                  }
                }}
                onPressDelete={() => console.log('delete')}
              />
            )}
            keyExtractor={item => item._id!.toString()}
            horizontal={false}
          />
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  r: {
    marginBottom: 150,
  },
  re: {
    padding: 10,
  },
  reci: {
    padding: 10,
  },
  recicle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recicle__text: {
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 15,
    fontWeight: 'bold',
    color: color.brown,
    fontFamily: font.font,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: color.brown,
    marginTop: 5,
    marginBottom: 10,
  },
});
