var now = new Date();
var start = new Date("2020-06-30");

var timeDiff = now.getTime() - start.getTime();
var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
$("#love").text(day + "일째");

var valentine = new Date("2024-02-14");
var timeDiff2 = valentine.getTime() - now.getTime();
var day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
$("#valentine").text(day2 + "일 남음");

var ms = start.getTime() + 999 * (1000 * 60 * 60 * 24);
