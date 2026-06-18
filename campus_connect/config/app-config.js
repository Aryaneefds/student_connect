// Configuration file for Campus Connect app
// Update these values to customize your app

export const APP_CONFIG = {
  // App Information
  appName: 'Campus Connect',
  appVersion: '1.0.0',
  appDescription: 'Connect with students, discover events, build community',

  // API Configuration
  api: {
    baseURL: process.env.REACT_APP_API_URL || 'https://api.your-backend.com',
    timeout: 10000,
  },

  // Feature Flags
  features: {
    enableNotifications: true,
    enableVideoCalls: false,
    enableImageSharing: false,
    enableGroups: true,
    enableClubs: true,
    enableMarketplace: false,
  },

  // Theme Colors
  colors: {
    primary: '#2196F3',
    secondary: '#4CAF50',
    danger: '#FF6B6B',
    warning: '#FF9800',
    success: '#4CAF50',
    info: '#2196F3',
    light: '#f5f5f5',
    dark: '#333',
    background: '#ffffff',
  },

  // Tab Configuration
  tabs: {
    home: {
      label: 'Home',
      icon: '🏠',
      color: '#2196F3',
    },
    messages: {
      label: 'Messages',
      icon: '💬',
      color: '#4CAF50',
    },
    profile: {
      label: 'Profile',
      icon: '👤',
      color: '#9C27B0',
    },
  },

  // Notification Settings
  notifications: {
    enabled: true,
    soundEnabled: true,
    vibrationEnabled: true,
  },

  // Storage Keys
  storageKeys: {
    selectedCollege: 'selectedCollege',
    userProfile: 'userProfile',
    authToken: 'authToken',
    preferences: 'preferences',
  },

  // Default Values
  defaults: {
    itemsPerPage: 20,
    searchMinChars: 2,
    imageQuality: 0.8,
    videoQuality: 'medium',
  },

  // Analytics (optional)
  analytics: {
    enabled: false,
    trackingId: 'UA-XXXXXXXXX-X',
  },

  // Social Media Links (optional)
  socialLinks: {
    facebook: 'https://facebook.com/campusconnect',
    instagram: 'https://instagram.com/campusconnect',
    twitter: 'https://twitter.com/campusconnect',
    linkedin: 'https://linkedin.com/company/campusconnect',
  },

  // Support
  support: {
    email: 'support@campusconnect.com',
    phone: '+1-800-CAMPUS-1',
    website: 'https://campusconnect.com',
  },
};

// Validation
export const validateConfig = () => {
  if (!APP_CONFIG.appName) {
    console.warn('Missing app name in configuration');
  }
  if (!APP_CONFIG.api.baseURL.includes('http')) {
    console.warn('Invalid API URL in configuration');
  }
  return true;
};
