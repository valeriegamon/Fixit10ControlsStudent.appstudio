var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
}

favExercises.onshow=function(){
    var exercisesAll = arrayUnique(exercises.concat(coreExercises));
    selExercises.clear()   
    for (i = 0; i <= exercisesAll.length - 1; i++) 
        selExercises.addItem(exercisesAll[i])
}

btnSubmit.onclick=function(){
      if (selExercises.value== "situps") && (selExercises.value== "plank") {
      NSB.MsgBox("Hello!!") 
    } else {
      NSB.MsgBox("No") 
    }
}




selExercises.onfocusout=function(){

}


btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}

/*
You can use an NSB.MsgBox(). 
Add a button so when the user has chosen their two exercises, it shows 
them in an NSB.MsgBox that uses this format: 
        You chose situps and plank - those are the two core exercises. 
OR 
       You did not pick the two core exercises. 
Instead of showing the output in an NSB.MsgBox(), add a button that, 
when they have chosen their two exercises, tells them in a modal window 
what their choices were in the format: 
       You chose situps and pushups. 
Add a button to the modal window that, when clicked, returns to the 
favExercises form. 
btnFavExercies2.onclick=function(){
  ChangeForm(favExercises)
}

//let exerciseChoice = NSB.$("selExercises" + choice).textContent
//NSB.MsgBox(`You picked ${exerciseChoice}! That is a great choice!!`)
*/