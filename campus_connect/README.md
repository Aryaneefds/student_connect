# Campus Connect 🎓

A React Native + Expo Android app for college students to connect, share events, and build community.

## Features

### 📱 Core Features
- **College Selection**: Browse and select from participating colleges
- **College-Specific Screens**: Each college has dedicated screens for students, events, and activities
- **Student Directory**: Find and connect with students from your college
- **Events Management**: Discover campus events and RSVP
- **Messaging**: Real-time chat with other students
- **User Profiles**: Create and manage your student profile

### 🎓 College Integration
- Separate data for each college (students, events, clubs)
- College-branded colors and themes
- College-specific announcements and information
- Community building features

## Project Structure

```
campus_connect/
├── App.js                          # Main app entry point with navigation
├── app.json                        # Expo configuration
├── package.json                    # Dependencies
├── screens/
│   ├── CollegeSelectionScreen.js   # College selection interface
│   ├── HomeScreen.js               # College-specific home
│   ├── StudentsScreen.js           # Student directory
│   ├── EventsScreen.js             # Campus events
│   ├── MessagesScreen.js           # Messaging interface
│   └── ProfileScreen.js            # User profile
├── context/
│   └── CollegeContext.js           # Global college state management
├── data/
│   └── colleges.js                 # Mock data for colleges, students, events
└── assets/                         # Images and icons
```

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the app**
   - Web: `npm run web`
   - Android: `npm run android`
   - iOS: `npm run ios`

## Navigation Structure

```
CollegeSelection
    ↓
Main Tab Navigator
    ├─ Home Stack
    │   ├─ Home (College-specific)
    │   ├─ Students
    │   └─ Events
    ├─ Messages Stack
    │   └─ Messages
    └─ Profile Stack
        └─ Profile
```

## Screenshots & Features

### 🏫 College Selection
- Browse 5+ colleges with stats
- View student count and events
- One-click selection

### 🏠 Home Screen
- Personalized college dashboard
- Quick access menu
- College statistics
- Latest announcements

### 👥 Students Directory
- Search students by name/major
- View student info
- Direct messaging
- Connection requests

### 📅 Events Screen
- Upcoming events calendar
- Event details (time, location)
- RSVP tracking
- Attendee counts

### 💬 Messages
- Real-time conversations
- Unread indicators
- Search conversations
- Profile previews

### 👤 Profile
- User information
- Activity stats
- Settings & preferences
- Account management

## Building for Android

### Development
```bash
npm run android
```

### Production APK
```bash
eas build --platform android --release
```

## Technologies

- React Native & Expo
- React Navigation (Stack & Tabs)
- Context API
- JavaScript

## Future Enhancements

- Real-time notifications
- Image sharing
- Event calendar view
- User authentication
- Backend API integration
- In-app video calls
- College clubs directory
- Study groups
- Marketplace

## Support

For help or issues, check [Expo Documentation](https://docs.expo.dev) or open an issue on GitHub.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
