//Scenario: the user is going to use their CU login to access/log into your app. 
//If they successfully authenticate, send them to the 'favFoods' form. 
//If they aren't authenticated, reset the input controls to blank and give them a 
//message that they can try again as their login was not valid. 

btnLogin.onclick=function(){
  
    req = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptNetIDPassword.value);
    if (req.status == 200) { //everything worked.
        //lblWelcome.style.display = "block"  // none to hide
        //lblResult.style.display = "block"  // none to hide
        //lblResult.value = "The authentication code is " + req.responseText
        //1 good 0 bad
        
        if (req.responseText == 1) {
            ChangeForm(favFoods)
        } else {
            NSB.MsgBox("That login is not recognised. Please try again.")
            inptNetID.value = ""
            inptNetIDPassword.value = ""
            }
    } else 
        //Handle that. 
        NSB.MsgBox("The app could not connect to the server. Please try again.")
}
