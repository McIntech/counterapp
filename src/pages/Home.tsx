import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button1 from '../components/Button1';

const Home = () => {
  const [counter, setCounter] = React.useState(0);
  const sumar = (): void => {
    console.log('Sumar presionado');
    setCounter(counter + 1);
  };
  const restar = (): void => {
    console.log('Restar presionado');
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const reset = (): void => {
    console.log('Reset presionado');
    setCounter(0);
  };
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/image1.jpg')}
    >
      {/* Content */}
      <View style={styles.overlay}>
        <Text style={styles.headerText}>COUNTER</Text>

        {/* Button Section */}
        <View style={styles.containerButtons}>
          <Button1
            title="Subtract"
            onPress={restar}
            style={styles.button}
          />
          <Button1
            title="Counter"
            onPress={sumar}
            style={styles.button}
          />
          <Button1
            title="Reset"
            onPress={reset}
            style={[styles.button, styles.fullWidthButton]}
          />
        </View>

        {/* Counter Display */}
        <View style={styles.counterDisplay}>
          <Text style={styles.counterText}>{counter}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for better text readability
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff', // White text for better contrast
    textAlign: 'center',
    marginBottom: 20,
  },
  mainImage: {
    width: 250,
    height: 150,
    borderRadius: 15,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  containerButtons: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    width: '40%', // Two buttons side by side
    height: 50,
    backgroundColor: '#3b82f6', // Tailwind blue-500
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  fullWidthButton: {
    width: '90%', // Full width for Reset button
    backgroundColor: '#2563eb', // Tailwind blue-700
  },
  counterDisplay: {
    marginTop: 20,
    backgroundColor: '#ffffff', // White counter background
    borderRadius: 15,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Black counter text
  },
});

export default Home;
