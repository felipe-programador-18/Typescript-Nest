import { Module } from "@nestjs/common";
import { CreateControllerWatch, GetAnotherControlleterWatchHere, TogetAnotherThing } from "./watchs.controllers";


@Module({
    controllers: [CreateControllerWatch,GetAnotherControlleterWatchHere,TogetAnotherThing]
})


export class WatchsModules {}