    const climbStars = function(n){
        if(n===1){
            return 1;
        }
        if(n===2){
            return 2;
        }
        return climbStars(n-1)+climbStars(n-2);
    }
    console.log(climbStars(3));