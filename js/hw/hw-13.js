"use strict";

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

for (let a = 0; a < 20; a++) {
  if (a % 2 !== 0) {
    continue;
  }
  console.log(a);
}

for (let b = 0; b <= 10; ) {
  console.log(b * 7);
  b++;
}

const arr = [1, 2, 3, 4, 5];
let c = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

for (let d = 0; ; d++) {
  console.log(arr1[d]);
  if ((d = 7)) {
    break;
  } else {
    continue;
  }
}

let f = 1;
while (f < 20) {
  if (f % 3 == 0) {
    continue;
  } else {
    console.log(f);
    f++;
  }
}
