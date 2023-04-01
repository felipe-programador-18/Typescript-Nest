import { Controller,Get } from "@nestjs/common";

@Controller("products")

export class ProductController {
  @Get()
  async findAll(): Promise<any>{
  return [{id:1}]
 }
}