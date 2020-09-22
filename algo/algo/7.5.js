let Arr = [35,14,203,7,12];

for (let i = 1; i < Arr.length; i++)
    for (let j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
          let x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }

console.log(Arr);