'use strict';

const cheerio = require('cheerio');
const req = require('tinyreq');

req('http://www.nus.edu.sg/cors/schedule.html', function(err, body) {
  if (err) { return; }

  let $ = cheerio.load(body);
  let timetable = [];
  let roundInfo = {};

  for (let i = 2; i < 10; i++) {
    roundInfo = {};
    roundInfo.round = $('table:nth-child(5) tr:nth-child('+i+') td:nth-child(1)').text();
    roundInfo.openBiddingPeriod = $('table:nth-child(5) tr:nth-child('+i+') td:nth-child(2)').text();
    roundInfo.closedBiddingPeriod = $('table:nth-child(5) tr:nth-child('+i+') td:nth-child(3)').text();
    timetable.push(roundInfo);
  }

  console.log(timetable);
});
