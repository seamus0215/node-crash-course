// console.log(global);

global.setTimeout(() => {
  console.log("in the timeout");
  clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
  console.log("timer runs every three seconds");
}, 1000);
