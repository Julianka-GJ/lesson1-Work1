"use strict";

var square = prompt('Введите площадь основы цилиндра S');
var radius = prompt('Введите радиус цилиндра R');
var height = prompt('Введите высоту цилиндра H');
var line = '--------------------';
var star = '**************';
var br = '<br><br>';
volume = Math.PI * Math.pow(radius, 2) * height;
document.write(br, star, br, 'Обьем цилиндра с площадью основы *S* = ' + square, ', радиусом *R* = ' + radius, ', и высотой *H* = ' + height, ', равен:' + br, line, br, 'V = ' + volume, br, line, br, 'end.');