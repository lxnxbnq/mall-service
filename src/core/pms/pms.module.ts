import { Module } from '@nestjs/common';
import { PmsController } from './pms.controller';
import { PmsService } from './pms.service';

@Module({
  controllers: [PmsController],
  providers: [PmsService],
  exports: [PmsService] // 共享模块
})
export class PmsModule {}
