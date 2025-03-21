import bodyParser from 'body-parser';
import express from 'express';

const app = express();

const port = process.env.PORT || 5000;
// middleware
app.use(bodyParser.json());

app.post('/admin-login', (req, res) => {
  console.log(req.body);
  res.status(200).send('got user login credentials');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
