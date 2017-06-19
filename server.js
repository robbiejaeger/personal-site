const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  app.sendFile('index.html');
});

app.listen(app.get('port'), () => {
  console.log(`Personal site running on localhost:${app.get('port')}`);
});
