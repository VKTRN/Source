import {Router} from "express"
import express from "express"
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { verifyTokenAndAuthorization } from "./verifyToken.js"

const router     = Router()
const users      = [{username: 'viktor', password: "1234", id:"3hd92ha83k4l3"}, {username: 'fox', password: "12345", id:"3hd921a83k4l3"}]
const JWT_SECRET = "1234"

router.post('/login', async (req, res) => {
  try{
    
    const user = users.find(item => item.username === req.body.username)

    if (!user) {
      console.log('wrong name')
      res.status(401).json("Wrong User Name") 
    }
    else{
      const passwordFromInput = req.body.password
      const passwordFromDB    = user.password
      const passwordIsCorrect = passwordFromDB === passwordFromInput 
      
      !passwordIsCorrect && res.status(401).json("Wrong Password");
  
      const accessToken = jwt.sign({id: user.id}, JWT_SECRET, {expiresIn:"3d"});
  
      const { password, ...others } = user;  
      res.status(200).json({...others, accessToken});
    }

  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/secret:id", verifyTokenAndAuthorization, async (req, res) => {
  res.status(200).json({secret: 'The access token that you have sent is valid and it contains your name. You have now entered the sescret.'});
});

const app = express()

// middleware
app.use(express.json());
app.use(cors())

// routes
app.use("/", router);

app.listen(5000, () => {console.log("http://localhost:5000")})