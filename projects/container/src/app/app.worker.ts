/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  if (data.type === 'START_TIMER') {
    startTimer(data.timeout);
  }
});

function startTimer(timeout = 5000): void {
  setTimeout(() => {
    postMessage({
      type: 'TIMER_COMPLETE',
      message: 'Timer has completed',
    });
  }, timeout);
}
