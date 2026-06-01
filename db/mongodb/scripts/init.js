// Initialize a MongoDB database and seed it with data.

// Create User
db.createUser({
  user: 'test_db',
  pwd: 'local',
  roles: [{ role: 'readWrite', db: 'test_db' }],
});

// Switch to the application database
db = db.getSiblingDB('test_db');

// Execute seeding script
load('/app/scripts/db/seed.js');
