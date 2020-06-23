const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener('submit', e =>{
	e.preventDefault();
	let score = 0;
	let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
	userAnswers.forEach((answer, index)=>{
		if(answer===correctAnswers[index]){
			score += 25;
		};
	});
	//show the result on a page
	scrollTo(0,0);
	
	result.classList.remove('d-none');
	let output = 0;
	const timer = setInterval(()=>{
    result.querySelector('span').textContent =`${output} %`;
    if (output===score) {
    	clearInterval(timer);
    } else{
    	output++
    }
	}, 10)

})


// explanation on set interval and clear interval, set time out methods
/*let i = 0;
let timer = setInterval(()=>{
	console.log('hello!')
	i++;
	if(i===5){
		clearInterval(timer);

	}
}, 1000)*/

/*setTimeout(()=>{
	console.log('hello')
}, 1000)*/


/*setInterval(()=>{
	console.log('hello!')
}, 2000)*/
