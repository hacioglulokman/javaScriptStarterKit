function addToCart(quantity, productName="elma") {
    console.log("sepete eklendi urun:" + productName + " adet : " + quantity)
    
}


//addToCart()
addToCart(10)
//addToCart("yumurta")
//addToCart("karpuz")

let sayHello = ()=>{
    console.log("hello World")
}

sayHello()

let sayHello2 = function (params) {
    console.log("hello world 2")
}

sayHello2()

function addToCart2(productName,quantity,unitPrice) {
    
}
addToCart2("elma",5,10)

let product1 = {productName:"elma2 ",unitPrice:10,quantity:5}

function addToCart3(product) {

    console.log("urun : " + product.productName)
    console.log("adet : " + product.quantity)
    console.log("fiyat : "+ product.unitPrice)
    
}

addToCart3(product1)

let product2 = {productName:"elma ",unitPrice:10,quantity:5}
let product3 = {productName:"elma2 ",unitPrice:10,quantity:5}

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {

    console.log(products)
    
}

let products = [
    {productName:"elma ",unitPrice:10,quantity:5},
    {productName:"armut",unitPrice:10,quantity:5},
    {productName:"karpuz ",unitPrice:10,quantity:5}

] 
addToCart4(products)

// degiskenin onune ... nokta koyunca rest operator anlamina gelir
function add(...numbers) {
    let total = 0;
    for (let i= 1; i< numbers.length; i++) {
         total = total + numbers[i]
    }
    console.log(total) 
}

add(20,40,50)
add(20,45,313)


function add(bisey,...numbers) {
    let total = 0;
    for (let i= 1; i< numbers.length; i++) {
         total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey) 
}

add(20,40,50)
add(20,45,313)

let numbers = [30,40,100,300]
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"ic anadolu",population:"20M"},
    {name:"marmara",population:"40M"},
    {name:"karadeniz",population:"10M"},
    [
        ["ankara","konya"],
        ["istanbul","bursa"], 
        ["sinop","trabzon"],  
    ]
] 
//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)
    

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
={productName:"karpuz ", unitPrice:10, quantity:5}) 
console.log("productName: " + newProductName )
console.log(newUnitPrice)
console.log(newQuantity)




function findPrime(...asalSayi) 
{   
    let kontrol = 0    
        for (i= 2; i < asalSayi.length; i++) 
         {
            let isPrime = 0

            if (asalSayi[i]i==0)
            {
             kontrol++
            }
            if(kontrol==0)
            {
            console.log("sayı asal değildir.")
            }
            else
            {
            console.log("sayı asaldır")
            }

         }
    }
    let asalSayi = [40,30]
   

  
