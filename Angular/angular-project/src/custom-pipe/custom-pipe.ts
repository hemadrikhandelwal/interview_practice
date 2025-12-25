import { Component } from '@angular/core';
import { CustPipePipe } from '../app/pipes/cust-pipe-pipe';

@Component({
  selector: 'app-custom-pipe',
  imports: [CustPipePipe],
  templateUrl: './custom-pipe.html',
  styleUrl: './custom-pipe.scss',
})
export class CustomPipe {

  name = 'Hemadri khandeelwal';

}
