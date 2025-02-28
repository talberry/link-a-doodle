import express from 'express';
import dotenv from 'dotenv';
import urlRoutes from './routes/urlRoutes.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(express.json());

app.use("/api/url", urlRoutes);

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log("Database connection is ready and " 
        + `server running on port ${PORT}`);
    })
})
.catch((error) => {
    console.log("An error occurred while connecting to the database: " + error);    
})

