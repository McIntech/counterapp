import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Home from './src/pages/Home';

function App(): React.JSX.Element {
  const [theme] = useState('dark'); // Estado inicial: Dark Mode

  return (
    <>
      {/* Configura la barra de estado */}
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme === 'dark' ? '#000' : '#fff'}
      />
      {/* Configura el fondo basado en el tema */}
      <SafeAreaView
        style={[
          styles.container,
          theme === 'dark' ? styles.darkBackground : styles.lightBackground,
        ]}
      >
        <Home />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkBackground: {
    backgroundColor: '#000',
  },
  lightBackground: {
    backgroundColor: '#fff',
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
});

export default App;
