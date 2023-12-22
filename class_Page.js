class Page
{
	/*
		All individual page classes must inherit from this class.
		You can add stuff here that is used by all the page classes.
	*/

	constructor()
	{
		//This variable is used to store all the info about the page
		this.content = document.createElement("div");
		this.content.id = "content";
		this.contentString = "";
		this.originalContent = document.createElement("div");
	}

	save()
	{
		//This variable can be used to return the page to the original look
		this.originalContent.innerHTML = this.content.innerHTML;
	}
}

/*
class PageExample extends Page
{
	constructor()
	{
		super();
		
		//Your code
		
		//Use this if this.contentString is used
		this.content.innerHTML += this.contentString;
		
		//Save contents of this page
		this.save();
	}
}
*/