import { Image } from './image';

export class Artist {
  constructor(
    public followers: { total: number },
    public id: string,
    public images: Image[],
    public name: string
  ) {}
}
