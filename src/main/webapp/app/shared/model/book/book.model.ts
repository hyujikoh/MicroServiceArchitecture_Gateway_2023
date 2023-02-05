export interface IBook {
  id?: number;
  author?: string;
  title?: string;
  description?: string;
}

export class Book implements IBook {
  constructor(public id?: number, public author?: string, public title?: string, public description?: string) {}
}
