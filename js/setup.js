'use strict';

var NUMBER_OF_WIZARDS = 4;

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
// Функция выбора случайного числа
var getRandomItem = function (count) {
  var randomItem = Math.floor((Math.random() * (1 - count) + count));
  return randomItem;
};

// Функция описания похожих персоонажей
var getWizards = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    wizards.push({
      name: names[getRandomItem(names.length)] + ' ' + surnames[getRandomItem(surnames.length)],
      coatColor: coatColors[getRandomItem(coatColors.length)],
      eyesColor: eyesColors[getRandomItem(eyesColors.length)]
    });
  }
  return wizards;
};

var wizards = getWizards(NUMBER_OF_WIZARDS);

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var similarListElement = setup.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');
