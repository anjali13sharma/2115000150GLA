// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9876; 

app.use(cors());
app.use(express.json());

const numberData = {
    1: [2, 4, 6, 8, 10],
    2: [1, 3, 5, 7],
    3: [10, 20, 30, 40, 50]
};

app.get('/number/:numberId', (req, res) => {
    const { numberId } = req.params;
    if (!numberData[numberId]) {
        return res.status(404).json({ error: 'Number ID not found' });
    }

    const numbers = numberData[numberId];
    const average = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

    res.json({ numberId, average });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
