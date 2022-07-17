const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const dbConnect = require('./dbConnection')

const shoeModel = require('./models/shoe')

const userRoutes = require('./routes/user')

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}));

app.use('/api/v1',userRoutes)

app.get('/',async (req,res) => {
    
    const postShoe = await shoeModel.create({
        id:6,
        imageLink:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/18d3d33c-54a8-4b1a-a9f8-4e70a2311b94/kyrie-infinity-basketball-shoes-LvzsVp.png",
        shoename:"Kyrie Infinity",
        shoecat:"Basketball Shoes",
        shoecolor:"10 Colors",
        shoeprice:"$140",
        shoediscount:"",
        displayPhotos:[
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/18d3d33c-54a8-4b1a-a9f8-4e70a2311b94/kyrie-infinity-basketball-shoes-LvzsVp.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f8882a6d-fe47-4fee-aff9-e46eb565fc67/kyrie-infinity-basketball-shoes-LvzsVp.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d39c873f-ac97-436b-97b8-29ae851e7ebd/kyrie-infinity-basketball-shoes-LvzsVp.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6ae8ba79-ea00-4a0a-9923-829fd53ddc5d/kyrie-infinity-basketball-shoes-LvzsVp.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/004887d8-6dc1-4dfe-8337-83d35c25212f/kyrie-infinity-basketball-shoes-LvzsVp.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/de6f7493-0e26-478a-b037-3391f3e68b79/kyrie-infinity-basketball-shoes-LvzsVp.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/14f61c1d-816a-40b4-97ca-b933fd6d6dc6/kyrie-infinity-basketball-shoes-LvzsVp.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/bc8bcb49-ebc2-4a9b-af11-78c1569e7d86/kyrie-infinity-basketball-shoes-LvzsVp.png",
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