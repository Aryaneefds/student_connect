# 🚀 Campus Connect - Quick Reference Guide

## Start Here

### Running the App
```bash
cd campus_connect
npx expo start          # Start dev server
# Scan QR code with Expo Go app
```

### Or for Android Emulator
```bash
cd campus_connect
npm run android         # Build and run on emulator
```

---

## 📱 App Flow

```
Open App
    ↓
CollegeSelectionScreen (Pick a college)
    ↓ (Select MIT, Stanford, etc)
    ↓
MainTabNavigator
├─ Home Tab
│  └─ Home Screen (Dashboard)
│     ├─ Students Screen (search students)
│     └─ Events Screen (view events)
├─ Messages Tab
│  └─ Messages Screen (chat list)
└─ Profile Tab
   └─ Profile Screen (user info)
```

---

## 🎓 5 Pre-loaded Colleges

1. **MIT** 🏛️ - Cambridge, MA
2. **Stanford** 🌲 - Palo Alto, CA
3. **Harvard** 📚 - Cambridge, MA
4. **UC Berkeley** 🐻 - Berkeley, CA
5. **Yale** 🏫 - New Haven, CT

---

## 📂 Key Files Location

| File | Purpose | Location |
|------|---------|----------|
| Navigation Setup | Main app structure | `App.js` |
| College Selection | Pick college screen | `screens/CollegeSelectionScreen.js` |
| College Data | Colleges & students data | `data/colleges.js` |
| State Management | College context | `context/CollegeContext.js` |
| Configuration | App settings | `config/app-config.js` |
| Helper Functions | 30+ utilities | `utils/helpers.js` |
| Custom Hooks | 8+ custom hooks | `hooks/useCustomHooks.js` |

---

## ⚙️ Customization Quick Tips

### Add a New College
```javascript
// In data/colleges.js
{
  id: '6',
  name: 'Your College',
  shortName: 'Full Name',
  location: 'City, State',
  students: 1500,
  events: 10,
  logo: '🎓',
  color: '#FF5733',
}
```

### Change App Colors
Edit in `app-config.js`:
```javascript
colors: {
  primary: '#2196F3',      // Change these
  secondary: '#4CAF50',
  danger: '#FF6B6B',
}
```

### Add New Screen
1. Create file in `screens/YourScreen.js`
2. Add to navigation in `App.js`
3. Import and add to Stack/Tab Navigator

---

## 🔧 Available Commands

```bash
# Development
npm install              # Install dependencies
npm run android          # Run on Android emulator
npm run web              # Preview on web
npm run ios              # Run on iOS (macOS only)

# Production
eas build --platform android    # Build APK
npm audit                       # Check vulnerabilities
npm audit fix                   # Fix vulnerabilities
```

---

## 💡 Common Tasks

### Search Students
- Go to Home → Students
- Type name or major in search box
- Results filter in real-time

### View Events
- Go to Home → Events
- See date, time, location
- Tap RSVP to register

### Message Someone
- Go to Messages tab
- Tap a conversation or + button
- Type and send message

### Update Profile
- Go to Profile tab
- View your information
- Tap "Edit Profile" in settings

---

## 🐛 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| App won't start | `npm install && npm cache clean --force` |
| Port already in use | `npx expo start --clear` |
| Navigation broken | Verify all screens exported in `App.js` |
| Styles not showing | Ensure `StyleSheet` imported |
| Can't find module | Run `npm install` again |

---

## 📚 File Structure Quick View

```
campus_connect/
├── App.js                    ← Navigation setup
├── screens/                  ← 6 screens here
├── context/                  ← State management
├── data/                     ← Mock data & colleges
├── config/                   ← App configuration
├── utils/                    ← Helper functions
├── hooks/                    ← Custom React hooks
└── 📖 Documentation files
```

---

## 🎯 Feature Checklist

- ✅ College selection
- ✅ Student directory with search
- ✅ Events listing with RSVP
- ✅ Messaging interface
- ✅ User profile
- ✅ Tab navigation
- ✅ Stack navigation
- ✅ Context state management
- ✅ Mock data for 5 colleges
- ✅ Responsive design

---

## 🔌 API Ready Points

### StudentsScreen.js
```javascript
// Replace this:
const students = MOCK_STUDENTS[collegeId];

// With API call:
const [students] = useFetch(`/api/students/${collegeId}`);
```

### EventsScreen.js
```javascript
// Similar pattern for events
const [events] = useFetch(`/api/events/${collegeId}`);
```

---

## 🎨 UI Components Used

- `View` - Container
- `Text` - Text display
- `ScrollView` - Scrollable content
- `FlatList` - Efficient lists
- `TouchableOpacity` - Buttons
- `TextInput` - Text fields
- `StyleSheet` - Styling

---

## 🔐 Next Steps for Production

1. Add user authentication
2. Connect backend API
3. Implement real database
4. Add push notifications
5. Set up error handling
6. Configure CI/CD
7. Build & test thoroughly
8. Deploy to Play Store

---

## 📖 Documentation Files

```
README.md                   ← Quick start (start here)
SETUP_GUIDE.md             ← Detailed setup guide
PROJECT_STRUCTURE.md       ← Complete reference
CREATION_SUMMARY.md        ← What was created
QUICK_REFERENCE.md         ← This file
```

---

## 🆘 Need Help?

1. **Crashes on startup?** → Check `App.js` imports
2. **Can't find screens?** → Run `npm install`
3. **Navigation errors?** → Verify all routes in `App.js`
4. **Data not showing?** → Check `data/colleges.js`
5. **Still stuck?** → See `SETUP_GUIDE.md`

---

## ⏱️ Quick Start (30 seconds)

```bash
cd campus_connect
npx expo start
# Open Expo Go on phone and scan QR code
# App loads! 🎉
```

---

## 📱 Device Testing

### Emulator
```bash
npm run android
# Or use Android Studio emulator
```

### Physical Device
```bash
npx expo start
# Scan QR code with Expo Go app
```

### Web (Testing Only)
```bash
npm run web
# Opens http://localhost:8081
```

---

## 🚀 Ready to Go!

Your app is fully functional and ready to:
- ✅ Run on Android
- ✅ Test features
- ✅ Customize & extend
- ✅ Connect to backend
- ✅ Deploy to production

**Start with:** `npx expo start`

---

**Questions?** Check the full documentation in the project files or visit [Expo Docs](https://docs.expo.dev)

**Happy coding! 🎉**
