//your JS code here. If required.
let target = document.getElementById("level");
function getDomLevel(element)
	{
		let level = 0;
		while(element.parentNode)
			{
				element = element.parentNode;
				level++;
			}
		return level;
	}

let domlevel = getDomLevel(target);
alert("The level of the element is: " + domLevel);