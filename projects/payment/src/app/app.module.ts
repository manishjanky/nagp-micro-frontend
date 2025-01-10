import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { PaymentModule } from './payment.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { SharedModule } from '@libs/shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes),
    PaymentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
