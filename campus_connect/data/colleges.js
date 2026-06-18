export const COLLEGES = [
  {
    id: '1',
    name: 'MIT',
    shortName: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA',
    students: 1045,
    events: 12,
    logo: '🏛️',
    color: '#A31F34',
  },
  {
    id: '2',
    name: 'Stanford',
    shortName: 'Stanford University',
    location: 'Palo Alto, CA',
    students: 1842,
    events: 18,
    logo: '🌲',
    color: '#8C1515',
  },
  {
    id: '3',
    name: 'Harvard',
    shortName: 'Harvard University',
    location: 'Cambridge, MA',
    students: 2100,
    events: 20,
    logo: '📚',
    color: '#C41E3A',
  },
  {
    id: '4',
    name: 'UC Berkeley',
    shortName: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    students: 1600,
    events: 15,
    logo: '🐻',
    color: '#003262',
  },
  {
    id: '5',
    name: 'Yale',
    shortName: 'Yale University',
    location: 'New Haven, CT',
    students: 1250,
    events: 14,
    logo: '🏫',
    color: '#00356B',
  },
];

export const MOCK_STUDENTS = {
  '1': [
    { id: '1', name: 'Alice Johnson', year: 'Junior', major: 'Computer Science' },
    { id: '2', name: 'Bob Smith', year: 'Senior', major: 'Physics' },
    { id: '3', name: 'Carol White', year: 'Sophomore', major: 'Engineering' },
    { id: '4', name: 'David Brown', year: 'Freshman', major: 'Mathematics' },
  ],
  '2': [
    { id: '1', name: 'Emma Davis', year: 'Junior', major: 'Computer Science' },
    { id: '2', name: 'Frank Miller', year: 'Senior', major: 'Business' },
    { id: '3', name: 'Grace Lee', year: 'Sophomore', major: 'Economics' },
  ],
  '3': [
    { id: '1', name: 'Henry Wilson', year: 'Junior', major: 'Law' },
    { id: '2', name: 'Iris Martinez', year: 'Freshman', major: 'Pre-Med' },
    { id: '3', name: 'Jack Taylor', year: 'Senior', major: 'History' },
  ],
  '4': [
    { id: '1', name: 'Karen Anderson', year: 'Sophomore', major: 'Engineering' },
    { id: '2', name: 'Leo Thomas', year: 'Junior', major: 'Physics' },
  ],
  '5': [
    { id: '1', name: 'Maria Garcia', year: 'Senior', major: 'Liberal Arts' },
    { id: '2', name: 'Noah Jackson', year: 'Freshman', major: 'Music' },
    { id: '3', name: 'Olivia White', year: 'Junior', major: 'Drama' },
  ],
};

export const MOCK_EVENTS = {
  '1': [
    { id: '1', title: 'Tech Talk: AI in 2024', date: '2024-06-25', time: '2:00 PM', location: 'Building 4', attendees: 45 },
    { id: '2', title: 'Hackathon', date: '2024-07-01', time: '9:00 AM', location: 'Campus Center', attendees: 200 },
    { id: '3', title: 'Sports Day', date: '2024-06-30', time: '10:00 AM', location: 'Athletic Field', attendees: 150 },
  ],
  '2': [
    { id: '1', title: 'Career Fair', date: '2024-06-28', time: '1:00 PM', location: 'Main Hall', attendees: 300 },
    { id: '2', title: 'Alumni Meet', date: '2024-07-05', time: '6:00 PM', location: 'Student Center', attendees: 80 },
  ],
  '3': [
    { id: '1', title: 'Graduation Ceremony', date: '2024-06-15', time: '10:00 AM', location: 'Stadium', attendees: 5000 },
    { id: '2', title: 'Welcome Week', date: '2024-09-01', time: 'All Day', location: 'Campus', attendees: 2000 },
  ],
  '4': [
    { id: '1', title: 'Workshop: Research Methods', date: '2024-06-22', time: '3:00 PM', location: 'Lab Building', attendees: 60 },
  ],
  '5': [
    { id: '1', title: 'Arts Festival', date: '2024-07-10', time: '5:00 PM', location: 'Arts Center', attendees: 500 },
  ],
};
