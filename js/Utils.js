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


	static  multiplicaMatriz(a, b) {
		   var aNumRows = a.length, aNumCols = a[0].length,
			  bNumRows = b.length, bNumCols = b[0].length,
			  m = new Array(aNumRows);  // initialize array of rows
			  //console.log ("A é " + aNumRows + "x" + aNumCols );
				//console.log("B é " + bNumRows + "x" + bNumCols);
			  if (aNumCols != bNumRows){
				  throw new Error("numero de colunas de A != numero de colunas de B, multiplicação impossível");
			  }
		  for (var r = 0; r < aNumRows; ++r) {
			m[r] = new Array(bNumCols); // initialize the current row
			for (var c = 0; c < bNumCols; ++c) {
			  m[r][c] = 0;             // initialize the current cell
			  for (var i = 0; i < aNumCols; ++i) {
				m[r][c] += a[r][i] * b[i][c];
			  }
			}
		  }
		  return m;
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


}
