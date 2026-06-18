import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { CollegeContext } from '../context/CollegeContext';

export default function HomeScreen({ navigation, route }) {
  const { selectedCollege } = useContext(CollegeContext);
  const college = selectedCollege || route.params?.college;

  if (!college) {
    return (
      <View style={styles.container}>
        <Text>No college selected</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: college.color }]}>
        <Text style={styles.logo}>{college.logo}</Text>
        <Text style={styles.collegeName}>{college.name}</Text>
        <Text style={styles.collegeSubtitle}>{college.shortName}</Text>
        <Text style={styles.location}>📍 {college.location}</Text>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{college.students}</Text>
          <Text style={styles.statText}>Students</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{college.events}</Text>
          <Text style={styles.statText}>Events</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>150+</Text>
          <Text style={styles.statText}>Clubs</Text>
        </View>
      </View>

      {/* Quick Access Menu */}
      <Text style={styles.sectionTitle}>Quick Access</Text>
      <View style={styles.menuGrid}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Students', { collegeId: college.id })}
        >
          <Text style={styles.menuIcon}>👥</Text>
          <Text style={styles.menuText}>Students</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Events', { collegeId: college.id })}
        >
          <Text style={styles.menuIcon}>📅</Text>
          <Text style={styles.menuText}>Events</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Messages')}
        >
          <Text style={styles.menuIcon}>💬</Text>
          <Text style={styles.menuText}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.menuIcon}>👤</Text>
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Announcements */}
      <Text style={styles.sectionTitle}>Latest Announcements</Text>
      <View style={styles.announcementCard}>
        <Text style={styles.announcementDate}>Today</Text>
        <Text style={styles.announcementTitle}>Welcome to {college.name}!</Text>
        <Text style={styles.announcementText}>
          Connect with students, explore events, and make new friends in your college community.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.changeCollegeBtn}
        onPress={() => navigation.navigate('CollegeSelection')}
      >
        <Text style={styles.changeCollegeBtnText}>Change College</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  logo: {
    fontSize: 60,
    marginBottom: 10,
  },
  collegeName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  collegeSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 8,
  },
  location: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: -20,
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  statText: {
    fontSize: 12,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 16,
    marginBottom: 12,
    marginTop: 8,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  menuItem: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginRight: '4%',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  menuText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  announcementCard: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  announcementDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  announcementText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  changeCollegeBtn: {
    backgroundColor: '#FF6B6B',
    marginHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  changeCollegeBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
