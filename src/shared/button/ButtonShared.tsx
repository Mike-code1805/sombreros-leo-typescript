import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import * as color from '../theme/color';

interface Props {
  title?: string;
  onPress?: () => void;
  isValid?: boolean;
  color?: string;
}

const ButtonShared = ({
  title,
  onPress,
  isValid = true,
  color = 'black',
}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          color === 'red'
            ? styles.buttonRed
            : color === 'green'
            ? styles.buttonGreen
            : color === 'blue'
            ? styles.buttonBlue
            : color === 'brown'
            ? styles.buttonBrown
            : styles.button,
        ]}
        onPress={onPress}
        disabled={!isValid}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonShared;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: color.black,
    width: '65%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonRed: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: color.red,
    width: '65%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonGreen: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: color.green,
    width: '65%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonBlue: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: color.blue,
    width: '65%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonBrown: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: color.brown,
    width: '65%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    display: 'flex',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
