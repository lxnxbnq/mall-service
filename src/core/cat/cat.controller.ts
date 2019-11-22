import { Controller, Get , HttpException, HttpStatus, UsePipes, Query} from '@nestjs/common';
import { CatService } from './cat.service';
import { ValidationPipe } from "../../common/pipe/validation.pipe";
import { CatInfo } from "./dto/create-cat.dto";

@Controller('/api/v1/cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  getHello(): string {
    return this.catService.getHello();
  }

  @Get('/error')
  async findAll() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
  }

  @Get('/showCat')
  @UsePipes(ValidationPipe)
  showCat(@Query() catInfo: CatInfo): string {
    return this.catService.showCat(catInfo);
  }
}