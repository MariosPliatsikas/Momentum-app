import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const handleRouteOptimization = async () => {
    try {
      // Simulate a request to the AI service (replace with actual API call)
      const response = await fetch('https://your-ai-service-endpoint/route-optimization', {
        method: 'POST',
        // Include any required headers and request body
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Include any relevant data for optimization
          origin: 'Current Location',
          destination: "User's Destination",
          // Additional data as needed
        }),
      });

      const result = await response.json();

      // Display the optimized route to the user
      Alert.alert('Optimized Route', `Optimal Route: ${result.route}`);
    } catch (error) {
      console.error('Error optimizing route:', error.message);
      Alert.alert('Error', 'Failed to optimize route. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Optimize Route" onPress={handleRouteOptimization} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

