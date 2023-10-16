import { Module } from '@nestjs/common';
import { LibraryController } from './Library.controller';
import { LibraryService } from './Library.service';

@Module({
  
  controllers: [LibraryController],
  providers: [LibraryService],
})
export class LibraryModule {}
