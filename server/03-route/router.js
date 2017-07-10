function send(){
	console.log('/send ...');
}

function start(){
	console.log('/start ...');
}

//associative array
var handlers = {
	'/send':send,
	'/start':start,
	'/':start
}

function route(pathname) {
    console.log("Route this request: " + pathname);
    if (typeof handlers[pathname]=='function') // make sure the type of pathname's return value is a 'function'
    	return handlers[pathname](); // objects can be associative array

    console.log('API undefined');
}

exports.route = route;