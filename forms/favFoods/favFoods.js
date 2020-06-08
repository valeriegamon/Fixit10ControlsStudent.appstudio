let foods = ["pizza","apples","cookies","sushi","pasta","steak"]

favFoods.onshow=function(){
    lstFoods.clear()   
    // put array of flavors in the dropdown
    for (i = 0; i <= foods.length - 1; i++) 
        lstFoods.addItem(foods[i])
}

lstFoods.onclick=function(choice){  
    if (typeof(choice) == "object") {   // user clicked the control
    return
  } else {
    let textChoice = NSB.$("lstFoods_" + choice).textContent
    lblOutputFoods.value= "You picked: " + textChoice
  }
}

btnDessertVoting.onclick=function(){
    ChangeForm(dessertVoting)
}

/* 
lblOutputFoods.onclick=function(){
      lblOutputFoods = (`You picked ${NSB.$("lstFoods_" + choice).textContent}! That is a great choice!!`)

let textChoice = NSB.$("lstFoods_" + choice).textContent
NSB.MsgBox(`You picked ${textChoice}! That is a great choice!!`)
*/