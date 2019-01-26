import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Post()
  create() {
    return 'This action adds a new dog';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `This action returns a #${id} dog`;
  }
}
