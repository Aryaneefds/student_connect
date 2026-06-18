# Campus Connect - Setup & Development Guide

## ✅ Project Created Successfully!

Your Campus Connect React Native + Expo Android app has been created with all the necessary features.

## 📁 Project Files Created

### Core App Files
- **App.js** - Main application entry with navigation setup
- **app.json** - Expo configuration for Android and iOS
- **package.json** - Dependencies and scripts

### Screen Components (in `/screens`)
- `CollegeSelectionScreen.js` - Initial college selection interface
- `HomeScreen.js` - College-specific home dashboard
- `StudentsScreen.js` - Student directory with search
- `EventsScreen.js` - Campus events listing
- `MessagesScreen.js` - Messaging interface
- `ProfileScreen.js` - User profile management

### Context & Data (in `/context` & `/data`)
- `CollegeContext.js` - Global state management for selected college
- `colleges.js` - Mock data for 5 colleges with students and events

## 🚀 Quick Start

### 1. Navigate to the project
```bash
cd campus_connect
```

### 2. Run the app

**Option A: Expo Go (Quickest)**
```bash
npx expo start
```
Then scan the QR code with Expo Go app on your Android device or emulator.

**Option B: Android Emulator**
```bash
npm run android
```

**Option C: Development Build**
```bash
eas build --platform android --dev-client
```

**Option D: Web (for testing)**
```bash
npm run web
```

## 📱 Features Implemented

### 🎓 College Selection
- Browse 5 demo colleges (MIT, Stanford, Harvard, UC Berkeley, Yale)
- See college stats (students, events)
- Select to access college-specific features

### 🏠 College Home Screen
- Personalized college dashboard
- Quick stats (students, events, clubs)
- Quick access menu to main features
- College announcements
- Change college option

### 👥 Student Directory
- Search students by name or major
- View: Name, Major, Year
- Message button for each student
- College-specific student list

### 📅 Events Screen
- List of upcoming campus events
- Event details: Date, Time, Location, Attendees
- RSVP functionality
- Date-based sorting

### 💬 Messaging
- Conversation list with friends
- Unread message indicators
- Search conversations
- Quick compose button (FAB)

### 👤 User Profile
- Profile information display
- Activity statistics
- Settings menu
- Logout functionality

## 🛠️ Technology Stack

- **Framework**: React Native
- **Build Tool**: Expo (SDK 56)
- **Navigation**: React Navigation v6
  - Stack Navigator (for screens)
  - Bottom Tab Navigator (for main tabs)
- **State Management**: Context API
- **UI Components**: React Native built-ins
- **Styling**: React Native StyleSheet

## 📂 Project Structure

```
campus_connect/
├── App.js                      # Main navigation setup
├── app.json                    # Expo config
├── package.json                # Dependencies
├── screens/                    # Screen components
│   ├── CollegeSelectionScreen.js
│   ├── HomeScreen.js
│   ├── StudentsScreen.js
│   ├── EventsScreen.js
│   ├── MessagesScreen.js
│   └── ProfileScreen.js
├── context/                    # Context providers
│   └── CollegeContext.js
├── data/                       # Mock data
│   └── colleges.js
└── assets/                     # Images & icons
```

## 🔄 Navigation Flow

```
App Start
    ↓
CollegeSelectionScreen
    ↓ (Select College)
Main Tab Navigator
    ├── Home Tab
    │   ├── Home Screen
    │   ├── → Students Screen
    │   └── → Events Screen
    ├── Messages Tab
    │   └── Messages Screen
    └── Profile Tab
        └── Profile Screen
```

## 📝 Mock Data Included

### 5 Colleges
1. MIT (Cambridge, MA) - 1045 students, 12 events
2. Stanford (Palo Alto, CA) - 1842 students, 18 events
3. Harvard (Cambridge, MA) - 2100 students, 20 events
4. UC Berkeley (Berkeley, CA) - 1600 students, 15 events
5. Yale (New Haven, CT) - 1250 students, 14 events

### Sample Data
- 3-4 students per college
- 2-4 events per college
- 4 mock conversations
- Mock profile for current user

## ⚙️ Customization Guide

### Change Colors
Edit the color values in each screen file:
```javascript
// Example in HomeScreen.js
backgroundColor: college.color  // Uses college's assigned color
```

### Add New College
In `data/colleges.js`:
```javascript
export const COLLEGES = [
  // ... existing colleges
  {
    id: '6',
    name: 'Your College',
    shortName: 'Full Name',
    location: 'City, State',
    students: 1000,
    events: 10,
    logo: '📚',
    color: '#YOUR_COLOR',
  },
];
```

### Add New Feature
1. Create new screen in `/screens`
2. Add to navigation in `App.js`
3. Update `CollegeContext.js` if needed for state

## 🔗 API Integration (Future)

Replace mock data with real API calls:

```javascript
// In CollegeContext.js
const fetchColleges = async () => {
  try {
    const response = await fetch('YOUR_API_URL/colleges');
    const data = await response.json();
    setColleges(data);
  } catch (error) {
    console.error('Error fetching colleges:', error);
  }
};
```

## 🏗️ Building for Android

### APK Build
```bash
eas build --platform android
```

### AAB Build (for Play Store)
```bash
eas build --platform android --format aab
```

### Local Build
```bash
npm run android
```

## 🚨 Common Issues & Solutions

### Issue: "Module not found"
**Solution**: Run `npm install` again
```bash
npm install
```

### Issue: Port 8081 already in use
**Solution**: Kill the process or use different port
```bash
npx expo start --clear
```

### Issue: App crashes on startup
**Solution**: Check `App.js` navigation setup and ensure all screens are exported

### Issue: Styles not applying
**Solution**: Ensure StyleSheet is imported and component names match

## 📚 Learning Resources

- [Expo Documentation](https://docs.expo.dev)
- [React Navigation Docs](https://reactnavigation.org)
- [React Native Docs](https://reactnative.dev)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)

## 🎯 Next Steps

1. ✅ **Run the app** - Test with `npx expo start`
2. 📱 **Test on Android** - Use emulator or physical device
3. 🎨 **Customize colors** - Match your college branding
4. 🔌 **Connect backend** - Replace mock data with APIs
5. 🔐 **Add authentication** - Implement user login
6. 🚀 **Deploy** - Build APK and publish

## 📋 Development Checklist

- [ ] Run app on Android emulator
- [ ] Test college selection
- [ ] Verify navigation between screens
- [ ] Test search functionality
- [ ] Check messaging UI
- [ ] Verify profile screen
- [ ] Test tab navigation
- [ ] Review styling consistency

## 💡 Tips

1. Use `console.log()` for debugging
2. Test navigation with real device when possible
3. Use Expo Go app for quick testing
4. Keep mock data in separate file for easy API swap
5. Use Context API for state that needs college info

## 🤝 Contributing

To add new features:
1. Create new screen component
2. Add to navigation in `App.js`
3. Style consistently with existing screens
4. Test thoroughly on Android

## 📄 License

MIT License - Feel free to use and modify

---

**Your Campus Connect app is ready to use! 🎉**

For more help, visit [Expo Docs](https://docs.expo.dev) or check React Navigation documentation.
