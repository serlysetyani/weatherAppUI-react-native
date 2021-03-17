import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';

const image = { uri: "https://images.unsplash.com/photo-1566176553949-872b2a73e04e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1532&q=80" };

export default function App() {
  return (
    <ImageBackground source={image} style={styles.backgroundImage} blurRadius={8}>
      <KeyboardAvoidingView style={styles.container} behavior='height'>
        <Text style={styles.textCity}>Surabaya</Text>
        <Text style={styles.textWeather}>Sunny</Text>
        <Text style={styles.textDegree}>30°</Text>
        <TextInput
          autoCorrect={false}
          placeholder="Search any city"
          placeholderTextColor="#FFFFFF"
          clearButtonMode='always'
          style={styles.containerTextInput}
        />
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textCity: {
    fontSize: 32,
    fontWeight: '400',
  },
  textWeather: {
    fontSize: 24,
  },
  textDegree: {
    fontSize: 60,
    fontWeight: '500',
  },
  containerTextInput: {
    width: '90%',
    backgroundColor: '#666',
    opacity: 0.8,
    marginTop: 20,
    height: 48,
    borderRadius: 8,
    padding: 15,
    color: '#FFFFFF'
  }
});
