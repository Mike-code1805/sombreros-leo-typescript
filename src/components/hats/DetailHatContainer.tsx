import {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HatsContext} from '../../context/HatContext';
import {detailHatData} from '../../data/detailHatData';
import {HatProps} from '../../interfaces/interface';
import * as color from '../../shared/theme/color';
import * as font from '../../shared/theme/font';

interface DetailHatContainerProps {
  hat: HatProps;
}

export const DetailHatContainer = ({hat}: DetailHatContainerProps) => {
  const hatShow = detailHatData(hat);
  return (
    <View>
      {hatShow.map((value, index) => (
        <View key={index} style={styles.detailsHat__container}>
          <Text style={styles.detailsHat__textData}>{value.id}: </Text>
          <Text style={styles.detailsHat__text}>{value.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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
});
