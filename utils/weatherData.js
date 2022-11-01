const request = require('request')
const constants = require('../config')

const weatherData = (address, callback) =>{
    const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(address)+ '&appid=' + constants.openWeatherMap.SECRET_KEY;
    console.log(url);
    request({url,json:true}, (error, {body})=>{
        console.log(body)
        if(error){
            callback("can't' fetch data from opee weather map api ", undefined)
        } else if (!body.main || !body.main.temp || !body.name || !body.weather){
            callback("unable to find required data, try another location ", undefined)
        }
        else{
            callback(undefined,{
                temperature: body.main.temp,
                description: body.weather[0].description,
                cityName: body.name
            })
        }
    } )
}

module.exports= weatherData;







// 47e68ee87708227c4c3bed09cab658c3