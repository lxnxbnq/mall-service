import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('/cat')
export class CatController {
  private readonly catService: CatService
  constructor(_catService: CatService) {
    this.catService = _catService
  }

  @Get()
  getHello(): string {
    return this.catService.getHello();
  }
}
