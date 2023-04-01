import { Injectable } from "@nestjs/common";



@Injectable()
export class ProductService{
    getAddMessage(): string {
        return "To adding more one service about my products!!"
    }
}