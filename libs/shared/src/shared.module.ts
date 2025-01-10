import { NgModule } from '@angular/core';
import { MfeBridgeService } from './services';
import { NavbarComponent } from './components';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent],
  providers: [
    {
      provide: MfeBridgeService,
      useClass: MfeBridgeService,
      multi: false,
    },
  ],
})
export class SharedModule {}
