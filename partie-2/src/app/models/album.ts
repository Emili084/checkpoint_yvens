import { Artist } from './artist';
import { Image } from './image';

export class Album {
  constructor(
    public artists: Artist[],
    public id: string,
    public name: string,
    public release_date: string,
    public total_tracks: number,
    public images: Image[]
  ) {}
}
