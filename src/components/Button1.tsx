import * as React from 'react';
import { StyleSheet, Text, Pressable, View, GestureResponderEvent } from 'react-native';
import { Border, Color, FontSize, FontFamily } from '../styles/GlobalStyles';

type Button1Props = {
  title: string; // Texto del botón
  onPress?: (event: GestureResponderEvent) => void; // Acción al presionar
  style?: object; // Estilo personalizado opcional
};

const Button1: React.FC<Button1Props> = ({ title, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : styles.buttonNormal,
        style, // Permite añadir estilos personalizados
      ]}
    >
      <View style={styles.buttonChild} />
      <Text style={styles.counter}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonChild: {
    height: '100%',
    width: '100%',
    borderRadius: Border.br_10xs,
    position: 'absolute',
  },
  counter: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSerifRegular,
    color: Color.colorWhite,
    textAlign: 'center',
  },
  button: {
    width: 106,
    height: 35,
    borderRadius: Border.br_6xs,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  buttonNormal: {
    backgroundColor: Color.colorAquamarine, // Estado normal
  },
  buttonPressed: {
    backgroundColor: Color.colorDarkslategray, // Cambia a un color más fuerte
    transform: [{ scale: 0.95 }], // Hace que el botón se vea presionado
  },
});

export default Button1;
