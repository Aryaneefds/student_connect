# 🎓 Student Connect

A comprehensive React Native + Expo-based platform for connecting college students, sharing campus events, and building vibrant campus communities.

---

## 📋 Overview

**Student Connect** is a cross-platform mobile application designed to help schools and colleges facilitate student connections, event management, and community building. The app allows students to select their college and access college-specific features including student directories, event calendars, messaging systems, and user profiles.

### Mission
To create a unified platform where college students can connect with peers, discover campus events, and engage with their college community through an intuitive mobile experience.

---

## 📱 What's Included

### Campus Connect Mobile App
A fully-functional React Native + Expo Android application with:
- ✅ **6 Complete Screens** - College selection, dashboard, students, events, messages, profile
- ✅ **College-Specific Features** - Each college has separate data and customization
- ✅ **5 Pre-loaded Colleges** - MIT, Stanford, Harvard, UC Berkeley, Yale
- ✅ **Complete Navigation** - Stack + Tab navigation with Context API state management
- ✅ **Mock Data System** - Ready for API integration
- ✅ **Production-Ready Code** - Scalable, maintainable architecture

**Location:** `/campus_connect/`

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Android Studio (for APK builds)
- Expo CLI (optional)

### Installation

```bash
# Navigate to the app
cd campus_connect

# Install dependencies
npm install

# Run the app
npx expo start

# Scan QR code with Expo Go app
```

### Alternative: Android Emulator
```bash
cd campus_connect
npm run android
```

---

## 📁 Repository Structure

```
student_connect/
├── README.md                           # This file
├── campus_connect/                     # Main React Native app
│   ├── App.js                          # Navigation setup
│   ├── app.json                        # Expo configuration
│   ├── package.json                    # Dependencies
│   │
│   ├── screens/                        # 6 screen components
│   │   ├── CollegeSelectionScreen.js
│   │   ├── HomeScreen.js
│   │   ├── StudentsScreen.js
│   │   ├── EventsScreen.js
│   │   ├── MessagesScreen.js
│   │   └── ProfileScreen.js
│   │
│   ├── context/                        # State management
│   │   └── CollegeContext.js
│   │
│   ├── data/                           # Mock data
│   │   └── colleges.js
│   │
│   ├── config/                         # Configuration
│   │   └── app-config.js
│   │
│   ├── utils/                          # Helper functions
│   │   └── helpers.js
│   │
│   ├── hooks/                          # Custom React hooks
│   │   └── useCustomHooks.js
│   │
│   └── 📚 Documentation
│       ├── README.md
│       ├── SETUP_GUIDE.md
│       ├── PROJECT_STRUCTURE.md
│       ├── QUICK_REFERENCE.md
│       └── CREATION_SUMMARY.md
│
└── assets/                             # Shared assets (if any)
```

---

## 🎯 Core Features

### 🏫 College Selection
- Browse available colleges
- View statistics (students, events)
- One-tap selection with navigation

### 🏠 College Dashboard
- Personalized college home screen
- Quick statistics display
- Access to main features
- College announcements
- Change college option

### 👥 Student Directory
- Search students by name or major
- View student details (year, major)
- Direct messaging capability
- College-specific student lists

### 📅 Events Management
- Upcoming campus events listing
- Event details (date, time, location)
- Attendee tracking
- RSVP functionality

### 💬 Messaging
- Real-time conversation list
- Unread message indicators
- Search conversations
- Direct messaging with students

### 👤 User Profile
- Personal profile information
- Activity statistics
- Settings and preferences
- Account management

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React Native | Latest | Mobile framework |
| Expo | SDK 56 | Build & deployment platform |
| React Navigation | v6 | App navigation (Stack + Tabs) |
| Context API | - | State management |
| JavaScript | ES6+ | Programming language |
| React Hooks | - | Component logic |

---

## 📊 Pre-loaded Data

### 5 Sample Colleges

| College | Location | Students | Events |
|---------|----------|----------|--------|
| MIT | Cambridge, MA | 1,045 | 12 |
| Stanford | Palo Alto, CA | 1,842 | 18 |
| Harvard | Cambridge, MA | 2,100 | 20 |
| UC Berkeley | Berkeley, CA | 1,600 | 15 |
| Yale | New Haven, CT | 1,250 | 14 |

### Additional Data
- 3-4 sample students per college
- 2-4 events per college
- 4 mock conversations
- Complete user profile

---

## 🔄 App Navigation Flow

```
App Launch
    ↓
CollegeSelectionScreen
    ↓ (Select College)
    ↓
Main Tab Navigator
├─ Home Tab
│   └─ Home Screen
│       ├─ → Students Screen
│       └─ → Events Screen
├─ Messages Tab
│   └─ Messages Screen
└─ Profile Tab
    └─ Profile Screen
```

---

## 💻 Development Guide

### Running Locally

**Development Mode:**
```bash
cd campus_connect
npx expo start
# Scan QR code with Expo Go app
```

**Web Preview:**
```bash
npm run web
```

**Android Emulator:**
```bash
npm run android
```

**iOS Simulator (macOS):**
```bash
npm run ios
```

### Building for Production

**Android APK:**
```bash
cd campus_connect
eas build --platform android
```

**Android App Bundle (Play Store):**
```bash
eas build --platform android --format aab
```

---

## 🔌 API Integration

The app is structured for easy API integration. Replace mock data with API calls:

### Example: Students Screen
```javascript
// Replace mock data
const students = MOCK_STUDENTS[collegeId];

// With API call
const { data: students } = useFetch(`/api/students/${collegeId}`);
```

