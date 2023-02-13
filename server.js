const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.json({ message: 'Welcome to my application'});
});

require('./routes/rest_shop.router.js')(app);

const PORT = process.env.PORT || 8080;
require("./routes/rest_shop.router.js")(app);
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});