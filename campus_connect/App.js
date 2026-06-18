import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CollegeProvider } from './context/CollegeContext';
import CollegeSelectionScreen from './screens/CollegeSelectionScreen';
import HomeScreen from './screens/HomeScreen';
import StudentsScreen from './screens/StudentsScreen';
import EventsScreen from './screens/EventsScreen';
import MessagesScreen from './screens/MessagesScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CollegeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#333',
      }}
    >
      <Stack.Screen
        name="CollegeHome"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Students"
        component={StudentsScreen}
        options={{
          title: 'Students',
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name="Events"
        component={EventsScreen}
        options={{
          title: 'Events',
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
}

function MessagesStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white',
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="MessagesList"
        component={MessagesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9C27B0',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white',
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'My Profile',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function CollegeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon = '🏠';
          if (route.name === 'Home') icon = '🏠';
          else if (route.name === 'Messages') icon = '💬';
          else if (route.name === 'Profile') icon = '👤';

          return <Text style={{ fontSize: 20 }}>{icon}</Text>;
        },
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#999',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          paddingBottom: 8,
          paddingTop: 8,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={CollegeStackNavigator}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStackNavigator}
        options={{
          title: 'Messages',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="CollegeSelection"
        component={CollegeSelectionScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="Main"
        component={CollegeTabNavigator}
        options={{
          animationEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <CollegeProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </CollegeProvider>
  );
}

// Import Text for tab icons
import { Text } from 'react-native';
