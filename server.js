const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const server = require("http").Server(app);
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true, useFindAndModify: false }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const DocumentRouter = require('./routes/document')
app.use("/", DocumentRouter)


  app.use(express.static('client/build'));
  app.get('*',(req,res)=> res.sendFile(path.resolve(__dirname,'client','build','index.html')))


server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


