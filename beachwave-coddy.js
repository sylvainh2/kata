let initialWave = [1,1,1];
let transforms = [[0, 1], [1, 1], [2, 1]];
let result = [initialWave.join()];
transforms.map((data)=>{
    initialWave[data[0]] += data[1];
    result.push(initialWave.join())
})
console.log(result)