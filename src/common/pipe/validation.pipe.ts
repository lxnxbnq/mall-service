import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

// 管道会验证参数的正确性
@Injectable()
export class ValidationPipe implements PipeTransform {
  // value 是当前处理的参数，而 metadata 是其元数据。元数据对象包含一些属性
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, metadata)
    return value;
  }
}


