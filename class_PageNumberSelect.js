class PageNumberSelect extends Page
{
	constructor()
	{
		//Calling motherclass
		super();
		
		this.contentString += '<h1 class="otsikko">K E R – T O – T A U – L U</h1>';
		this.contentString += '<h1 class="otsikko">P E - L I</h1>';
		
		this.contentString += '<h2 id="alaotsikko" class="alaotsikko">V A – L I T – S E</h2>';
		this.contentString += '<h2 id="alaotsikko" class="alaotsikko">K E R – T O – T A U – L U</h2>';
		
		this.contentString += '<div class="rivi">';
		
		for(let i = 0; i < numbers.length; i++)
		{
			this.contentString += '<button class="nappula" value="'+numbers[i]+'" style="background-color:'+colorsdifficulty[i]+'" onclick="page1.click(this)">'+numbers[i]+'</button>';
		}
		
		this.contentString += '</div>';
		
		//Add contentString to the content(div)
		this.content.innerHTML += this.contentString;
		
		//Save contents of the page
		this.save();
	}
	
	click(e)
	{
		console.log(e.value + " kertotaulu valittu");
		valittukertotaulu = Number(e.value);
		e.classList.add('fade-out');
		runButtonSFX();
		setTimeout(function() 
		{
			load(page2, playGameSoundtrack());
		}, 1000);
	}
}