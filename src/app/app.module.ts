import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { customInterceptor } from '../services/custom.interceptor';

@NgModule({
  declarations: [			
    AppComponent,
      DashboardComponent,
      LoginComponent,
      LayoutComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptors([customInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
