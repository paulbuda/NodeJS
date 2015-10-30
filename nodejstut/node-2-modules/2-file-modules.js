var mathfun = require('./mathfun');

var processResults = function(err, results, time)
{
    if (err)
    {
        console.log("Error: " + err.message);
    }
    else
    {
        console.log("the results are: "+ results + " (" + time + " ms)");
    }
};

for(var i = 0 ; i < 10 ; ++i )
{
    console.log("call for "+i);
    mathfun.evenDoubler(i,processResults);
}


console.log("----");

console.log("the 'foo' variable for module 'mathfun' = " + mathfun.foo);

console.log("the 'maxtime' variable is not exported: " +mathfun.maxTime);