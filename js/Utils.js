class Utils{
	
	static getRandomColor(){
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var k=0; k<6; k++){
			color += letters[Math.floor(Math.random()*16)];
		}
		return color;
	}
	
	static getRandomInt (min, max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
}