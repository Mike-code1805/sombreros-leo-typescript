import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as color from '../../shared/theme/color';
import * as font from '../../shared/theme/font';

interface Props {
  title?: string;
  onPress?: () => void | undefined;
}

export const ButtonRecicle = ({onPress, title}: Props) => {
  return (
    <View style={styles.recicle__undo}>
      <TouchableOpacity
        style={styles.recicle__undo__container}
        onPress={onPress}>
        <Text style={styles.recicle__undo__text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  recicle__undo: {},
  recicle__undo__container: {
    backgroundColor: color.brown,
    width: 80,
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  recicle__undo__text: {
    color: color.white,
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: font.font,
  },
});
