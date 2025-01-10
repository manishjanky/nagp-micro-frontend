import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeComponent } from './components';
import { SharedModule } from '@libs/shared';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, SharedModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
