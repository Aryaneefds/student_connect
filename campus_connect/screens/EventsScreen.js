import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MOCK_EVENTS } from '../data/colleges';

export default function EventsScreen({ route }) {
  const { collegeId } = route.params;
  const events = MOCK_EVENTS[collegeId] || [];

  const EventCard = ({ event }) => (
    <TouchableOpacity style={styles.eventCard} activeOpacity={0.7}>
      <View style={styles.dateBox}>
        <Text style={styles.dateDay}>{new Date(event.date).getDate()}</Text>
        <Text style={styles.dateMonth}>
          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
        </Text>
      </View>

      <View style={styles.eventInfo}>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <View style={styles.eventMeta}>
          <Text style={styles.eventTime}>⏰ {event.time}</Text>
        </View>
        <View style={styles.eventMeta}>
          <Text style={styles.eventLocation}>📍 {event.location}</Text>
        </View>
        <View style={styles.eventMeta}>
          <Text style={styles.eventAttendees}>👥 {event.attendees} attending</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.rsvpBtn}>
        <Text style={styles.rsvpBtnText}>RSVP</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Campus Events</Text>
        <Text style={styles.subtitle}>{events.length} upcoming events</Text>
      </View>

      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventCard event={item} />}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No events scheduled</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: 20,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dateBox: {
    width: 56,
    height: 56,
    backgroundColor: '#FF9800',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  dateDay: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  dateMonth: {
    fontSize: 11,
    color: 'white',
    marginTop: 2,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  eventMeta: {
    marginBottom: 4,
  },
  eventTime: {
    fontSize: 12,
    color: '#666',
  },
  eventLocation: {
    fontSize: 12,
    color: '#666',
  },
  eventAttendees: {
    fontSize: 12,
    color: '#666',
  },
  rsvpBtn: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
  rsvpBtnText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  emptyContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});
