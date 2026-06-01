// Seed the local development database with data.

// Create Collection
db.createCollection('test_data');

// Seed
db.test_data.insertOne({ id: 'userid', name: 'Gopher', email: 'hello@gopher.com' });
