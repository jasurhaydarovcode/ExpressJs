const express = require('express');

const app = express();

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
    console.log(`https://localhost:3300/
Server is running on port 3300`);
});