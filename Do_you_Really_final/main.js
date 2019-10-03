console.log('hey')




let gradientDivs = document.querySelectorAll('.gradient-div')


let deviceName = document.querySelector('#deviceName')

let names = [
	'IPAD',
	'PHONE',
	'LAPTOP',
	'WATCH',
	'TV',


]


let nameCounter = 0

setInterval(function(){
	nameCounter ++

	if(nameCounter > names.length - 1){
		nameCounter = 0
	}
	deviceName.innerText = names[nameCounter]	
},1000)


for( let counter = 0; counter < gradientDivs.length; counter ++){
	gradientDivs[counter].onclick = function(event){
		let isGradient = event.target.classList.contains('gradient_text') ||
			event.target.classList.contains('gradient-div') ||
			event.target.classList.contains('bar_gradient')
		
		if(isGradient){
			gradientDivs[counter].classList.toggle('open')

			for(let i = 0; i < gradientDivs.length; i++){
				if(i != counter){
					gradientDivs[i].classList.remove('open')
				}

			}
		}

	}



}




