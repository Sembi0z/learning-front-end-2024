var jsonObj=`{
	"pathToImage1": "https://i.imgur.com/2QVV23Z.png",
	"pathToImage2": "https://i.imgur.com/v3kZUPc.jpg",
	"pathToAudio": "https://download.mp3t.icu/o/Kavinsky-Nightcall.mp3",
	"textAudio": "Kavinsky - Nightcall",
	"info1": "Меня зовут Кныш Семен. Мне 20 лет. Мой дом находится в северной части станицы Павловской Краснодарского края. Я не женат. Учусь в Южном Федеральном Универститете и прихожу домой не позднее 8 вечера.",
	"info2": "Я не курю и не пью. Я ложусь спать в 11 вечера, и убеждаюсь, что я получаю ровно восемь часов сна, несмотря ни на что. Выпив стакан теплого молока и потянувшись минут двадцать перед сном, я обычно без проблем сплю до утра. Словно ребёнок я просыпаюсь утром без всякой усталости и стресса. На моём последнем осмотре мне сказали, что у меня нет никаких проблем со здоровьем.",
	"info3": "Я пытаюсь донести, что я обычный человек, который хочет жить спокойной жизнью."
}`;


var jsonObject;


function setInformation(){
	jsonObject = JSON.parse(jsonObj);
	setImage(jsonObject.pathToImage1, jsonObject.pathToImage2);
	setAudio(jsonObject.pathToAudio);
	setOtherText(jsonObject.info1, jsonObject.info2, jsonObject.info3, jsonObject.textAudio);
}

function setImage(imagePath1, imagePath2){
	let image1 = document.getElementById('image1');
	image1.src = imagePath1;
	let image2 = document.getElementById('image2');
	image2.src = imagePath2;
}

function setAudio(audioPath){
	let audio = document.getElementById('audio');
	audio.src = audioPath;
}


function setOtherText(textF, textS, textT, textAudio) {
	let textViewF = document.getElementById('text1');
	textViewF.innerHTML = textF;
	let textViewS = document.getElementById('text2');
	textViewS.innerHTML = textS;
	let textViewT = document.getElementById('text3');
	textViewT.innerHTML = textT;
	let textViewAudio = document.getElementById('textAudio');
	textViewAudio.innerHTML = textAudio;
}

window.onload = function () {
   setInformation();
};