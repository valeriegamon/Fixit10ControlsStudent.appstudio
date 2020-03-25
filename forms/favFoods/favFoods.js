/*
Add a button on the right bottom corner of the form for navigation, 
When clicked, goes to the next page - the dessertVoting form. 
*/


let foods = ["pizza","apples","cookies","sushi","pasta","steak"]

favFoods.onshow=function(){
    lstFoods.clear()   
    // put array of flavors in the dropdown
    for (i = 0; i <= foods.length - 1; i++) 
        lstFoods.addItem(foods[i])
}

lstFoods.onclick=function(choice){  // notice the 'choice' parameter. This is the index
  if (typeof(choice) == "object") {   // user clicked the control
    return
  } else {
      
  let textChoice = NSB.$("lstFoods_" + choice).textContent
  //NSB.MsgBox(`You picked ${textChoice}! That is a great choice!!`)
  lblOutputFoods(`You picked ${textChoice}! That is a great choice!!`)
  }
}

/*   
  // how to change text of an item already on the list
  // change Teddy, at location 2, to Esmerelda
  let newPlace = 0   //index where you want replacement to go
  NSB.$("lstFoods_" + newPlace).textContent = "Esmerelda"
  
    // add a new item just for fun. It will go onto the end of the list
    // 3 arguments to addItem are: (item to add,type (active or disabled), appearance) - runtime
  lstFoods.addItem("Garbanzo","active","default")

*/
