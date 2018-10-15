import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

app.get('/', (req, res) => {
    res.send('gg');
});

app.listen(port, (err: Error) => {
    if (err) throw err;
    console.log('start server')
});
