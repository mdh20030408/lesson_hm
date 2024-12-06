const climbStars = function(n){
    const f =[];
    if(n===1){
        return 1;
    }
    if(n===2){
        return 2;
    }
    if(f[n]===undefined)
    {
        f[n]=climbStars(n-1)+climbStars(n-2);
    }
    return f[n];
}
console.time("climb")
climbStars(30);
console.timeEnd("climb")