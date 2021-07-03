const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')

dotenv.config();
// Allows use to send json files
app.use(express.json())

// connects to mongoDb url 
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log('Connected to mongoDb'))
.catch((err) => console.log(err));

// Let express know what route we are using for authentication
app.use('/api/auth', authRoute)

app.listen('5000', () => {
    console.log('Backend is up');
})