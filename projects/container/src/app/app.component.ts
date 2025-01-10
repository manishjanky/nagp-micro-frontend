import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'container';
  showHelpAlert = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = (event) => {
        // console.log(`page got message: ${data}`);
        this.handleWorkerMessage(event);
      };
      worker.postMessage({
        type: 'START_TIMER',
        timeout: 5000,
      });
    } else {
      console.log("Your browser doesn't support web workers.");
    }
  }

  handleWorkerMessage(event: MessageEvent): void {
    if (event.data.type === 'TIMER_COMPLETE' && this.router.url === '/') {
      console.log('Timer Complete from Web Worker');
      this.showHelpAlert = true;
    }
  }
}
