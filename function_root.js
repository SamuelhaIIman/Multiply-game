function load(page)
{
	//Clear everything that is in the container
	clear(container);

	//Add everything that is in the page
	container.appendChild(page.content);
}

function reload(page)
{
	//page.content is set to the original state of page.content
	page.content.innerHTML = page.originalContent.innerHTML;

	//Call the load function
	load(page);
}

function clear()
{
	while (container.firstChild) 
	{
		container.removeChild(container.firstChild);
	}
}

function hexToRgb(hex) 
{
	hex = hex.replace("#", "");
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);
	return `rgb(${r}, ${g}, ${b})`;
}

function playGameSoundtrack()
{
	const tracks = 
	[
	"assets/track1.mp3",
	"assets/track2.mp3",
	];
    // ihan vaan alustavasti pari rojalttivapaata kappaletta, saa vaihtaa jos ja kun löytyy parempia

	let currentTrackIndex = 0;

	function playNextTrack() 
	{
		const currentTrack = new Audio(tracks[currentTrackIndex]);
		currentTrack.volume = 0.1;
		currentTrack.addEventListener("ended", function() 
		{
			if (currentTrackIndex === tracks.length-1)
			{
				currentTrackIndex = 0;
				playNextTrack();
			}
			else 
			{
				currentTrackIndex = currentTrackIndex + 1;
				playNextTrack();
			}
		});
		currentTrack.play();
	}
	playNextTrack();
}

function runButtonSFX()
{
	const buttonSFX = new Audio("assets/button-pressed.mp3");
	buttonSFX.volume = 0.1;
	buttonSFX.play();
}

function runErrorSFX()
{
	const errorSFX = new Audio("assets/wrong-answer.mp3");
	errorSFX.volume = 0.1;
	errorSFX.play();
}

function runSpinwheelSFX()
{
	const errorSFX = new Audio("assets/spin_wheel.mp3");
	errorSFX.volume = 0.1;
	errorSFX.play();
}