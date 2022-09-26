import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";
import { Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#83541E",
    width: "65%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "monospace",
  },
});

interface AppFormSubmitButtonProps {
  title: string;
}

const AppFormSubmitButton = ({ title }: AppFormSubmitButtonProps) => {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          styles.button,
        ]}
        onPress={handleSubmit}
        disabled={!isValid}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default AppFormSubmitButton;
