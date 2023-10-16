import { Controller, Get, Post, Put,Delete, Param, Body } from '@nestjs/common';
import { LibraryService } from './Library.service';


@Controller('Library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Get()
  
  findAll(){
    return this.libraryService.findAll();
  }
  

  @Get(':id')
    findOne(@Param('id') id: number) {
      return this.libraryService.findOne(id);
    }
  
  @Post()
  create(@Body() book){
    return this.libraryService.create(book);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() book) {
    return this.libraryService.update(id, book);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.libraryService.delete(id);
  }
}

