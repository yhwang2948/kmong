const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');



const Mail = require('./routes/mail');


app.use(cors());

// const port = 3001;
const port = precess.env.PORT;


app.use(bodyParser.json());
app.use(cors());

app.use("/api", Mail);




app.listen(port, () => console.log(`Node.js Server is running on port ${port}...`));