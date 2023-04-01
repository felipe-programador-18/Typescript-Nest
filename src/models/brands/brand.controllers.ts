import {Controller, Get} from "@nestjs/common"

@Controller("brands")
export class NewBrand {
    @Get()
    async findAll():Promise<any>{
     return[{name:"programmer Felipe 18"}]
    } 
}