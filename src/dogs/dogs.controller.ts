import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { identity } from 'rxjs';

@Controller('dogs')
export class DogsController {
  @Post()
  async create(@Body() createDogDto) {
    return 'This action adds a new dog';
  }

  @Get()
  findAll(@Query() query) {
    return `This action returns all dogs (limit: ${query.limit}) items`;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `This action returns a #${id} dog`;
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateDogDto) {
    return `This actions updates a #${id} dog`;
  }

  @Delete('id')
  remove(@Param('id') id) {
    return `This action remove a #${id} dog`;
  }
}
