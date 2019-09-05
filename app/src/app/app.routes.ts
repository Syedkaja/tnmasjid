import {Routes, RouterModule} from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { StudentsviewComponent } from './studentsview/studentsview.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyviewComponent } from './facultyview/facultyview.component';
import { StudentattendanceComponent } from './studentattendance/studentattendance.component';
import { FacultyattendanceComponent } from './facultyattendance/facultyattendance.component';
import { FeestructureComponent } from './feestructure/feestructure.component';
import { ResultsboardexamComponent } from './resultsboardexam/resultsboardexam.component';
import { ResultsinternalexamComponent } from './resultsinternalexam/resultsinternalexam.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetablebviewComponent } from './timetablebview/timetablebview.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LibraryComponent } from './library/library.component';
import { AuthGuard } from './auth/auth.guard';

const APP_ROUTES: Routes = [
     {
        path: '', redirectTo: 'auth', pathMatch: 'full'
    },
    {
        path: 'auth', component: AuthComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'faculty', component: FacultyComponent
    },
    {
        path: 'facultyview', component: FacultyviewComponent
    },
    {
        path: 'students', component: StudentsComponent
    },
    {
        path: 'studentsview', component: StudentsviewComponent
    },
    {
        path: 'studentattendance', component: StudentattendanceComponent
    },
    {
        path: 'facultyattendance', component: FacultyattendanceComponent
    },
    {
        path: 'feestructure', component: FeestructureComponent
    },
    {
        path: 'boardresults', component: ResultsboardexamComponent
    },
    {
        path: 'internalresults', component: ResultsinternalexamComponent
    },
    {
        path: 'timetable', component: TimetableComponent
    },
    {
        path: 'timetableview', component: TimetablebviewComponent
    },
    {
        path: 'gallery', component: GalleryComponent
    },
    {
        path: 'library', component: LibraryComponent
    }, 
    {
        path: '**', redirectTo: 'auth'
    }
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);