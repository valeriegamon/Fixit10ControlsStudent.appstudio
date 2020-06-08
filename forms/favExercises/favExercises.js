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

var exercisesAll = arrayUnique(exercises.concat(coreExercises));

favExercises.onshow=function(){
    selExercises.clear()   
    for (i = 0; i <= exercisesAll.length - 1; i++) 
        selExercises.addItem(exercisesAll[i])
}

//how to select more than one item
//how to add if/then for a couple options
//what is the modal window (see comment below) 






selExercises.onfocusout=function(){

}












btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}

btnFavExercies2.onclick=function(){
  ChangeForm(favExercises)
}

/*
Scenario: The user will be able to select the two exercises from a list 
that are best for the core (in case you don't know, these would be situps 
and planks). 

You can use an NSB.MsgBox(). 
Add a button so when the user has chosen their two exercises, it shows 
them in an NSB.MsgBox that uses this format: 
        You chose situps and planks - those are the two core exercises. 
OR 
       You did not pick the two core exercises. 
Instead of showing the output in an NSB.MsgBox(), add a button that, 
when they have chosen their two exercises, tells them in a modal window 
what their choices were in the format: 
       You chose situps and pushups. 
Hint: be sure to look at the Modal example in the LoginCUModal 
project in the repository.
Add a button to the modal window that, when clicked, returns to the 
favExercises form. 

//let exerciseChoice = NSB.$("selExercises" + choice).textContent
//NSB.MsgBox(`You picked ${exerciseChoice}! That is a great choice!!`)
*/