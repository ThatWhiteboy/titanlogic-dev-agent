const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('TitanLogic Dev Agent is live!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
