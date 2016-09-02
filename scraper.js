var cheerio = require('cheerio');
var req = require('tinyreq');

req('http://www.nus.edu.sg/cors/schedule.html', function(err, body) {
  if (err) { return; }

  var $ = cheerio.load(body);
  console.log($('table:nth-child(5)').text());
});
