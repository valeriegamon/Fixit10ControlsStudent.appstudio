rbnDescribe.onclick=function(word){  
    switch(rbnDescribe.value) {
          case 0:
          lblDescribeYou.value= `I would agree that you are a  'Optimistic' person too!`
          break;
          case 1:
          lblDescribeYou.value= `I would agree that you are a  'Pessimistic' person too!`
          break;
          case 2:
          lblDescribeYou.value= `I would agree that you are a  'Trusting' person too!`
          break;
          case 3:
          lblDescribeYou.value= `I would agree that you are a  'Envious' person too!`
          break;
    }  
}

btnFavExercises.onclick=function(){
    ChangeForm(favExercises)
}