// um json pode ser lido normalmente em javascript, e caso de formato em string, usamos o metodo .parse, para transformalo em objeto novamente

const carros = `{
    "Car1" :{
        
        "id": 1,
        "name": "Ferrari",
        "CarClass": "S" 
        
    },
    "Car2" :{
        "id": 2,
        "name": "Volkswagen",
        "CarClass": "A"
    },
    "Car3":{
        "id": 3,
        "name": "Bugatti",
        "CarClass": "SS"
    }
    
}`


console.log(JSON.parse(carros))



