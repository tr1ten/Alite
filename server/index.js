const express = require('express');
const cors = require('cors');

const PORT = 3001;
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });
})

app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));