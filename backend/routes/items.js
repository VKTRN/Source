import 	{Router} from "express"
import Item from "../models/Item.js"

const router = Router()

router.post("/", async (req, res) => {
  try{
    const item = new Item(req.body)
    await item.save()
    res.status(200)
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
})

router.get("/", async (req, res) => {
  try{
    const items = await Item.find({});
    res.status(200).json(items);
  }catch(err){
    res.status(500).json(err);
  }
})

export default router

