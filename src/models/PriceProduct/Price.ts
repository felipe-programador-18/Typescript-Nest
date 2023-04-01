import { PriceControler } from "./PriceControllers";
import {Module} from "@nestjs/common"

@Module({
    controllers: [PriceControler]
})

export class NewPriceModule {}