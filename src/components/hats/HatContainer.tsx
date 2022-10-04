import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as color from '../../shared/theme/color';
import * as font from '../../shared/theme/font';

interface Props {
  state?: string;
  index?: number;
  name?: string;
  date?: string;
  toSee?: boolean;
  title?: string;
  onPressMirar(): void | undefined;
  onPressDelete(): void | undefined;
}

export const HatContainer = ({
  state,
  index = -1,
  name,
  date,
  toSee = true,
  title = 'Mirar',
  onPressMirar,
  onPressDelete,
}: Props) => {
  return (
    <View>
      <View
        style={
          state === 'Trabajado'
            ? styles.hatContainer__container__yellow
            : state === 'Cancelado'
            ? styles.hatContainer__container__green
            : styles.hatContainer__container
        }>
        <View style={styles.hatContainer__container__note}>
          <View style={styles.hatContainer__container__note__text}>
            <Text style={styles.hatContainer__container__note__text__index}>
              {index + 1}
            </Text>
            <Text style={styles.hatContainer__container__note__text__text}>
              {name}
            </Text>
            <Text
              style={
                state === 'Pendiente'
                  ? styles.hatContainer__container__note__text__text__p
                  : state === 'Trabajado'
                  ? styles.hatContainer__container__note__text__text__t
                  : state === 'Cancelado'
                  ? styles.hatContainer__container__note__text__text__c
                  : null
              }>
              {`(${state})`}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.hatContainer__container__note__delete__container}
            onPress={onPressDelete}>
            <Text style={styles.hatContainer__container__note__delete}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hatContainer__container__note__date}>
          <Text style={styles.hatContainer__container__note__date__text}>
            Fecha: {date}
          </Text>
          <TouchableOpacity
            style={styles.hatContainer__container__note__date__edit}
            onPress={onPressMirar}>
            {toSee ? (
              <Text
                style={styles.hatContainer__container__note__date__edit__text}>
                {title}
              </Text>
            ) : (
              <Text
                style={styles.hatContainer__container__note__date__edit__text}>
                Salvar
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hatContainer__container: {
    marginBottom: 20,
    padding: 10,
    opacity: 0.8,
    color: color.black,
    shadowColor: color.brown,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 5,
    borderColor: color.brown,
    borderWidth: 3,
    borderLeftWidth: 15,
  },
  hatContainer__container__yellow: {
    marginBottom: 20,
    padding: 10,
    opacity: 0.8,
    color: color.black,
    shadowColor: color.brown,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 5,
    borderColor: color.yellow,
    borderWidth: 3,
    borderLeftWidth: 15,
  },
  hatContainer__container__green: {
    marginBottom: 20,
    padding: 10,
    opacity: 0.8,
    color: color.black,
    shadowColor: color.brown,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 5,
    borderColor: color.green,
    borderWidth: 3,
    borderLeftWidth: 15,
  },
  hatContainer__container__note: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  hatContainer__container__note__text: {
    flexDirection: 'row',
    width: '80%',
    color: color.black,
  },
  hatContainer__container__note__text__index: {
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: font.font,
    color: color.black,
  },
  hatContainer__container__note__text__text: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: font.font,
    marginLeft: 5,
    width: '60%',
    color: color.black,
  },
  hatContainer__container__note__text__text__p: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: font.font,
    marginLeft: 5,
    color: color.brown,
  },
  hatContainer__container__note__text__text__t: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: font.font,
    marginLeft: 5,
    color: color.yellow,
  },
  hatContainer__container__note__text__text__c: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: font.font,
    marginLeft: 5,
    color: color.green,
  },
  hatContainer__container__note__delete__container: {
    justifyContent: 'flex-end',
  },
  hatContainer__container__note__delete: {
    color: color.brown,
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: font.font,
  },
  hatContainer__container__note__date: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hatContainer__container__note__date__text: {
    fontFamily: font.font,
    color: color.black,
  },
  hatContainer__container__note__date__edit: {
    justifyContent: 'center',
  },
  hatContainer__container__note__date__edit__text: {
    color: color.brown,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: font.font,
  },
});
