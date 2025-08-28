let buckets = [99, 88, 77, 66, 55, 44, 33, 22, 11];
buckets.sort((a,b)=>{
    return(a.length-b.length)
})
console.log(buckets);