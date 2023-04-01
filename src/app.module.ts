import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Add_Product } from './models/products/product';
import { NewBrandeModules } from './models/brands/brand';
import { NewPriceModule } from './models/PriceProduct/Price';
import {NewBrand} from "./models/brands/brand.controllers"
import { TestingClass} from "./models/brands/brand.service"
import {PracticePriceService} from 'src/models/PriceProduct/price.service'
import { PriceControler } from './models/PriceProduct/PriceControllers';
import { CreateControllerWatch} from "src/models/Watchs/watchs.controllers"
import { WatchiServices } from './models/Watchs/watchs.services';
import {WatchsModules} from "src/models/Watchs/watchs"

@Module({
  imports: [Add_Product,NewBrandeModules, NewPriceModule, WatchsModules],
  controllers: [AppController,NewBrand, PriceControler, CreateControllerWatch],
  providers: [AppService,TestingClass,PracticePriceService, WatchiServices],
})
export class AppModule {}
