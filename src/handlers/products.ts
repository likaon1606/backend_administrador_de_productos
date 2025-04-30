import { Request, Response } from "express"
import  Product  from "../models/Product.model.js"

export const createProduct = async (req : Request, res: Response) => {

  const { name, price, avalability } = req.body
  const product = await Product.create({ name, price, avalability })

  res.json({data: product})
}