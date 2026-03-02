const express =require ('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

const items=['Apple','Banana','Orange'];

app.get('/items',(req,res)=>{
    res.json(items)
});


app.post('/items',(req,res)=>{
    const newItem=req.body.items;
    items.push(newItem);
    req.json(items);
});

app.listen(port,()=>{
    console.log('Server running at http://localhost:${port}');
});


