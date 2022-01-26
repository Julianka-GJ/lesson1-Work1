"use strict";

var square = prompt('Введите площадь основы цилиндра S');
var radius = prompt('Введите радиус цилиндра R');
var height = prompt('Введите высоту цилиндра H');
volume = Math.PI * Math.pow(radius, radius) * height;
document.write('<br><br> ************** <br><br> Обьем цилиндра с площадью основы *S* = ' + square, ', радиусом *R* = ' + radius, ' и высотой *H* = ' + height, ', равен: <br><br> -------------------- <br><br> V = ' + volume, '<br><br> -------------------- <br><br> end.');