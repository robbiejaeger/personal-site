const express = require('express');
const app = express();

const requireHTTPS = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] != 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
};

if (process.env.NODE_ENV === 'production') { app.use(requireHTTPS) };
app.use(express.static(`${__dirname}/public`));
app.set('port', process.env.PORT || 3000);


app.get('/', (req, res) => {
  app.sendFile('index.html');
});

app.get('*', (req, res) => { // Redirect any other GET request to homepage
  res.redirect('/');
});

app.use((req, res) => { // All other requests send 404
  res.status(404);
  res.send('404');
});

app.listen(app.get('port'), () => {
  console.log(`Personal site running on localhost:${app.get('port')}`);
});
