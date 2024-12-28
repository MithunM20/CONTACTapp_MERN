const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyparser=require('body-parser');
const dotenv=require('dotenv');
const contactRoutes=require('./routes/route');

dotenv.config();

const app=express();
app.use(cors());

app.use(bodyparser.json());


app.use('/api',contactRoutes);

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});