import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface Props {
  placeholder: string;
  field: FieldProps;
  form: FormProps;
}

interface FieldProps {
  name: string;
  onBlur: any;
  onChange: any;
  value: string;
}

interface FormProps {
  errors: any;
  touched: any;
  setFieldTouched: any;
}

const AppFormField = (props: Props) => {
  const {
    placeholder,
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </View>
  );
};

export default AppFormField;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 5,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    fontFamily: 'monospace',
    color: 'black',
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'monospace',
  },
});
