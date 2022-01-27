import express from "express";
// import { xyz } from './controller/animal.controller.js';

const PORT = 4000;
const app = express();

// app.get('...', xyz);

// GET /animals
// GET /animals/color/:color
// GET /animals/kind/:kind
// GET /animals/random

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});