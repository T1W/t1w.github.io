const chocolateToEat = document.getElementById("chocolateToEat");
chocolateToEat.style.display = "none";

const chocolateImages = {
	"mint": "chocolate/mintchocolate.png",
	"strawberry": "chocolate/strawberrychocolate.png",
	"pineapple": "chocolate/pineapplechocolate.png"
}

const heartImages = ["images/hearts/heartred.svg", "images/hearts/heartpink.svg", "images/hearts/heartgreen.svg", "images/hearts/heartcyan.svg", "images/hearts/heartpurple.svg"];

const piggyImages = {
	"jellypig": {
		"normal": "images/pigs/jellypig.png",
		"happy": "images/pigs/jellypighappy.png"
	},
	"strawberrypig": {
		"normal": "images/pigs/strawberrypig.png",
		"happy": "images/pigs/strawberrypighappy.png"
	},
	"pineapplepig": {
		"normal": "images/pigs/pineapplepig.png",
		"happy": "images/pigs/pineapplepighappy.png"
	}
}

const favoriteChocolates = {
	"jellypig": "mint",
	"strawberrypig": "strawberry",
	"pineapplepig": "pineapple"
}

var isDraggingChocolate = false;
var chocolateToEatType = "mint";
var chocolateOffsetX = 10;
var chocolateOffsetY = 10;

var scrollTimer = -1;
var scrollMouseY = -1;

const chocolates = document.querySelectorAll(".chocolate");
const piggies = document.querySelectorAll(".piggy");
const speechBubbleList = document.querySelectorAll(".speechBubble");
const heartList = document.querySelectorAll(".heart");

if(piggies.length != speechBubbleList.length || piggies.length != heartList.length) {
	throw new Error("Piggy count not equal to speech bubble or heart count")
}

const speechBubbleMessagesEnglish = {
	"jellypig": {
		"click": ["Oink oink!", "Oinky!", "I'm Jellypig!"],
		"mint": ["Yummy! Mint!", "Oink oink! So yummy!", "Tasty and sweet chocolate!", "I love mint chocolate!", "My favorite chocolate!", "Yummy! I love it! 🩷"],
		"other": ["Yummy!", "Oink oink! Yummy!", "Yummy chocolate!"]
	},
	"strawberrypig": {
		"click": ["Oink!", "Oinky!", "I'm Strawberry Pig!"],
		"strawberry": ["Yummy! Strawberry!", "Yummy! Oink oink!", "So sweet and delicious!", "Chocolate strawberries are delicious!", "I love strawberries!", "Oink! Yummy! ❤️"],
		"other": ["Yummy!", "Oink oink! Yummy!", "Yummy chocolate!"]
	},
	"pineapplepig": {
		"click": ["Oink!", "Oink oink!", "I am Pineapple Pig!"],
		"pineapple": ["Yummy! Pineapple!", "Oink! Yummy!", "Fresh pineapple is the best!", "I love pineapple!", "Pineapple chocolate!", "Oink oink oink! 💚"],
		"other": ["Yummy!", "Oink oink! Yummy!", "Yummy chocolate!"]
	}
}

const speechBubbleMessagesChinese = {
	"jellypig": {
		"click": ["Oink oink!", "Oinky!", "我是条猪!"],
		"mint": ["薄荷巧克力真好吃！", "Oink oink! 好好吃！", "Oink! 好清凉，好甜！", "我喜欢吃薄荷巧克力！", "我最爱吃的巧克力！", "太好吃了！ 🩷"],
		"other": ["好吃！", "Oink oink! 很好吃！", "好吃的巧克力！"]
	},
	"strawberrypig": {
		"click": ["Oink!", "Oinky!", "我是草莓猪！"],
		"strawberry": ["好好吃的草莓！", "好好吃！Oink oink!", "Oink oink! 味道很甜！", "巧克力草莓特别好吃！", "最好吃的巧克力草莓！", "好吃的不得了！ ❤️"],
		"other": ["好吃！", "Oink oink! 很好吃！", "好吃的巧克力！"]
	},
	"pineapplepig": {
		"click": ["Oink!", "Oink oink!", "我是菠萝猪！"],
		"pineapple": ["我好喜欢吃菠萝！", "Oink! 这么好吃！很香！", "好新鲜！好好吃！", "菠萝巧克力是我最喜欢的！", "世界上最好吃的菠萝！", "Oink oink oink! 💚"],
		"other": ["好吃！", "Oink oink! 很好吃！", "好吃的巧克力！"]
	}
}

var speechBubbleMessages;

if(LANGUAGE == "chinese") {
	speechBubbleMessages = speechBubbleMessagesChinese;
} else {
	speechBubbleMessages = speechBubbleMessagesEnglish;
}

