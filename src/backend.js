const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// mongoose.connect("mongodb+srv://liamdimitri:<password>@cluster0.et8frrj.mongodb.net/?retryWrites=true&w=majority", {
//   useNewUrlParser: true, useUnifiedTopology: true 
// },(err) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log("successfully connected to DB")
//   }
// });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})