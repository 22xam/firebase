// src/services/notificationService.js

const publicVapidKey = 'YOUR_PUBLIC_VAPID_KEY_HERE'; // Replace with your

// Helper function to convert VAPID key to Uint8Array
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

/**
 * Subscribes the user to push notifications.
 * Requests permission, registers service worker, and sends subscription to backend.
 */
export const subscribeUserToPush = async () => {
  // Check for service worker and push manager support
  if (!('serviceWorker' in navigator)) {
    console.warn('Service workers are not supported by this browser.');
    return;
  }
  if (!('PushManager' in window)) {
    console.warn('Push notifications are not supported by this browser.');
    return;
  }

  try {
    // Request notification permission
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      console.log('Notification permission granted.');

      // Register the service worker (assuming it's at the root)
      const registration = await navigator.serviceWorker.register('/service-worker.js'); // Assuming service worker file name and location
      console.log('Service Worker Registered:', registration);

      const subscribeOptions = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
      };

      const pushSubscription = await registration.pushManager.subscribe(subscribeOptions);
      console.log('Push Subscription:', JSON.stringify(pushSubscription));

      // TODO: Send the subscription to your backend API
      // Replace '/api/subscribe' with your actual endpoint
      console.log('Sending subscription to backend...');
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     // Add authorization header if needed
      //   },
      //   body: JSON.stringify(pushSubscription),
      // });

      // if (response.ok) {
      //   console.log('Subscription sent to backend successfully.');
      // } else {
      //   console.error('Failed to send subscription to backend.');
      // }

    } else {
      console.warn('Notification permission denied.');
    }
  } catch (error) {
    console.error('Error subscribing to push notifications:', error);
  }
};

// You might want to add other notification-related functions here,
// like logic to handle received push messages in the frontend (though
// typically this is done in the service worker).