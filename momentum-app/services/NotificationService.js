// services/NotificationService.js
import { useEffect, useState } from 'react';

const useNotificationService = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch context-aware notifications from the backend
    fetch('https://your-backend-endpoint/context-aware-notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: 'user123' }), // Replace with actual user ID
    })
      .then(response => response.json())
      .then(data => setNotifications(data.notifications))
      .catch(error => console.error('Error fetching notifications:', error));
  }, []);

  return notifications;
};

export default useNotificationService;

