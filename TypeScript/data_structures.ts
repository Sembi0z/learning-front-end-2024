let numbers: number[] = [1, 0, 1, -4, 2, 3, -5, 4, 5, -5, -1, -3, 2, 0, 1, 2, -4];
console.log('Длина исходного массива: ', numbers.length);
//console.log(numbers);

console.log('Задание: Найти второй минимальный элемент массива.');

let temp_arr: number[] = numbers.slice();
temp_arr.sort((a,b) => a - b); 
temp_arr = temp_arr.filter((item, index, array) => array.indexOf(item) === index);
console.log(temp_arr);
console.log('Ответ: ', temp_arr[1]);

console.log('\nДругой вариант решения.')
let min_num: number = (numbers[0] <= numbers[1]) ? numbers[0] : numbers[1];
let second_min_num: number = (numbers[0] >= numbers[1]) ? numbers[0] : numbers[1];

for(let number of numbers){
	if (number < min_num){
		second_min_num = min_num;
		min_num = number;
	} else if (number < second_min_num && number != min_num) {
		second_min_num = number;
	};
};

console.log('Ответ: ', second_min_num);