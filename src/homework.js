//asal sayı bulma!
function findPrime(...numbers) {

    for (let i = 0; i< numbers.length; i++){    
         let isPrime = 0;
         
       for (let j = 2; j < numbers[i]; j++) {
       
        if (numbers[i] % j == 0){
        
            isPrime++;         
           
       }
    }

    if (isPrime == 0) {

        console.log(numbers[i]+ " asaldır")   
    }
    else{
        console.log(numbers[i]+ " asal değildir.")
    }

    }
}
findPrime(2,5,8,21,13)
