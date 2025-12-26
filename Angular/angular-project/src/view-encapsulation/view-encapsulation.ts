import { Component } from '@angular/core';
import { Top } from './top/top';
import { Bottom } from './bottom/bottom';

@Component({
  selector: 'app-view-encapsulation',
  imports: [Top,Bottom],
  templateUrl: './view-encapsulation.html',
  styleUrl: './view-encapsulation.scss',
})
export class ViewEncapsulation {

}
