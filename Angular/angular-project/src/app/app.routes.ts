import { Routes } from '@angular/router';
import { Rxjs } from '../rxjs/rxjs';
import { SubjectComponent } from '../rxjs/subject/subject';

export const routes: Routes = [
    
    {path:'rxjs', component:Rxjs,
        children:[
            {path:'subject',component:SubjectComponent}
        ]

    }
];
