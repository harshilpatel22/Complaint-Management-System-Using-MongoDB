// Load modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();
const port = 1337;

// MongoDB Atlas connection
const uri = 'mongodb+srv://Cluster05946:bV5GZV9xSkdx@cluster05946.v4sbj.mongodb.net/complaintsDB?retryWrites=true&w=majority';



// MongoDB Atlas connection
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));


// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware for session management
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Define Mongoose schema and model for complaints
const complaintSchema = new mongoose.Schema({
    registrationId: { type: String, required: true },
    type: { type: String, required: true },
    complaintText: { type: String, required: true },
    complaintNumber: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Complaint = mongoose.model('Complaint', complaintSchema);

// Define Mongoose schema and model for users
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Route for handling signup
app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.send('User registered successfully! You can now <a href="/login.html">log in</a>.');
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Failed to register user.');
    }
});

// Route for handling login
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (user && await bcrypt.compare(password, user.password)) {
            req.session.user = user;
            res.redirect('/');
        } else {
            res.status(401).send('Invalid username or password.');
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).send('Failed to log in.');
    }
});

// Middleware to protect routes
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login.html');
    }
}

// Protect the main complaint submission route
app.get('/', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle form submissions
app.post('/submit-complaint', isAuthenticated, async (req, res) => {
    try {
        console.log('Received data:', req.body);
        const { registrationId, type, complaintText } = req.body;
        const complaintNumber = `C-${Date.now()}`;

        const newComplaint = new Complaint({ registrationId, type, complaintText, complaintNumber });
        await newComplaint.save();

        res.status(201).send(`Complaint submitted successfully! Your complaint number is: ${complaintNumber}`);
    } catch (err) {
        console.error('Error saving complaint:', err);
        res.status(500).send('Failed to submit complaint');
    }
});

// Start the server
app.listen(port, () => {
    console.log('Server is active on port ' + port);
});
