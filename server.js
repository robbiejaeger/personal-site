const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/public`));
app.set('port', process.env.PORT || 3000);

// const requireHTTPS = (req, res, next) => {
//   if (req.headers['x-forwarded-proto'] !== 'https') {
//     return res.redirect('https://' + req.get('host') + req.url);
//   }
//     next();
// };

// app.use(requireHTTPS);

app.get('/', (req, res) => {
  app.sendFile('index.html');
});

app.use((req, res) => {
  res.status(404);
  res.send('404');
});

app.listen(app.get('port'), () => {
  console.log(`Personal site running on localhost:${app.get('port')}`);
});
