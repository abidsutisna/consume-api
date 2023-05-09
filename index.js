async function getStarshipModelByCharacterId(id){

    const peopleResponse = await fetch("https://swapi.dev/api/people/" + id);
    const peopleData = await peopleResponse.json();
    const startshipUrls = peopleData.starships;

    const result = [];

    for(let i=0;i < startshipUrls.length ;i++){
        const starShipResponse = await fetch(startshipUrls[i]);
        const startshipData = await starShipResponse.json();

        result.push(startshipData.model);
    }

    return result
}

getStarshipModelByCharacterId(1).then((result) => console.log(result)).catch((e) => console.log(e));