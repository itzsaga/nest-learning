import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Post()
  async create(@Body() createDogDto) {
    return 'This action adds a new dog';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `This action returns a #${id} dog`;
  }
}
