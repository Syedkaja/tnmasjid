import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthComponent } from './auth/auth.component';

import { AuthGuard } from './auth/auth.guard';
import { AppRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './auth/auth.service';
import { StudentsComponent } from './students/students.component';
import { StudentsviewComponent } from './studentsview/studentsview.component';

import { StudentsService } from './students/students.service';
import { jQueryService } from './shared/services/jquery.service';
import { AuthHttpInterceptor } from './auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthComponent,
    StudentsComponent,
    StudentsviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutes
  ],
  providers: [
    AuthGuard,
    AuthService,
    StudentsService,
    jQueryService,
    AuthHttpInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
