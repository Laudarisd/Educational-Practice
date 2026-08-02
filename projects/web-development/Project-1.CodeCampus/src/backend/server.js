const express = require('express');
const mysql = require('mysql')
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


//MySQL connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Laudarisd1989@@',
    database: 'learninghub',
});

//connect to mysql

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected');
}
);
// Signup Endpoint
app.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName, phoneNumber } = req.body;
    if (!(email && password)) {
        return res.status(400).send('Email and password are required');
    }

    // Check if user already exists
    db.query('SELECT * FROM SignUp_table WHERE email = ?', [email], async (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            return res.status(409).send('User already exists');
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert new user with current timestamp
            db.query('INSERT INTO SignUp_table SET ?', 
        { 
            email: email, 
            password: hashedPassword,
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber
        }, (error, results) => {
            // Handle the response...
            if (error) throw error;
            return res.status(201).send('User created');
            });
            //Print signup information if user signs up
            console.log("User signed up");
            console.log("First Name: " + firstName);
            console.log("Last Name: " + lastName);
            console.log("Email: " + email);
            console.log("Phone Number: " + phoneNumber);
            //print time
            const signupTime = new Date().toLocaleString(); // This will print in the server's local time format

            console.log("Signup time: " + signupTime);
            console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
            

        }
    });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM SignUp_table WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.error('Database error:', error);
            return res.status(500).send('Internal server error');
        }

        if (results.length > 0) {
            const user = results[0];
            const isValidPassword = await bcrypt.compare(password, user.password);

            // Log login attempt
            const logLoginAttempt = (success) => {
                db.query('INSERT INTO LogIn_table SET ?', 
                    { email: email, success: success, timestamp: new Date() },
                    (error) => {
                        if (error) {
                            console.error('Database error:', error);
                            // You might want to handle this error differently
                        }
                    }
                );
            };

            if (isValidPassword) {
                logLoginAttempt(true);
                res.status(200).send('Login successful');
                console.log("User is logged in")
                console.log("Email: " + email);
                console.log("Password: " + password);
                const loginTime = new Date().toLocaleString(); // This will print in the server's local time format
                console.log("Login time: " + loginTime);
                console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
            } else {
                logLoginAttempt(false);
                res.status(401).send('Invalid credentials');
                console.log("User is logged in")
                console.log("Email: " + email);
                console.log("Password: " + password);
                const loginTime = new Date().toLocaleString(); // This will print in the server's local time format
                console.log("Login time: " + loginTime);
                console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
            }
        } else {
            // User not found, log failed login attempt
            db.query('INSERT INTO LogIn_table SET ?', 
                { email: email, success: false, timestamp: new Date() },
                (error) => {
                    if (error) {
                        console.error('Database error:', error);
                        // You might want to handle this error differently
                    }
                }
            );
            res.status(404).send('User not found');
        
            }
        console.log("User is logged in")
        console.log("Email: " + email);
        console.log("Password: " + password);
        const loginTime = new Date().toLocaleString(); // This will print in the server's local time format
        console.log("Login time: " + loginTime);
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));