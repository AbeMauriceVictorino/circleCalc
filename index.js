const express = require("express");
const bodyParser = require("body-parser");

// create an app objndoe ect from the express object
const app = express();
// this allows the parsing of the html file using body parser
app.use(bodyParser.urlencoded({extended: true}));

//this sends the html file to the web page using the root directory
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

// this gets the response from the values in the web page
app.post("/", function(req, res){

  var radCircle = parseFloat(req.body.n1);
  var heightCyl = parseFloat(req.body.cylinderHeight);

// does the computation of the input variables, as numbers
    //Area of a Circle
    //var areaCircle = Math.PI * Math.pow(radCircle, 2);
    
    //Circumference of a Circle
    //var circumCircle = 2 * Math.PI * radCircle;
    
    //Volume of a Cylinder
    var cylinderVolume = Math.PI * Math.pow(radCircle, 2)* heightCyl;

// sends the results back to the web page as string

 res.send("The volume of the cylinder is " + cylinderVolume.toFixed(2) + ".");

  //res.send("The Area of the Cirle is " + areaCircle.toFixed(2) + " and the Circumference is " + circumCircle.toFixed(2));
});
//this gets the response from the web page to this placeholder
// COMMENT out this code in Repl, as this is not running on localhost:3000


//Actually have to UNcomment this otherwise my repl won't work.
app.listen(3000, function() {
console.log ("Server is running on port 3000")
 });