const speechBubbles = {};
const hearts = {};

const speechBubbleKeyframes = [{"opacity": 0, "transform": "translateY(20px)"}, {"opacity": 1, "transform": "translateY(-5px)"}, {"transform": "translateY(0px)"}];
const speechBubbleKeyframesActive = [{"transform": "translateY(-5px)"}, {"transform": "translateY(0px)"}];
const speechBubbleKeyframesBottom = [{"opacity": 0, "transform": "translateY(-20px)"}, {"opacity": 1, "transform": "translateY(5px)"}, {"transform": "translateY(0px)"}];
const speechBubbleKeyframesActiveBottom = [{"transform": "translateY(5px)"}, {"transform": "translateY(0px)"}];
const speechBubbleFadeOut = [{"opacity": 1}, {"opacity": 0}];
const speechBubbleTiming = {"duration": 200, "easing": "ease-in-out"};
const speechBubbleTimingFadeOut = {"duration": 25};
const speechBubbleDuration = 3000;

const heartKeyframes = [{"opacity": 1, "transform": "translateY(0px)"}, {"opacity": 1, "transform": "translateY(-25px)"}, {"opacity": 0, "transform": "translateY(-50px)"}];
const heartTiming = {"duration": 500, "easing": "ease-out"};

for(let i = 0; i<piggies.length; i++) {
	let bubble = speechBubbleList[i];
	let piggy = bubble.dataset.piggy;
	speechBubbles[piggy] = {
		"bubble": bubble,
		"timeoutID": -1,
		"lastMessageType": "none",
		"lastMessageIndex": 1,
		
		isActive() {
			return this.timeoutID > 0;
		}
	}
	
	let heart = heartList[i];
	hearts[piggy] = heart;
}

function changeDragChocolate(chocolateType) {
	let image = chocolateImages[chocolateType];
	if(image === undefined) {
		image = chocolateImages["mint"];
	}
	chocolateToEat.src = image;
}

function moveChocolate(event) {	
	let pixelsLeft = event.clientX - chocolateOffsetX;
	let pixelsTop = event.clientY - chocolateOffsetY;
	moveChocolateTo(pixelsLeft, pixelsTop);
	
	scrollIfNearEdge(event.clientY, event.pointerType);
}

function moveChocolateTo(x, y) {
	chocolateToEat.style.left = x + "px";
	chocolateToEat.style.top = y + "px";
}

/* https://www.bennadel.com/blog/3460-automatically-scroll-the-window-when-the-user-approaches-the-viewport-edge-in-javascript.htm */

function scrollIfNearEdge(mouseY, pointerType) {
	
	let windowHeight = window.innerHeight;
	let edgeWidth = 25;
	
	if(pointerType == "touch") {
		edgeWidth = 55;
	}
	
	if(windowHeight <= edgeWidth*2) {
		edgeWidth = Math.floor(windowHeight/2)-5;
	}
	
	if(windowHeight <= 5) {
		edgeWidth = 0;
	}
	
	let upperBound = edgeWidth;
	let lowerBound = window.innerHeight - edgeWidth;
	
	if(pointerType == "touch") {
		scrollIfNearEdgeTouchscreen(mouseY, upperBound, lowerBound);
		return;
	}
	
	if(mouseY > upperBound && mouseY < lowerBound || scrollMouseY != mouseY) {
		clearInterval(scrollTimer);
		scrollTimer = -1;
	}
	
	if(mouseY < upperBound && scrollTimer == -1) {
		scrollTimer = setInterval(function() {
			window.scrollBy(0, -(upperBound - mouseY));
		}, 10);
	} else if(mouseY > lowerBound && scrollTimer == -1) {
		scrollTimer = setInterval(function() {
			window.scrollBy(0, (mouseY - lowerBound));
		}, 10);
	}
	
	scrollMouseY = mouseY;
}

function scrollIfNearEdgeTouchscreen(mouseY, upperBound, lowerBound) {
	if(mouseY < upperBound) {
		window.scrollBy(0, -10);
	} else if(mouseY > lowerBound) {
		window.scrollBy(0, 10);
	}
}

