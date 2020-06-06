/*
a  message will appear about 
their choice. 

Name all controls, using 3 letter acronyms for first
three letters. 
Only appStudio controls can be used in the app 
for interaction with the user, I & O (Input and Output). 

Add event handler code  that shows a message in a 
label control in this format: 
I would agree that you are a 'trusting' person too!
Add a button on the right bottom corner of the form 
that, when clicked, goes to the next page - 
the favExercises page. 

*/

describeYou.onshow=function(){
    rbnDescribe.clear() 
}

rbnDescribe.onclick=function(word){  
    if (typeof(word) == "object") { 
    return
  } else {
    let wordChoice = NSB.$("rbnDescribe_" + word).textContent
    lblDescribeYou.value= "You picked: " + wordChoice
  }
}

btnFavExercises.onclick=function(){
    ChangeForm(favExercises)
}

/* 
lblOutputFoods.onclick=function(){
      lblOutputFoods = (`You picked ${NSB.$("lstFoods_" + choice).textContent}! That is a great choice!!`)

let textChoice = NSB.$("lstFoods_" + choice).textContent
NSB.MsgBox(`You picked ${textChoice}! That is a great choice!!`)
*/


