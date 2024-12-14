const mongoose = require('mongoose')

const mongoURI ='mongodb+srv://rajiv:TOS9f6DqcXCBjLsl@cluster0.zjjjg.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    serverSelectionTimeoutMS: 30000, // Increase timeout
    bufferTimeoutMS: 30000, // Increase buffer timeout
})
.then(() => console.log('MongoDB connected successfully!'))
.catch((err) => console.error('MongoDB connection error:', err));

// mongodb+srv://rajiv:TOS9f6DqcXCBjLsl@cluster0.zjjjg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0