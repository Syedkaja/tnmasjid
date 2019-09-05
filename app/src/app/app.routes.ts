import {Routes, RouterModule} from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { StudentsComponent } from './students/students.component';
import { StudentsviewComponent } from './studentsview/studentsview.component';
import { AuthGuard } from './auth/auth.guard';

const APP_ROUTES: Routes = [
     {
        path: '', redirectTo: 'auth', pathMatch: 'full'
    },
    {
        path: 'auth', component: AuthComponent
    },
    {
        path: 'students', component: StudentsComponent
    },
    {
        path: 'studentsview', component: StudentsviewComponent
    }, 
    {
        path: '**', redirectTo: 'auth'
    }
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);