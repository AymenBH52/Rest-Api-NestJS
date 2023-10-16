import { Test, TestingModule } from '@nestjs/testing';
import { LibraryController } from './Library.controller';
import { LibraryService } from './Library.service';

describe('LibraryController', () => {
  let libraryController: LibraryController;
  let libraryService: LibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibraryController],
      providers: [LibraryService],
    }).compile();

    libraryController = module.get<LibraryController>(LibraryController);
    libraryService = module.get<LibraryService>(LibraryService);
  });

  it('should be defined', () => {
    expect(libraryController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of books', async () => {
      const result = [
        {
          id: 1,
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien',
        },
        {
          id: 2,
          title: 'Harry Potter and the Sorcerer\'s Stone',
          author: 'J.K. Rowling',
        },
        {
          id: 3,
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
        },
      ];
      jest.spyOn(libraryService, 'findAll').mockImplementation(() => result);

      expect(await libraryController.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a book', async () => {
      const result = {
        id: 1,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
      };
      jest.spyOn(libraryService, 'findOne').mockImplementation(() => result);

      expect(await libraryController.findOne(1)).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a book', async () => {
      const result = {
        id: 4,
        title: 'New Book',
        author: 'Author Name',
      };
      const book = {
        title: 'New Book',
        author: 'Author Name',
      };
      jest.spyOn(libraryService, 'create').mockImplementation(() => result);

      expect(await libraryController.create(book)).toBe(result);
    });
  });

  describe('update', () => {
    it('should update a book', async () => {
      const result = {
        id: 2,
        title: 'Updated Title',
        author: 'Updated Author',
      };
      const book = {
        title: 'Updated Title',
        author: 'Updated Author',
      };
      jest.spyOn(libraryService, 'update').mockImplementation(() => result);

      expect(await libraryController.update(2, book)).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete a book', async () => {
      jest.spyOn(libraryService, 'delete').mockImplementation(() => {});

      expect(await libraryController.delete(3)).toBeUndefined();
    });
  });
});
