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
findPrime(2,17,129,547,58)


//arkadas sayılar

function friendNumberFind(sayi1,sayi2) {

    let totalSayi1=0
    let totalSayi2=0

    for (let i= 0; i < sayi1; i++) {

        let tamBölen = 0
    
        if (sayi1 % i == 0) 
        {
            totalSayi1+=i
            
        } 
        
    }

    for (let j= 0; j < sayi2; j++) {

        let tamBölen = 0
    
        if (sayi2 % j == 0) 
        {
            totalSayi2+=j
            
        } 
        
    }
    
    if (totalSayi1==sayi1 & totalSayi2==sayi2){
        console.log(sayi1 + " ve " + sayi2 + " arkadaş sayılardır.")
    }else{
        console.log(sayi1 + " ve " + sayi2 + " arkadaş sayılar değildir.")
    }
    }


friendNumberFind(220,284)

// mükemmel sayılar 
    for (let k = 1; k < 2; k++) {  
        for (let m = 1; m < k; m++) {
            let totalbölen = 0 
            if (k % m ==0){
                totalbölen+=m 
            }
            if (k*2 == totalbölen){
                console.log(k + " mükemmel sayıdır.")

            } else{
                console.log(k + " mükemmel sayı değildir.")
            }
        }     
    }

    //asal sayı bulma

    for (let n= 2; n < 50; n++) {
        let isPrimes = 0
        
        for (let z = 2 ; z < n; z++) {
        
            if(n % z == 0){
                isPrimes++
        }    
    }
    if(isPrimes == 0){
        console.log(n + " asal sayıdır.")
    }
}