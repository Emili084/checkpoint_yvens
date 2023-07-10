import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  route: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Album[]>('http://localhost:4080/api/albums/')
      .subscribe((data: Album[]) => {
        this.albums = data;
      });
  }
}
