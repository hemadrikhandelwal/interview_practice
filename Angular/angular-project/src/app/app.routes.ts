import { Routes } from '@angular/router';
import { Rxjs } from '../rxjs/rxjs';
import { SubjectComponent } from '../rxjs/subject/subject';
import { LifeCycle } from '../life-cycle/life-cycle';
import { Parent } from '../parent/parent';
import { ChangeDetection } from '../change-detection/change-detection';

export const routes: Routes = [
    
    {path:'rxjs', component:Rxjs,
        children:[
            {path:'subject',component:SubjectComponent}
        ]

    },
    {
        path:'life-cycle',component:LifeCycle
    },
    {
        path:'parent',component:Parent
    },
    {
        path:'change',component:ChangeDetection
    }

];
