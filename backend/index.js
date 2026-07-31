import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db.js'



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/products', async(req,res)=>{
    try {
        const [products] = await db.query('SELECT * FROM shop_db.products;')
        res.json(products)
        
    } catch (err) {
        console.log(err)
        
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Сервер запущен на порту ${PORT}`)
})