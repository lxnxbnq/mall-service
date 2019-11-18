import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getHello(): string {
    return `Hello world`;
  }
  showCat(catInfo): string {
    return `I have a cat, name is ${catInfo.name}, he is ${catInfo.age} years old. and his breed is ${catInfo.breed} `;
  }
}
