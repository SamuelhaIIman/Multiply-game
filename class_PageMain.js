class PageMain extends Page
{
	constructor()
	{
		super();
		
		let tcontents = "";
		this.nykyinenPelaaja = 1;
		window.p1buttons = 0;
		window.p2buttons = 0;
		
		//6x7 pelilauta, jossa random numeroita sisällä.
		for(let row = 0; row < 6; row++)
		{
			
		tcontents += '<tr>';
		  
			for(let col = 0; col < 7; col++)
			{
				//' + row + '' + col + '
			tcontents += '<td id="' + row + '' + col + '" onclick="page3.click(' + row + ',' + col + ')">';
			tcontents += Math.floor(Math.random() * 19);
			tcontents += '</td>';
			}
		  tcontents += '</tr>';
		}
		
		//isoDiv
		this.contentString += '<div class="isoDiv">';
			//toinenDiv
			
			this.contentString += '<div class="toinenDiv" id ="peliLautaVasen">';
				this.contentString += '<h2 id="peliOtsikko">Ker-to-tau-lu-spin-ne-ri</h2>';
				this.contentString += '<p id="ohje">';
				this.contentString += "Pyö-räy-tä spin-ne-riä ja ker-ro saa-ma-si lu-ku spin-ne-rin kes-kel-lä o-le-val-la nu-me-rol-la. Vä-ri-tä oi-ke-a vas-ta-us. Jos vas-tauk-se-si on jo vä-ri-tet-ty, niin ker-ro kym-me-nel-lä spin-ne-rin kes-kel-lä o-le-va nu-me-ro ja vä-ri-tä saa-ma-si vas-ta-us. Jos vä-ri-tät vä-ri-ruu-dun, toi-mi seu-raa-vas-ti:";
				this.contentString += '</p>';
				this.contentString += '<div id="tehtavaRivi">';
				this.contentString += '<p id="lisaTehtava1"></p>';
				this.contentString += '<div id="tehtavaYmpyra1"></div>';
				this.contentString += '<p id= "lisaTehtava2"></p>';
				this.contentString += '<div id="tehtavaYmpyra2"></div>'; 
				this.contentString += '<p id="lisaTehtava3"></p>';
				this.contentString += '<div id="tehtavaYmpyra3"></div>';
				this.contentString += '</div>';
				
				this.createSpinner();
			this.contentString += '</div>';
			//toinenDiv
			this.contentString += '<div class="toinenDiv" id="peliLautaOikea">';
				

				this.contentString += '<div class="rivii">';
				this.contentString += '<p id="pelaajavari">Pe-laa-ja 1 vä-ri: </p>';
				this.contentString += '<div class="pallo" id="colorBox1"></div>';
				this.contentString += '<p id="pelaajavari"> Pe-laa-ja 2 vä-ri: </p>';
				this.contentString += '<div class="pallo" id="colorBox2"></div>';
				this.contentString += '</div>';

				//pelilauta
				this.contentString += '<div id="pelilauta"></div>';
			this.contentString += '</div>';
			this.contentString += '<div class="toinenDiv" id="peliLautaKeski">';
				this.contentString += '<div id="laskuLaatikko"></div>';
			this.contentString += '</div>';
		this.contentString += '</div>';
		
		//Add contentString to the content(div)
		this.content.innerHTML += this.contentString;
		
		//Save contents of the page
		this.save();
	}
	
	afterLoad()
	{	
		document.body.style.background = colors[p1color];

		//Päivitetään oikea kertotaulu spinnerin keskelle
		let n = document.getElementById("spnBtn");

		n.innerHTML = valittukertotaulu;

		//Päivitetään pelaajien värit oikein	
		let c1 = document.getElementById("colorBox1");
		let c2 = document.getElementById("colorBox2");

		c1.style.backgroundColor = colors[p1color];
		c2.style.backgroundColor = colors[p2color];
	
			
		page3.createTable();
	}
	
	createTable()
	{
		let table = document.createElement("TABLE");
		let e = document.getElementById("pelilauta");
		e.innerHTML = "";
		let tcontents = "";
		let kertotaulu = kertotaulu2;		
		table.id = "pelilauta";
		
		switch(valittukertotaulu)
		{
			case 2:
				kertotaulu = kertotaulu2;
				break;
				
			case 3:
				kertotaulu = kertotaulu3;
				break;
				
			case 4:
				kertotaulu = kertotaulu4;
				break;
				
			case 5:
				kertotaulu = kertotaulu5;
				break;
				
			case 10:
				kertotaulu = kertotaulu10;
				break;
				
			default:
				break;
		}
		
		//6x7 pelilauta, jossa random numeroita sisällä.
		for(let row = 0; row < 6; row++)
		{
			tcontents += '<tr>';
			  
				for(let col = 0; col < 7; col++)
				{
					let number = kertotaulu[Math.floor(Math.random() * 10)];
					tcontents += '<td id="' + row + '' + col + '" onclick="page3.click(' + row + ',' + col + ')">';
					tcontents += number;
					tcontents += '</td>';
				}
				tcontents += '</tr>';
		}
		
		table.innerHTML = tcontents;
		
		e.appendChild(table);

		document.getElementById("01").style.backgroundColor = "#ff33cc";
		document.getElementById("32").style.backgroundColor = "#ff33cc";
		document.getElementById("45").style.backgroundColor = "#ffff66";
		document.getElementById("55").style.backgroundColor = "#ffff66";
		document.getElementById("26").style.backgroundColor = "#996633";
		document.getElementById("21").style.backgroundColor = "#996633";

	}
	updateTasks() 
	{
	//valitaan satunnaisesti kolme tehtävää taulukosta
	const tehtavat = ["Pun-ner-ra", "Kink-kaa", "Ta-sa-hy-pi", "Kyyk-ky-hy-pyt", "Kyl-ki-ve-ny-tys", "X-Hy-pyt", "Vat-sa-ru-tis-tus", "Var-pail-le-nou-su", "Kyyk-ky", "Har-ti-an-nos-tot", "Kar-hu-kä-ve-ly", "Pol-ven-nos-to", "Sam-mak-ko-hy-pyt", "Ra-pu-kä-ve-ly", "Rei-si-ve-ny-tys"];
    let randomIndexes = [];
    while (randomIndexes.length < 3) 
	{
		const randomIndex = Math.floor(Math.random() * tehtavat.length);
		if (!randomIndexes.includes(randomIndex)) 
		{
			randomIndexes.push(randomIndex);
        }
	}
        document.getElementById('lisaTehtava1').innerHTML = tehtavat[randomIndexes[0]];
        document.getElementById('lisaTehtava2').innerHTML = tehtavat[randomIndexes[1]];
        document.getElementById('lisaTehtava3').innerHTML = tehtavat[randomIndexes[2]];
	} 

	
	createSpinner()
	{
		//spinContainer
		this.contentString += '<div class="container">';
			this.contentString += '<div class="spinBtn" id="spnBtn" onclick="page3.spinnerClick()">Spin</div>';
			this.contentString += '<div class="wheel">';

				this.contentString += '<div class="number" style="--i:1.75;--clr:#db7093">';
					this.contentString += '<span>9</span>';
				this.contentString += '</div>';
				this.contentString += '<div class="number" style="--i:2.75;--clr:#20b2aa">';
					this.contentString += '<span>8</span>';
				this.contentString += '</div>';
				this.contentString += '<div class="number" style="--i:3.75;--clr:#d63e92">';
					this.contentString += '<span>7</span>';
				this.contentString += '</div>';
				this.contentString += '<div class="number" style="--i:4.75;--clr:#daa520">';
					this.contentString += '<span>6</span>';
				this.contentString += '</div>';
				this.contentString += '<div class="number" style="--i:5.75;--clr:#ff340f">';
					this.contentString += '<span>5</span>';
				this.contentString += '</div>';
				this.contentString += '<div class="number" style="--i:6.75;--clr:#ff7f50">';
					this.contentString += '<span>4</span>';
				this.contentString += '</div>';
				this.contentString += '<div class="number" style="--i:7.75;--clr:#3cb371">';
					this.contentString += '<span>3</span>';
				this.contentString += '</div>';
				this.contentString += '<div class="number" style="--i:8.75;--clr:#4169e1">';
					this.contentString += '<span>2</span>';
				this.contentString += '</div>';
				this.contentString += '<div class="number" style="--i:9.75;--clr:#ff3399">';
					this.contentString += '<span>1</span>';
				this.contentString += '</div>';
				this.contentString += '<div class="number" style="--i:0.75;--clr:#33ff33">';
					this.contentString += '<span>0</span>';
				this.contentString += '</div>';
			this.contentString += '</div>';
		this.contentString += '</div>';
	}
	
	spinnerClick()
	{
		//Ei voi pyöräyttää kun peli on päättynyt
		if(this.countNumberOfUncoloredTiles() <= 0)
		{
			console.log("Pelaaja yritti pyörättää vaikka peli on jo päättynyt");
			return "";
		}

		//Ei voi pyöräyttää kahta kertaa peräkkäin
		if(spinned)
		{
			console.log("Pelaaja yritti pyörättää uudestaan");
			return "";
		}

		spinned = true;

		let wheel = document.querySelector('.wheel');
		let numerot = document.createElement("p");
		numerot.innerHTML = "";
		let e = document.getElementById("laskuLaatikko");
		while (e.firstChild) 
		{
			e.removeChild(e.firstChild);
		}	
		
		let value;
		let degrees;
		let number;

		check:
		while(true)
		{
			value = Math.ceil(Math.random() * 3600);
			degrees = value % 360;
			number = Math.floor(degrees / 36);

			console.log("Arvottiin: " + number);

			let p1 = hexToRgb(colors[p1color]);
			let p2 = hexToRgb(colors[p2color]);
			
			setTimeout(() => 
			{
				numerot.innerHTML = number + " x " + valittukertotaulu;
				e.appendChild(numerot);
			}, 5000);

			for(let row=0; row<6; row++)
			{
				for(let col=0; col<7; col++)
				{
					let td = document.getElementById(row + '' + col);
					let answer = Number(td.innerText);
					let color = td.style.backgroundColor;

					//Jos löytyy oikea vastaus
					if((number*valittukertotaulu) == answer)
					{
						if(color != p1 && color != p2)
						{
							console.log("Oikea vastaus at: " + row + ":" + col);
							break check;
						}
						else
						{
							//console.log("Löytyi jo väritetty vastaus " + row + ":" + col);
						}
					}
				}
			}
		}
		e.appendChild(numerot);
		wheel.style.transform = "rotate(" + value + "deg)";
		value = 0;
		value += Math.ceil(Math.random() * 3600);
		//console.log(value);
  	//console.log(number);
		
		//console.log(number + ' * ' + valittukertotaulu);
		
		this.nimittaja = number;
		runSpinwheelSFX();
	}
	
	click(row,col)
	{
		//console.log("Pelaaja " + this.nykyinenPelaaja + " klikkasi ruutua paikassa (" + row + "," + col + ")");

		//Katsotaan onko peli aloitettu
		if(!spinned)
		{
			console.log("Pelaaja yritti aloittaa pyöräyttämättä");
			return "";
		}
		
		//Etsitään klikattu elementti taulukosta
		let td = document.getElementById(row + '' + col);

		//Mitä numeroa elementti edustaa
		let value = Number(td.innerText);

		//Jos pelaaja painaa jo väritettyä nappulaa
		if (td.style.backgroundColor === hexToRgb(colors[p1color]) || td.style.backgroundColor === hexToRgb(colors[p2color]))
		{
			console.log("Pelaaja yritti painaa jo väritettyä nappulaa");
			return "";
		}

		//Katsotaan menikö lasku oikein
		if(value == this.nimittaja * valittukertotaulu)
		{
			//Oikein
			switch (this.nykyinenPelaaja)
			{
				case 1:
					td.style.backgroundColor = colors[p1color];
					p1buttons++;
					break;
					
				case 2:
					td.style.backgroundColor = colors[p2color];
					p2buttons++;
					break;
					
				default:
					console.log("jotakin meni pieleen");
					break;
			}
			runButtonSFX();
			let tehtava;
			
			if ((row === 0 && col === 1) || (row === 3 && col === 2))
			{
				tehtava = document.getElementById('lisaTehtava1').textContent;
				alert(tehtava);
			}
			
			if ((row === 2 && col === 1) || (row === 2 && col === 6))
			{
				tehtava = document.getElementById('lisaTehtava3').textContent;
				alert(tehtava);
			}
			
			if ((row === 4 && col === 5) || (row === 5 && col === 5))
			{
				tehtava = document.getElementById('lisaTehtava2').textContent;
				alert(tehtava);
			}
			//console.log(p1buttons, p2buttons);
		}
		else
		{
			console.log("Vastaus on väärä");
			runErrorSFX();
		}
		
		//Pelaaja vaihtaa vuoroa
		if(this.nykyinenPelaaja === 1)
		{
			//console.log("Pelaaja vaihtuu 1 --> 2");
			this.nykyinenPelaaja = 2;
			document.body.style.background = colors[p2color];
		}
		else
		{
			//console.log("Pelaaja vaihtuu 2 --> 1");
			this.nykyinenPelaaja = 1;
			document.body.style.background = colors[p1color];
		}

		this.checkWin(p1buttons, p2buttons);
		spinned = false;
	}

	checkWin(p1buttons, p2buttons) 
	{
		if(this.countNumberOfUncoloredTiles() <= 0)
		{
			if (p1buttons > p2buttons)
			{
				alert("P E - L A A - J A  Y K - S I  V O I T - T I");
			}
			if (p1buttons < p2buttons)
			{
				alert("P E - L A A - J A  K A K - S I  V O I T - T I");
			}
			if (p1buttons === p2buttons)
			{
				alert("T A - S A - P E - L I");
			}
			
			document.body.style.background = null;
			reload(page1);
		}
	}

	countNumberOfUncoloredTiles()
	{
		let count = 0;
		let p1 = hexToRgb(colors[p1color]);
		let p2 = hexToRgb(colors[p2color]);

		for(let row=0; row<6; row++)
		{
			for(let col=0; col<7; col++)
			{
				let td = document.getElementById(row + '' + col);
				let color = td.style.backgroundColor;

				if(color != p1 && color != p2)
				{
					count ++;
				}
			}
		}
		//console.log("Jäljellä olevat tyhjät: " + count);
		return count;
	}
}