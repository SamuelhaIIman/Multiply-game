class PageColorSelect extends Page
{
	constructor()
	{
		//Calling motherclass
		super();
		
		this.contentString += '<h2 class="otsikko">V A - L I T - S E  &nbsp; V Ä - R I</h2>';
		
		this.contentString += '<p class="pelaajanimi">P E - L A A - J A &nbsp; Y K - S I</p>';
		
		this.contentString += '<div class="ylanapit">';
		
		for(let i = 0; i < 7; i++)
		{
			this.contentString += '<button class="nappula1" value="' + i + '" style="background-color:' + colors[i] + '" onclick="page2.p1color(this,' + i + ')">' + i + '</button>';
		}
		
		this.contentString += '</div>';
		
		this.contentString += '<p class="pelaajanimi">P E - L A A - J A &nbsp; K A K - S I</p>';
		
		this.contentString += '<div class="alanapit">';
		
		for(let i = 0; i < 7; i++)
		{
			this.contentString += '<button class="nappula1" value="' + i + '" style="background-color:' + colors[i] + '" onclick="page2.p2color(this,' + i + ')">' + i + '</button>';
		}
		
		this.contentString += '</div>';
		
		this.contentString += '<div class="rivi">';
		
		this.contentString += '<button class="nappula_l" onclick="page2.click()">A - L O I - T A</button>';
		
		this.contentString += '</div>';
		
		//Add contentString to the content(div)
		this.content.innerHTML += this.contentString;
		
		//Save contents of the page
		this.save();
	}
	
	click()
	{			
		if(p1color == undefined || p2color == undefined)
		{
			runErrorSFX();
			alert("V A - L I T - K A A  V Ä - R I T");
			return "";
		}
		
		if(p1color == p2color)
		{
			runErrorSFX();
			alert("V A - L I T - K A A  E - R I  V Ä - R I T");
			return "";
		}
		
		runButtonSFX();
		load(page3);
		page3.afterLoad();
		page3.updateTasks();
	}
	
	p1color(e, color_id)
	{
		let checked = document.getElementsByClassName("clicked1");
		
		if(checked[0] !== undefined)
		{
			checked[0].classList.toggle("clicked1");
		}
		
		e.classList.toggle("clicked1");
		p1color = color_id;
		runButtonSFX();
	}
	
	p2color(e, color_id)
	{
		let checked = document.getElementsByClassName("clicked2");
		
		if(checked[0] !== undefined)
		{
			checked[0].classList.toggle("clicked2");
		}
		
		e.classList.toggle("clicked2");
		p2color = color_id;
		runButtonSFX();
	}
}