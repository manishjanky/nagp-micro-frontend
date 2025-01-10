import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { InsuranceModule } from './insurance.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { SharedModule } from '@libs/shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InsuranceModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
