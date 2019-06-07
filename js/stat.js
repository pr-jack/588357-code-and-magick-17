'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_GAP = 50;
var TEXT_WIDTH = 16;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

//  Задаем цвет бара в зависимости от имени игрока
var fillBarColor = function (playerName) {
  var randomOpacity = (Math.random() * (1 - 0.1));
  if (playerName === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  }
  return 'rgba(0, 0, 255, ' + randomOpacity + ')';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, 45);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, 45 + FONT_GAP);

  var maxTime = getMaxElement(times);

  //  Выводим значения скорости  и имена игроков
  for (var i = 0; i < players.length; i++) {
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + FONT_GAP + (BAR_GAP + BAR_WIDTH) * i, (CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime) - 35);
    ctx.fillText(players[i], CLOUD_X + GAP + FONT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
  }

  ctx.scale(1, -1);
  ctx.translate(0, -270);

  //  Выводим бары
  for (var j = 0; j < players.length; j++) {
    ctx.fillStyle = fillBarColor(players[j]);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH + (BAR_GAP + BAR_WIDTH) * j, CLOUD_Y + GAP * 2, BAR_WIDTH, (BAR_HEIGHT * times[j]) / maxTime);
  }
};
