import { MongoClient } from "mongodb";

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6";
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the database
    const database = client.db('fruitsDB');
    const fruits = database.collection('fruit');

    // Insert documents
    await fruits.insertMany([
      { name: 'Apple', score: 8, review: "Great Fruit" },
      { name: 'Orange', score: 6, review: "Kinda sour" },
      { name: 'Banana', score: 9, review: "Great Stuff!" }
    ]);

    // Query for a fruit with the name 'Orange'
    // const query = { name: 'Orange' };
    const fruit = await fruits.find().toArray();

    // Log the result
    console.log(fruit);
  } catch (err) {
    console.error(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
