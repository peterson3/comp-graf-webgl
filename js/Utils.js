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

	static  multiplicaMatriz(a,b){

		if (a[0].length != b.length){
			throw new Error("numero de colunas de A != numero de linhas de B, multiplicação impossível");
		}

		var c=[];
				for (let i = 0; i < a.length; i++) {
			let r = [];
			for (let j = 0; j < b[0].length; j++) {
				let s = 0;
				for (let k = 0; k < b.length; k++) {
					s += a[i][k] * b[k][j];
				}
				r.push(s);
			}
			c.push(r);
			}

			return c;
	}

	static  exibeMatriz(m) {
	  for (var r = 0; r < m.length; ++r) {
		document.write('&nbsp;&nbsp;'+m[r].join(' ')+'<br />');
	  }
	}

	static exibeMatrizAsTable(matr){
		  console.log(matr);

			//Imprimindo Tabela de Vértices
			let mTable= "<table border=2>";
			for (var n=0; n<matr.length; n++){
				mTable += "<tr>";
				for (var m=0; m<matr[0].length; m++){
					mTable += "<td>" + matr[n][m] + "</td>";
				}
				mTable += "</tr>";
			}
			mTable += "</table>";
			console.log(mTable);
			return mTable;
	  }
	  
	static sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	static GrausParaRadianos(graus){
		return graus*(Math.PI/180);
	}
	
	static RadianosParaGraus(radianos){
		return radianos * (180/Math.PI);;
	}
}
