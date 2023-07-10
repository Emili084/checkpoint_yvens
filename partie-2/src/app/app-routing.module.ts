import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';

const routes: Routes = [
  { path: '', redirectTo: '/artists', pathMatch: 'full' },
  { path: 'artists', component: ArtistsComponent },
  { path: 'artists/:id/albums', component: AlbumsComponent },
  { path: '**', redirectTo: '/artists' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
