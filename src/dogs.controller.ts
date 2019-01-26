import { Controller, Get, Post } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Post()
  create() {
    return 'This action adds a new dog';
  }

  @Get()
  findAll() {
    return 'This action returns all dogs';
  }
}
