import { Module } from "@nestjs/common"
import { ProductController } from "./products.controller";


// this manage my controller to export to outside my box
@Module({
  controllers:[ProductController],
})

export class Add_Product {}