const champions = [
    {name: 'ezreal', role: 'adc' },
    {name: 'darius', role: 'top' },
    {name: 'nocturne', role: 'jg' },
    {name: 'soraka', role: 'sup' },
    {name: 'veigar', role: 'mid' }
]

const mastery = [
    {name: 'ezreal', points: '500000' },
    {name: 'darius', points: '680' },
    {name: 'nocturne', points: '23' },
    {name: 'soraka', points: '12000' },
    {name: 'veigar', points: '500' }
]

function combineChampionData(champions, mastery) {
    return champions.map(champion => {
        const correspondingMastery = mastery.find(m => m.name === champion.name);

        if (correspondingMastery) {
  
            return {
                name: champion.name,
                role: champion.role,
                points: correspondingMastery.points
            };
        } else {

            return {
                name: champion.name,
                role: champion.role,
                points: 'N/A'
            };
        }
    });
}


const combinedData = combineChampionData(champions, mastery);
console.log(combinedData);
