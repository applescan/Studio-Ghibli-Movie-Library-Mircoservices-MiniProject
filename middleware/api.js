const axios = require('axios')
const redis = require("redis");

let redisClient;
(async () => {
    redisClient = redis.createClient();

    redisClient.on("error", (error) => console.error(`Error : ${error}`));

    await redisClient.connect();
})();

async function fetchData(films) {

    const cacheResults = await redisClient.get(films);
    if (cacheResults) {
        console.log("found in cache")
        isCached = true;
        results = JSON.parse(cacheResults);
        return results
    }
    else {
        console.log("not found in cache")
        const response = await axios.get(`https://ghibliapi.herokuapp.com/${films}`)
            .then((json) => {
                return (json.data)
            })
        await redisClient.set(films, JSON.stringify(response));
        return response
    }
}


module.exports = { fetchData }

//this file is only for calling API
