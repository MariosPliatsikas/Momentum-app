// components/NotificationComponent.js
import React from 'react';
import { View, Text } from 'react-native';

const NotificationComponent = ({ notifications }) => (
  <View>
    {/* Render notifications */}
    {notifications.map(notification => (
      <View key={notification.title}>
        <Text>{notification.title}</Text>
        <Text>{notification.message}</Text>
      </View>
    ))}
  </View>
);

export default NotificationComponent;

