const request = require("request");
const requestJSON = {
    "flightList": [{
        "departureStation": "SOF",
        "arrivalStation": "MAD",
        "departureDate": "2017-04-03"
    }, {
        "departureStation": "MAD",
        "arrivalStation": "SOF",
        "departureDate": "2017-04-03"
    }],
    "adultCount": 1,
    "childCount": 0,
    "infantCount": 0,
    "wdc": true,
    "isFlightChange": false
};

request({
    url: "https://be.wizzair.com/4.2.1/Api/search/search",
    method: "POST",
    json: requestJSON
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body);
    } else {
        console.log("error: " + error);
        console.log("response.statusCode: " + response.statusCode);
        console.log("response.statusText: " + response.statusText);
    }
});

