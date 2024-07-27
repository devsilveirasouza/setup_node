import express from 'express';
import '@controllers/UsersController';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Wellington Hello World!' });
});

const PORT = process.env.PORT || 3333;
const USER = "Wellington";
app.listen(PORT, () => {
    console.log(`Hello ${USER}, This server is running on port ${PORT}!`);
});