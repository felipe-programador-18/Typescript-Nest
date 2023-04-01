import { Module } from "@nestjs/common";
import {NewBrand} from './brand.controllers'

@Module({
    controllers: [NewBrand]
})

export class NewBrandeModules{}