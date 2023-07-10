import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<ArtistsComponent[]>('http://localhost:4080/api/artists')
      .subscribe((data: any) => {
        this.artists = data;
      });
  }
}
