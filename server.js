const express = require("express");
const path = require("path");

const app = express();

// Middleware to read form values
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// To serve HTML/CSS/JS files from "public"
app.use(express.static(path.join(__dirname, "public")));

// Handle login
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Simple dummy check
    if (email === "test@example.com" && password === "123456") {
        return res.send(`
            <h2 style="font-family: Arial; text-align:center; margin-top:50px;">
                Login Successful 🎉<br><br>
                Welcome ${email}!
            </h2>
        `);
    } else {
        return res.send(`
            <h2 style="font-family: Arial; text-align:center; margin-top:50px; color:red;">
                Login Failed ❌<br><br>
                Wrong email or password.
            </h2>
            <div style="text-align:center; margin-top:20px;">
                <a href="/" style="font-size:20px;">Go Back</a>
            </div>
        `);
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));