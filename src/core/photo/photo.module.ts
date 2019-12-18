import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service'

@Module({
  controllers: [PhotoController],
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [PhotoService],
  exports: [TypeOrmModule]
})
export class PhotoModule {}
