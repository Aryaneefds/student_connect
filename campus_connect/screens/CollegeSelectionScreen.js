import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { CollegeContext } from '../context/CollegeContext';
import { COLLEGES } from '../data/colleges';

export default function CollegeSelectionScreen({ navigation }) {
  const { setSelectedCollege } = useContext(CollegeContext);

  const handleSelectCollege = (college) => {
    setSelectedCollege(college);
    navigation.navigate('CollegeHome', { college });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>Select Your College</Text>

      <ScrollView style={styles.collegeList}>
        {COLLEGES.map((college) => (
          <TouchableOpacity
            key={college.id}
            style={[styles.collegeCard, { borderLeftColor: college.color }]}
            onPress={() => handleSelectCollege(college)}
            activeOpacity={0.7}
          >
            <Text style={styles.collegeLogo}>{college.logo}</Text>
            <View style={styles.collegeInfo}>
              <Text style={styles.collegeName}>{college.name}</Text>
              <Text style={styles.collegeDetail}>{college.shortName}</Text>
              <Text style={styles.collegeDetail}>{college.location}</Text>
              <View style={styles.stats}>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>{college.students}</Text>
                  <Text style={styles.statLabel}>Students</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>{college.events}</Text>
                  <Text style={styles.statLabel}>Events</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  collegeList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  collegeCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  collegeLogo: {
    fontSize: 40,
    marginRight: 16,
    marginTop: 8,
  },
  collegeInfo: {
    flex: 1,
  },
  collegeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  collegeDetail: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  stats: {
    flexDirection: 'row',
    marginTop: 8,
  },
  stat: {
    marginRight: 20,
  },
  statValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 11,
    color: '#999',
  },
});
