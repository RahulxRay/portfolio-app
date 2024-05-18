const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const path = require('path');
const uri = "mongodb+srv://Ray:123@analysis.5ti03o2.mongodb.net/?retryWrites=true&w=majority&appName=analysis";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    app.get('/api/data', async (req, res) => {
      try {
        const collection = client.db("stock_data").collection("analysis");
        const data = await collection.find({}).toArray();
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching data");
      }
    });

    // Serve static files from the React app's build directory
    app.use(express.static(path.join(__dirname, '..', 'build')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

  } finally {
    // Comment out client.close() to keep the connection open while the server is running
    // await client.close();
  }
}

run().catch(console.dir);
