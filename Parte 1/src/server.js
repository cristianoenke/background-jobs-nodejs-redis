import 'dotenv/config';
import express from 'express';

import UserController from './app/controllers/UserController';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true })); 

app.post('/users', UserController.store);

app.listen(process.env.PORT,() => {
    console.log(`Server running on port ${process.env.PORT}`)
})