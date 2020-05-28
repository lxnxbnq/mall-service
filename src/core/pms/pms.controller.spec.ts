import { Test, TestingModule } from '@nestjs/testing';
import { PmsController } from './pms.controller';
import { PmsService } from './pms.service';

describe('PmsController', () => {
  let pmsController: PmsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PmsController],
      providers: [PmsService],
    }).compile();

    pmsController = app.get<PmsController>(PmsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(pmsController.getList()).toBe('Hello World!');
    });
  });
});
