import { Component } from '@angular/core';
import { ContentChild } from './content-child/content-child';

@Component({
  selector: 'app-content-projection',
  imports: [ContentChild],
  templateUrl: './content-projection.html',
  styleUrl: './content-projection.scss',
})
export class ContentProjection {

}
