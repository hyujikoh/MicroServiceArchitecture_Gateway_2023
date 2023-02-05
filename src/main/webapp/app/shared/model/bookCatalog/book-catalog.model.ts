export interface IBookCatalog {
  id?: string;
  title?: string;
  author?: string;
  description?: string;
  bookId?: string;
  rentCnt?: number;
}

export class BookCatalog implements IBookCatalog {
  constructor(
    public id?: string,
    public title?: string,
    public author?: string,
    public description?: string,
    public bookId?: string,
    public rentCnt?: number
  ) {}
}
