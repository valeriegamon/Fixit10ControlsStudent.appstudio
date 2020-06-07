/*
Add event handler code  that shows a message in a 
label control in this format: 
I would agree that you are a 'trusting' person too!
*/

describeYou.onshow=function(){
    rbnDescribe.clear() 
}

rbnDescribe.onclick=function(word){  
    if (typeof(word) == "object") { 
    return
  } else {
    let wordChoice = rbnDescribe.word
    lblDescribeYou.value= (`I would agree that you are a  ${wordChoice} person too!`)
  }
}

btnFavExercises.onclick=function(){
    ChangeForm(favExercises)
}
