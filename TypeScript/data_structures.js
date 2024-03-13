var numbers = [1, 0, 1, -4, 2, 3, -5, 4, 5, -5, -1, -3, 2, 0, 1, 2, -4];
console.log('Длина исходного массива: ', numbers.length);
//console.log(numbers);
console.log('Задание: Найти второй минимальный элемент массива.');
var temp_arr = numbers.slice();
temp_arr.sort(function (a, b) { return a - b; });
temp_arr = temp_arr.filter(function (item, index, array) { return array.indexOf(item) === index; });
console.log(temp_arr);
console.log('Ответ: ', temp_arr[1]);
console.log('\nДругой вариант решения.');
var min_num = (numbers[0] <= numbers[1]) ? numbers[0] : numbers[1];
var second_min_num = (numbers[0] >= numbers[1]) ? numbers[0] : numbers[1];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    if (number < min_num) {
        second_min_num = min_num;
        min_num = number;
    }
    else if (number < second_min_num && number != min_num) {
        second_min_num = number;
    }
    ;
}
;
console.log('Ответ: ', second_min_num);
