/**
 * Created by jjhis on 2016-09-25.
 */

//link to the connect package and url module
var connect = require('connect');
var url = require('url');

//initialize a connect object
var app = connect();

var simpleCalculator = function(req, res, next) {
    //create variable 'qs' for querystring to grab values from the url after the ?
    var qs = url.parse(req.url, true).query;

    //create variables to hold the data from qs
    var calcMethod = qs.method;
    var x = qs.x;
    var y = qs.y;

    //determine what calculation to use (addition, subtraction, division, multiplication). Give an error if they dont meet required values.
    if (calcMethod === 'add') {
        //save the type of method to display later and complete the calculation.
        calcMethod = '+';
        var total = parseInt(x) + parseInt(y);
    }
    else if (calcMethod === 'subtract') {
        calcMethod = '-';
        var total = parseInt(x) - parseInt(y);
    }
    else if (calcMethod === 'multiply') {
        calcMethod = '*';
        var total = parseInt(x) * parseInt(y);
    }
    else if (calcMethod === 'divide') {
        calcMethod = '/';
        var total = parseInt(x)/parseInt(y);
    }
    else {
        res.end('Error: need the correct format');
    }

    //display the final calculation in full with the answer
    res.end(x + ' ' + calcMethod + ' ' + y + ' = ' + total);
};

//execute the function
app.use(simpleCalculator);

// start the web server on port 3000
app.listen(3000);

// display a message that the server is running
console.log('Connect running on port 3000');
