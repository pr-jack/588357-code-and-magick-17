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
// Функция выбора имени
var getRandomNames = function () {
  var randomNames = Math.floor((Math.random() * (1 - names.length) + names.length));
  return randomNames;
};

// Функция выбора фамилии
var getRandomSurnames = function () {
  var randomSurnames = Math.floor((Math.random() * (1 - surnames.length) + surnames.length));
  return randomSurnames;
};

// Функция выбора цвета мантии
var getRandomCoatColors = function () {
  var randomCoatColors = Math.floor((Math.random() * (1 - coatColors.length) + coatColors.length));
  return randomCoatColors;
};

// Функция выбора цвета глаз
var getRandomEyesColors = function () {
  var randomEyesColors = Math.floor((Math.random() * (1 - eyesColors.length) + eyesColors.length));
  return randomEyesColors;
};

// Функция описания похожих персоонажей
var getWizards = function (length) {
  var wizardsObject = [];
  for (var i = 0; i < length; i++) {
    wizardsObject.push({
      name: names[getRandomNames()] + ' ' + surnames[getRandomSurnames()],
      coatColor: coatColors[getRandomCoatColors()],
      eyesColor: eyesColors[getRandomEyesColors()]
    });
  }
  return wizardsObject;
};

var wizards = getWizards(NUMBER_OF_WIZARDS);

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var similarListElement = setup.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');
