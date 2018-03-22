const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

console.log(`Starting server on port 3000`);
console.log(`Generating new random ratings`);
app.listen(3000);
