import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import axios from 'axios';
import NotificationComponent from './components/NotificationComponent';
import useNotificationService from './services/NotificationService';
import { getWeather } from './services/WeatherService';
import FeedbackService from './services/FeedbackService';

export default function App() {
  const [weather, setWeather] = useState(null);

  const handleGetWeather = async () => {
    try {
      const response = await WeatherService.getWeather('Kassel');
      setWeather(response);
      Alert.alert('Weather Info', `Temperature: ${response.main.temp}°C`);
    } catch (error) {
      console.error('Error getting weather:', error.message);
      Alert.alert('Error', 'Failed to get weather information. Please try again.');
    }
  };
 
  const handleRouteOptimization = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/route-optimization', {
        origin: 'Current Location',
        destination: "User's Destination",
      });

      const result = response.data;

      // Display the optimized route to the user
      Alert.alert('Optimized Route', `Optimal Route: ${result.route}`);
    } catch (error) {
      console.error('Error optimizing route:', error.message);
      Alert.alert('Error', 'Failed to optimize route. Please try again.');
    }
  };
  const App = () => {
  const notifications = useNotificationService();
  return (
    <View>
      <Text>App Content</Text>
      {/* Use the NotificationComponent */}
      <NotificationComponent notifications={notifications} />
    </View>
  );
};

  const handleCreativePrompt = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/creative-prompt');

      const prompt = response.data.prompt;

      // Display the creative prompt to the user
      Alert.alert('Creative Prompt', `Your Creative Prompt: ${prompt}`);
    } catch (error) {
      console.error('Error fetching creative prompt:', error.message);
      Alert.alert('Error', 'Failed to fetch creative prompt. Please try again.');
    }
  };
  
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Optimize Route" onPress={handleRouteOptimization} />
      <Button title="Get Creative Prompt" onPress={handleCreativePrompt} />
      <Button title="Get Weather" onPress={handleGetWeather} />
      <StatusBar style="auto" />
    </View>
  );
}

  const [userMessage, setUserMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleSendMessage = async () => {
    try {
      const response = await FeedbackService.getBotResponse(userMessage);
      setBotResponse(response);
    } catch (error) {
      console.error('Error handling feedback:', error.message);
      Alert.alert('Error', 'Failed to handle feedback. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>App Content</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        onChangeText={(text) => setUserMessage(text)}
        value={userMessage}
      />
      <Button title="Send Message" onPress={handleSendMessage} />
      <Text>Bot Response: {botResponse}</Text>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB', // Light Blue background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Add padding for better spacing
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // White text color
  },
  subtitle: {
    fontSize: 18,
    color: '#fff', // White text color
    marginBottom: 20,
  },
});

