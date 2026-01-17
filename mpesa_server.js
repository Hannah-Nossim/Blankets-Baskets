// Simple Express server for STK Push demo
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Dummy endpoint
app.post("/stkpush", (req, res) => {
    return res.json({
        success: true,
        message: "STK Push simulated. Integrate Daraja API for real payment."
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
