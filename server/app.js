const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')

const dbConnect = require('./dbConnection')

const shoeModel = require('./models/shoe')

app.use(cors())
app.use(bodyParser.json())


app.get('/',async (req,res) => {
    
    const postShoe = await shoeModel.create({
        id:6,
        imageLink:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8a3bab79-6c98-4a03-a8a5-1ca70bbd2362/zion-2-mens-basketball-shoes-CCXqSW.png",
        shoename:"Zion 2",
        shoecat:"Men's Basketball Shoes",
        shoecolor:"2 Colors",
        shoeprice:"$120",
        shoediscount:"",
        displayPhotos:[
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/31335ca6-4701-4f9d-92f1-09109a94b42d/zion-2-mens-basketball-shoes-CCXqSW.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/75b5291e-f932-4d66-b25c-9c9a8d927d1e/zion-2-mens-basketball-shoes-CCXqSW.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4332ac04-8de4-4b50-8a82-49e0fd02346a/zion-2-mens-basketball-shoes-CCXqSW.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0bcaa7c4-93bf-40e2-b6cc-2937d2bc50f8/zion-2-mens-basketball-shoes-CCXqSW.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/484b623d-54c4-4942-b990-61ade4ff8d3f/zion-2-mens-basketball-shoes-CCXqSW.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/751a94a4-174c-4180-8116-61ee137d4699/zion-2-mens-basketball-shoes-CCXqSW.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ad7f8466-d79b-4af2-99d9-fd82b06700c1/zion-2-mens-basketball-shoes-CCXqSW.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/fb419fbd-51aa-47aa-b39f-d7ab608dbc9b/zion-2-mens-basketball-shoes-CCXqSW.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e660e2ea-a078-4957-8c45-680e6dab2b6f/zion-2-mens-basketball-shoes-CCXqSW.png"
        ]
    })
    const savedShoe = await postShoe.save()
    res.json(savedShoe)
})

app.get('/api/v1/getAllShoes',async(req,res) => {
    try
    {
        const allShoes = await shoeModel.find()
        res.json({
            error:false,
            message:"retrieved all shoes",
            data:allShoes
        })
    }
    catch(E)
    {
        console.log(E)
        res.json({
            error:true,
            message:"Could not retrieve all Shoes",
            data:[]
        })
    }
})

const port = process.env.PORT || 5000

app.listen(port,() => {
    dbConnect()
    console.log(`server is up on port ${port}`)
})