### Backend Requirements
- REST API endpoints for:
  - `/api/colleges` - List all colleges
  - `/api/students/{collegeId}` - Get students by college
  - `/api/events/{collegeId}` - Get events by college
  - `/api/messages` - Messaging system
  - `/api/auth` - User authentication

---

## 🎨 Customization

### Add a New College
Edit `campus_connect/data/colleges.js`:
```javascript
{
  id: '6',
  name: 'Your College',
  shortName: 'Full College Name',
  location: 'City, State',
  students: 1500,
  events: 12,
  logo: '🎓',
  color: '#FF5733',
}
```

### Update App Configuration
Edit `campus_connect/config/app-config.js`:
```javascript
colors: {
  primary: '#2196F3',
  secondary: '#4CAF50',
  danger: '#FF6B6B',
}
```

### Add New Features
1. Create new screen in `campus_connect/screens/`
2. Add to navigation in `campus_connect/App.js`
3. Style using React Native StyleSheet

---

## 📚 Documentation

Comprehensive documentation is included in the app:

| Document | Purpose |
|----------|---------|
| **README.md** | Quick start guide |
| **SETUP_GUIDE.md** | Detailed setup & troubleshooting |
| **PROJECT_STRUCTURE.md** | Complete project reference |
| **QUICK_REFERENCE.md** | Quick lookup guide |
| **CREATION_SUMMARY.md** | Components overview |

Access them in the `campus_connect/` directory.

---

## 🔐 Security Considerations

### Current State
- Mock data with demo colleges
- No authentication required for demo

### For Production
- [ ] Implement user authentication (JWT)
- [ ] Add API key management
- [ ] Enable HTTPS for all API calls
- [ ] Implement data encryption
- [ ] Add input validation & sanitization
- [ ] Set up rate limiting
- [ ] Configure CORS properly
- [ ] Implement secure storage

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] College selection works
- [ ] Navigation between screens works
- [ ] Student search filters correctly
- [ ] Events display properly
- [ ] Messages can be sent
- [ ] Profile information displays
- [ ] Tab navigation is smooth
- [ ] Back button navigation works

### Recommended Testing Tools
- Expo Go app (live testing)
- Android Studio Emulator
- Physical Android device
- Postman (for API testing)

---

## 📦 Dependencies

### Main Dependencies
```json
{
  "expo": "^56.0.0",
  "react": "^18.2.0",
  "react-native": "^0.73.0",
  "@react-navigation/native": "^6.x",
  "@react-navigation/bottom-tabs": "^6.x",
  "@react-navigation/stack": "^6.x"
}
```

All dependencies are listed in `campus_connect/package.json`

---

## 🚀 Deployment

### Android Play Store
1. Build AAB file: `eas build --platform android --format aab`
2. Sign with keystore
3. Upload to Google Play Console
4. Set up store listing and metadata
5. Submit for review

### Continuous Integration
Consider setting up:
- GitHub Actions for automated builds
- Automated testing pipeline
- Release management
- Version tracking

---

## 📈 Future Enhancements

### Phase 2
- [ ] User authentication system
- [ ] Real-time notifications
- [ ] Image sharing in messages
- [ ] Event calendar view
- [ ] Backend API integration

### Phase 3
- [ ] In-app video/audio calls
- [ ] College clubs directory
- [ ] Study groups feature
- [ ] Marketplace for used items
- [ ] Admin dashboard

### Phase 4
- [ ] Machine learning recommendations
- [ ] Advanced search filters
- [ ] Social features (followers, likes)
- [ ] Content moderation system
- [ ] Analytics dashboard

---

## 🆘 Troubleshooting

### Common Issues

**App won't start**
```bash
npm install
npm cache clean --force
npx expo start --clear
```

**Port already in use**
```bash
npx expo start --clear
```

**Can't find modules**
```bash
rm -rf node_modules
npm install
```

**Navigation errors**
- Verify all screens are exported in `App.js`
- Check route names match navigation setup
- Ensure parameters are passed correctly

### Debug Mode
```bash
npx expo start
# Press 'd' for debug menu
# Select 'Open JavaScript Debugger'
```

---

## 📞 Support & Contribution

### Getting Help
1. Check the documentation in `campus_connect/`
2. Review [Expo Documentation](https://docs.expo.dev)
3. Visit [React Native Docs](https://reactnative.dev)
4. Check [React Navigation Guide](https://reactnavigation.org)

### Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

### Reporting Issues
Please include:
- Description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Device and OS version

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Team

**Built with ❤️ for the college community**

### Key Contributors
- Project Lead: Aryaneefds
- Development: Full-stack team

---

## 🎯 Project Status

| Component | Status |
|-----------|--------|
| Core App | ✅ Complete |
| Navigation | ✅ Complete |
| Screens | ✅ Complete (6/6) |
| Mock Data | ✅ Complete |
| Documentation | ✅ Complete |
| Testing | 🟡 In Progress |
| API Integration | ⏳ Ready |
| Production Build | ⏳ Ready |

---

## 📋 Quick Links

- **App Directory:** `./campus_connect/`
- **App README:** `./campus_connect/README.md`
- **Setup Guide:** `./campus_connect/SETUP_GUIDE.md`
- **Quick Reference:** `./campus_connect/QUICK_REFERENCE.md`
- **Expo Docs:** https://docs.expo.dev
- **React Native Docs:** https://reactnative.dev

---

## 🎓 Getting Started (30 seconds)

```bash
cd campus_connect
npm install
npx expo start
# Scan QR code with Expo Go app
# App loads! 🎉
```

---

**Happy coding! 🚀**

For detailed information about the Campus Connect app, navigate to the `campus_connect` directory and check the README.md file.

---

*Last Updated: June 18, 2026 | Version: 1.0.0*