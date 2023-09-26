const creatureIMG = document.querySelector('.creature_img')
const creatureNAM = document.querySelector('.creature_name')
const creatureDES = document.querySelector('.creature_description')
const creatureLOC = document.querySelector('.creature_location')


const fetchCreature = async(creature) =>{

    const response = await fetch(`https://eldenring.fanapis.com/api/creatures/:${creature}`);

    if(response.status == 200){
        const data = await APIResponse.json();
        return data;  
    }
}


const renderCreature = async(creature) =>{

    const data = await fetchCreature(creature);
    


}