function piggyReact(piggy, ateChocolate) {

	let pigName = piggy.dataset.piggy;
	let speechBubble = speechBubbles[pigName].bubble;
	let heart = hearts[pigName];
	
	if(ateChocolate) {
		piggy.src = piggyImages[pigName].happy;
	} else {
		piggy.src = piggyImages[pigName].normal;
	}
	
	let messageType = ateChocolate ? chocolateToEatType : "click";
	changeSpeechBubble(pigName, messageType);
	
	speechBubble.style.top = "-55px";
	speechBubble.style.display = "block";
	
	let speechBubbleBounds = speechBubble.getBoundingClientRect();
	let bottom = false;
	
	if(speechBubbleBounds.top < -5) {
		let piggyBounds = piggy.getBoundingClientRect();
		let piggyHeight = piggyBounds.bottom - piggyBounds.top;
		let topValue = 15 + piggyHeight;
		speechBubble.style.top = topValue + "px";
		bottom = true;
	}
	
	let speechBubbleAnimation = speechBubbleKeyframes;
	
	if(bottom) {
		speechBubbleAnimation = speechBubbleKeyframesBottom;
	}
	
	if(speechBubbles[pigName].isActive()) {
		if(bottom) {
			speechBubbleAnimation = speechBubbleKeyframesActiveBottom;
		} else {
			speechBubbleAnimation = speechBubbleKeyframesActive;
		}
	}
	
	speechBubble.animate(speechBubbleAnimation, speechBubbleTiming);
	
	if(ateChocolate && chocolateToEatType == favoriteChocolates[pigName]) {
		heart.src = heartImages[Math.floor(Math.random()*heartImages.length)];
		heart.animate(heartKeyframes, heartTiming);
	}
	
	if(speechBubbles[pigName].isActive()) {
		clearTimeout(speechBubbles[pigName].timeoutID);
	}
	
	var hideBubble = setTimeout(function() {
		let fadeOutAnimation = speechBubble.animate(speechBubbleFadeOut, speechBubbleTimingFadeOut);
		fadeOutAnimation.onfinish = (event) => {
			speechBubble.style.display = "none";
		}
		speechBubbles[pigName].timeoutID = -1;
		piggy.src = piggyImages[pigName].normal;
	}, speechBubbleDuration);
	
	speechBubbles[pigName].timeoutID = hideBubble;
}

function changeSpeechBubble(pigName, messageType) {
	let speechBubble = speechBubbles[pigName].bubble;
	
	let messageSet = speechBubbleMessages[pigName][messageType];
	if(messageSet === undefined) {
		messageSet = speechBubbleMessages[pigName]["other"];
	}
	
	let messageCount = messageSet.length;
	let messageIndex = 0;
	
	if(speechBubbles[pigName].lastMessageType == messageType) {
		let indexToSkip = speechBubbles[pigName].lastMessageIndex;
		messageIndex = Math.floor(Math.random()*(messageCount-1));
		if(messageIndex >= indexToSkip) {
			messageIndex += 1;
		}
	} else {
		messageIndex = Math.floor(Math.random()*messageCount);
	}
	
	speechBubbles[pigName].lastMessageIndex = messageIndex;
	speechBubbles[pigName].lastMessageType = messageType;
	
	let message = messageSet[messageIndex];
	speechBubble.innerText = message;
}

for(let i = 0; i<piggies.length; i++) {
	let piggy = piggies[i];
	piggy.addEventListener("click", (event) => {
		piggyReact(piggy, false);
	});
}

for(let i = 0; i<chocolates.length; i++) {
	let chocolate = chocolates[i];
	chocolate.addEventListener("pointerdown", (event) => {
		event.preventDefault();
		
		let chocolateType = event.target.dataset.type;
		changeDragChocolate(chocolateType);
		isDraggingChocolate = true;
		chocolateToEatType = chocolateType;
		
		chocolateOffsetX = event.offsetX;
		chocolateOffsetY = event.offsetY;
		
		chocolateToEat.style.display = "block";

		moveChocolateTo(event.clientX - chocolateOffsetX, event.clientY - chocolateOffsetY);
		
		window.addEventListener("pointermove", moveChocolate);
	});
}

function endDraggingChocolate(event) {
	window.removeEventListener("pointermove", moveChocolate);
	clearInterval(scrollTimer);
	
	if(!isDraggingChocolate) {
		return;
	}
	
	isDraggingChocolate = false;
	chocolateToEat.style.display = "none";
	
	let elements = document.elementsFromPoint(event.clientX, event.clientY);
	let foundPiggy = false;
	let piggy;

	for(let i = 0; i<elements.length; i++) {
		for(let j = 0; j<piggies.length; j++) {
			if(elements[i] == piggies[j]) {
				piggy = elements[i];
				foundPiggy = true;
				break;
			}
		}
	}
	
	if(foundPiggy) {
		piggyReact(piggy, true);
	}
}

window.addEventListener("pointerup", endDraggingChocolate);
window.addEventListener("pointercancel", endDraggingChocolate);

window.addEventListener("touchmove", (event) => {
	if(isDraggingChocolate) {
		event.preventDefault();
	}
}, {passive: false});