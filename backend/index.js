const express = require('express');
const imageUpload = require('./app/library/multer');
var cors = require('cors')
const app = express();
const mongoose = require('mongoose');

// MongoDB connection string
const uri = 'mongodb+srv://rajiv:TOS9f6DqcXCBjLsl@cluster0.zjjjg.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0';

// Connecting to MongoDB
mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB successfully!');
        // Start the server only after a successful DB connection
        app.listen(5000, () => {
            console.log('Backend is running on port 5000');
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

// Specific origin ko allow karein

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const adminCredentials = {
    username: 'dpsadmin',
    password: 'adminDPSJOD'
};

// Add TC Incharge credentials
const tcInchargeCredentials = {
    username: 'tcincharge',
    password: 'tcDPSJOD'
};


app.get('', (request, response) => {
    response.send('Server is working fine.');
});

app.post('/image-upload', imageUpload.upload, (request, response) => {
    response.send("Image Upload");
});

app.post('/multiple-image-upload', imageUpload.multipleUpload, (request, response) => {
    response.send("Image Upload");
})

app.post('/login', (request, response) => {
    const { username, password } = request.body;

    if (!username || !password) {
        return response.status(400).json({ success: false, message: 'Username and password are required' });
    }

    if (username === adminCredentials.username && password === adminCredentials.password) {
        return response.json({ success: true })
    } else {
        return response.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.post('/tc-login', (request, response) => {
    const { username, password } = request.body;

    if (!username || !password) {
        return response.status(400).json({ success: false, message: 'Username and password are required' });
    }

    if (username === tcInchargeCredentials.username && password === tcInchargeCredentials.password) {
        return response.json({ success: true });
    } else {
        return response.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.use('/uploads', express.static('uploads'));

require('./app/routes/enquiry.route')(app);
require('./app/routes/newsUpdate.route')(app);
require('./app/routes/alumni.route')(app);
require('./app/routes/tc.route')(app);
require('./app/routes/newsletter.route')(app);
require('./app/routes/schoolNews.route')(app);
require('./app/routes/download.route')(app);
require('./app/routes/event.route')(app);
require('./app/routes/achievement.route')(app);
require('./app/routes/faculty.route')(app);
require('./app/routes/assembly.route')(app);
require('./app/routes/studentCouncil.route')(app);
require('./app/routes/popup.route')(app);
require('./app/routes/infrastructure.route')(app);

app.use((request, response, next) => {
    var arr = {
        'status': false,
        'message': 'Something went wrong!!'
    };

    response.status(404).send(arr);
})