const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const uri = "mongodb+srv://Ray:123@analysis.5ti03o2.mongodb.net/?retryWrites=true&w=majority&appName=analysis";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const app = express();
const port = 3000;

app.use(cors());

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    // Define the root endpoint
    app.get('/', (req, res) => {
      res.send('Hello, World! This is the root endpoint.');
    });

    // Define the API endpoint
    app.get('/data', async (req, res) => {
      try {
        const collection = client.db("stock_data").collection("analysis");
        const data = await collection.find({}).toArray();
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching data");
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
