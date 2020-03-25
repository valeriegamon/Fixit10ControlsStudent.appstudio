//Scenario: the user is going to use their CU login to access/log into your app. 
//If they successfully authenticate, send them to the 'favFoods' form. 
//If they aren't authenticated, reset the input controls to blank and give them a 
//message that they can try again as their login was not valid. 

let usernameNetID = ""
//let passwordNetID = ""

btnLogin.onclick=function(){
  usernameNetID = inptNetID.value
  let passwordNetID = inptNetIDPassword.value
  if ((usernameNetID == "Smith") && (passwordNetID == "123Dogs#")) 
    ChangeForm(favFoods)
  else    
    NSB.MsgBox("That login is not recognised. Please try again.")
    inptNetID.value = ""
    inptNetIDPassword.value = ""
}




