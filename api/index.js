const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
const multer = require('multer')
const path = require('path')
dotenv.config();
// Allows use to send json files
app.use(express.json())

app.use('/images', express.static(path.join(__dirname, '/images')))

// connects to mongoDb url 
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
}).then(console.log('Connected to mongoDb'))
    .catch((err) => console.log(err));

// Takes out file and saves it inside of images folder
const storage = multer.diskStorage({
    // cb = callback function takes care of errors
    destination: (req, file, cb) => {
        // 2nd param is destination
        cb(null, 'images')
        // name that is being provided
    }, filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

// Sets our storage so we can upload
const upload = multer({storage:storage})
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('file has been uploaded')
})

// Let express know what route we are using for authentication
app.use('/api/auth', authRoute)

app.use('/api/users', userRoute)

app.use('/api/posts', postRoute)

app.use('/api/categories', categoryRoute)

app.listen('5000', () => {
    console.log('Backend is up');
})