
var car=[
{
    image : "ToyotaChaseJZX100r.jpg",
    name : "Toyota Chaser JZX100 Tourer V ",
    price: "250,000 MAD",
},
{
    image : "NissanS-ChassisS15.jpg",
    name : "Nissan S-Chassis S15 Silvia ",
    price: "180.000 MAD",
},
{
    image : "mazda-rx-7.jpg",
    name : "Mazda RX-7 ",
    price: "350,000 MAD",
},
{
    image : "NissanCefiro.jpg",
    name : "Nissan Cefiro A31 ",
    price: "220,000 MAD",
},
{
    image : "Dodge_Viper_SRT-10.jpg",
    name : "Dodge Viper SRT-10",
    price: "900,000 MAD",
},
{
    image : "MercedecBenzCLK.jpg",
    name : "Mercedes Benz class CLK",
    price: "750,000 MAD",
},
{
    image : "Subaru-WRX-STI-Type-R.jpg",
    name : "Subaru Impreza WRX STI",
    price: "340,000 MAD",
},
{
    image : "volkswagen-golf8.jpg",
    name : "Volkswagen GOLF mk8",
    price: "500,000 MAD",
},
{
    image : "BMWM5-E39.jpg",
    name : "BMW M5 E39",
    price: "450,000 MAD",
}
];
var Mazda=[
    {
        image : "mazda-rx-7.jpg",
        name : "Mazda RX-7 ",
        price: "350,000 MAD",
    },
    {
        image : "Mazda-RX-3.jpg",
        name : "Mazda RX-3 ",
        price: "250,000 MAD",
    },
    {
        image : "Mazda-MX-3.jpg",
        name : "Mazda MX-3 ",
        price: "80,000 MAD",
    },
    {
        image : "Mazda-MX-6.jpg",
        name : "Mazda MX-6 ",
        price: "450,000 MAD",
    },
    {
        image : "Mazda-323-GT-R.jpg",
        name : "Mazda 323 GT-R ",
        price: "200,000 MAD",
    },
    {
        image : "Mazdaspeed-6.jpg",
        name : "Mazdaspeed 6",
        price: "75,000 MAD",
    },
    {
        image : "Mazda-RX-8.jpg",
        name : "Mazda RX-8",
        price: "650,000 MAD",
    },
    {
        image : "Mazda-Cosmo-Sport-110S.jpg",
        name : "Mazda Cosmo Sport 110S",
        price: "1,000,000 MAD",
    },
    {
        image : "Mazda-MX-5-Miata.jpg",
        name : "Mazda MX-5 Miata",
        price: "300,000 MAD",
    },


];

var Toyota=[
    {
        image : "ToyotaChaseJZX100r.jpg",
        name : "Toyota Chaser JZX100 Tourer V ",
        price: "250,000 MAD",
    },
    {
        image : "Toyota-Celica-GT2000-Liftback.jpg",
        name : "Toyota Celica GT2000 Liftback",
        price: "400.000 MAD",
    },
    {
        image : "Toyota-Celica-Supra.jpg",
        name : "Toyota Celica Supra",
        price: "200,000 MAD",
    },
    {
        image : "Toyota-Corolla-AE86.jpg",
        name : "Toyota Corolla AE86",
        price: "150,000 MAD",
    },
    {
        image : "Toyota-Soarer-Turbo.jpg",
        name : "Toyota Soarer Turbo MK 3",
        price: "150,000 MAD",
    },
    {
        image : "Toyota-MR-S.jpg",
        name : "Toyota MR-S",
        price: "250,000 MAD",
    },
    {
        image : "Toyota-Mk4-Supra.jpg",
        name : "Toyota Mk4 Supra",
        price: "200,000 MAD",
    },
    {
        image : "Toyota-GT86.jpg",
        name : "Toyota GT86",
        price: "390,000 MAD",
    },
    {
        image : "Toyota-GR86.jpg",
        name : "Toyota GR86",
        price: "450,000 MAD",
    }
    ];


function _Mazda() {
    for (let index = 1; index <= 9; index++) {
        
        document.getElementById("img"+index).src = Mazda[index-1].image;
        document.getElementById("img"+index).alt = Mazda[index-1].name;
        document.getElementById("price"+index).innerHTML = Mazda[index-1].price;
        document.getElementById("Pc"+index).innerHTML = Mazda[index-1].name;
    }
    
}
function _Toyota() {
    document.getElementById("offer").style.backgroundImage = "url('toyota2.jpg')"
    for (let index = 1; index <= 9; index++) {
        
        document.getElementById("img"+index).src = Toyota[index-1].image;
        document.getElementById("img"+index).alt = Toyota[index-1].name;
        document.getElementById("price"+index).innerHTML = Toyota[index-1].price;
        document.getElementById("Pc"+index).innerHTML = Toyota[index-1].name;
    }
    
}



for (let index = 1; index <= 9; index++) {
    console.log(car[index-1].price);

    document.getElementById("img"+index).src = car[index-1].image;
    document.getElementById("img"+index).alt = car[index-1].name;
    document.getElementById("price"+index).innerHTML = car[index-1].price;
    document.getElementById("Pc"+index).innerHTML = car[index-1].name;
}