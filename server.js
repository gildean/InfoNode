var http = require('http'),
	os = require('os'),
	nodeStr = '<!doctype html>\n<html>\n<head>\n<title>InfoNode</title>\n'
			+ '<style>body{background:#46483E;color:#FCFCFC;text-shadow:-2px 2px 2px rgba(0,0,0,0.4);font:130% Ubuntu, Helvetica, sans-serif} #main{text-align:center} h1{color:#339900;text-shadow: -1px 1px 0 #FCFCFC, -3px 3px 2px rgba(0,0,0,0.3)}</style></head>\n'
			+ '<body>\n<div id="main"><h1>InfoNode</h1><p>Node.js ' + process.version 
			+ '<h3>Running on: ' + os.type() + ' ' + os.arch() + ' ' + os.release() + '</h3>';

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(nodeStr + '<h3>InfoNode uses: ' + (process.memoryUsage()['rss']/1000000).toFixed(2) + ' MB of memory</h3>\n<h3>Server has: ' + (os.freemem()/1000000).toFixed(0) + ' / ' + (os.totalmem()/1000000).toFixed(0) + ' MB of memory free</h3>\n'
					+ '<h4>InfoNode uptime: ' + (process.uptime().toFixed(0)/3600).toFixed(2) + ' hours</h4>\n<h4>Server uptime: ' + (os.uptime()/360).toFixed(2) + ' hours</h4>'
					+ '<h3>Server load:</h3>\n<p><strong>1min:</strong> ' + os.loadavg()[0].toFixed(4) + ', <strong>5min:</strong> ' + os.loadavg()[1].toFixed(4) + ', <strong>15min:</strong> ' + os.loadavg()[2].toFixed(4) + '</p>'
					+ '</div></body></html>\n');
}).listen(1337);
