import {View, TouchableOpacity, StyleSheet} from 'react-native';
import * as color from '../../shared/theme/color';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  circle?: boolean;
  onPress?: () => void;
}

export const ButtonsOpacity = ({name, circle = false, onPress}: Props) => {
  return (
    <View style={styles.header__icons__plus}>
      <TouchableOpacity
        style={circle ? styles.header__icons__container : styles.noteCard__search__container}
        onPress={onPress}>
        <Icon name={name} color="white" size={23} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header__icons__plus: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header__icons__container: {
    backgroundColor: color.brown,
    width: 45,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  noteCard__search__container: {
    backgroundColor: color.brown,
    width: 50,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});
