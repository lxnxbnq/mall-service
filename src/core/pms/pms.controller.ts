import { Controller, Get, UsePipes, Query} from '@nestjs/common';
import { PmsService } from './pms.service';
import { ValidationPipe } from "../../common/pipe/validation.pipe";
import { CatInfo } from "./dto/create-pms.dto";

// 控制器文档 https://docs.nestjs.cn/6/controllers
@Controller('/api/pms')
export class PmsController {
  constructor(private readonly pmsService: PmsService) {}
  
  @Get('/list')
  getList(): string {
    return this.pmsService.getList();
  }

  @Get('/showCat')
  @UsePipes(ValidationPipe)
  showCat(@Query() catInfo: CatInfo): string {
    return this.pmsService.showCat(catInfo);
  }
}
