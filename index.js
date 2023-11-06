const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Accept']
}));

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/requestLogin', (req, res) => {
  const clientData = req.body;
  console.log('Received data:', clientData);

  // 응답 데이터
  const responseData = {
    user: "홍길동"
  };

  res.json(responseData);
});

app.listen(4009, () => {
  console.log('Server is running on port 4009');
});