import { Controller, Get } from "@nestjs/common";

@Controller("price")
export class PriceControler {
    @Get() 
    async findAll(): Promise <any> {
      return {message:"testing my coding here now typescript and nest"}
    }
}