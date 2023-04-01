import { Controller,Get } from "@nestjs/common";


@Controller("watch")
export class CreateControllerWatch {
    @Get()
    async findAll(): Promise <any>{
        return [{name:'felipe Programmer', age:3434, email:'machadofelipe2016@outlook.com'}]
    }
}
@Controller("watch/newwatch")
export class GetAnotherControlleterWatchHere {
    @Get()
    async sendSomething(): Promise <any> {
         return {message: "to practice and become deeply knowledge in nest and typescript!!"}
    }
}

@Controller("watch/newwatch/otherhere")
export class TogetAnotherThing {
    @Get()
    async toSendOther (): Promise <any> {
        return  {message:"to add more one controller to get understand small concepts about nest"}
    }
}