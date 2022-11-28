function factors(n){
    var result  = [];
    for(let i =0; i <= n+1; i++){
       if (n % i == 0 ){
           result.push(i)
       }
    }
    console.log(result)
    return result
    
}


factors(10)