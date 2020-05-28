var express = require("express"),
    app = express();

const req = require('request');

   

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get("/sayHello", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.get('/analyze',function(request,response){
  var text= encodeURI(request.query.text);
  console.log(text)
  reqObject="http://localhost:8080/analyze?text="+text;
  req(reqObject,  (err, result, body) => {
    if (err) { return console.log(err); }
    console.log(result.body)
    response.end(result.body)
  });
})

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();
