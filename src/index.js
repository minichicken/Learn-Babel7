import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);


app.get('/', (req, res)=>{
    res.send('hello world');
});

app.listen(port, (err)=>{
    if(err){
        console.error(err);
    }
    console.log(`Server Application started at ${port}`);
});
