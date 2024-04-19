 let secretNumber = Math.trunc(Math.random()*20)+1
 let score =20;
 let highscore = 0;
 console.log(secretNumber)

 document.querySelector(".check").addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        document.querySelector('.message').textContent="❌ please enter no"
    }
    if(guess==secretNumber)
    {
        document.querySelector('.message').textContent="🏆correct number"
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.background = '#60b347'
        document.querySelector(".number").style.background='#60b347'

        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
        if(score > highscore)
        {
            highscore = score ;
            document.querySelector('.highscore').textContent=highscore;
        }
    }else if(guess !== secretNumber){
       if(score > 1){
         score--
        document.querySelector('.score').textContent = score;

            // if(guess > secretNumber){
            // document.querySelector('.message').textContent ='📉 Too High';
            // }else{
            //     document.querySelector('.message').textContent = '📈 Too low';
            // }
            guess > secretNumber? document.querySelector('.message').textContent = '📉 Too High' : document.querySelector('.message').textContent ='📈 Too low'
       }else{
        document.querySelector('.message').textContent="you lose the game";
        document.querySelector('.score').textContent=0;
        document.querySelector('.number').textContent='?'
        document.querySelector('body').style.background="red"
       }
    }
    
 })
 document.querySelector(".again").addEventListener('click',function(){
    score = 20;
    document.querySelector(".score").textContent = score;
    secretNumber=Math.trunc(Math.random()*20)+1
    document.querySelector(".message").textContent="Start Guessing.."
    document.querySelector('.number').textContent='?'
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background = 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 5%, rgba(0,212,255,1) 100%)';
 })

