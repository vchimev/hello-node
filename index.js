const request = require("request");
const requestJSON = {
    "flightList": [{
        "departureStation": "SOF",
        "arrivalStation": "MAD",
        "from": "2017-05-01",
        "to": "2017-05-31"
    }, {
        "departureStation": "MAD",
        "arrivalStation": "SOF",
        "from": "2017-05-01",
        "to": "2017-05-31"
    }],
    "priceType": "regular"
};

request({
    url: "https://be.wizzair.com/4.2.1/Api/search/timetable",
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

