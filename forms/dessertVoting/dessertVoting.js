var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

drpDesserts.onshow=function(){
    drpDesserts.clear()   // put array in the dropdown
    for (i = 0; i <= dessertList.length - 1; i++) 
        drpDesserts.addItem(dessertList[i])
        }    

drpDesserts.onclick=function(dessert){
    if (typeof(dessert) == "object") {
      return  
    } else {  
    let textDessert = NSB.$("drpDesserts_" + dessert).textContent
      lblOutputDesserts.value= "You picked: " + textDessert + " -that is a great choice!"
      }
  }

btnDescribeYou.onclick=function(){
    ChangeForm(describeYou)
}