// for simplicity's sake, req1 has been redefined as req

req = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptNetIDPassword.value);

btnLogin.onclick=function(){

    if (req.status == 200) { //everything worked.
        //lblWelcome.style.display = "block"  // none to hide
        //lblResult.style.display = "block"  // none to hide
        //lblResult.value = "The authentication code is " + req.responseText
        //1 good 0 bad
        
        if (req.responseText == 1) 
            ChangeForm(favFoods)
        else {
            NSB.MsgBox("Sorry, that login is not recognized. Please try again.")
            inptNetID.value = ""
            inptNetIDPassword.value = ""
            }
    } else 
        //Handle that. 
        NSB.MsgBox("The app could not connect to the server. Please try again.")
}

btnFavFoods.onclick=function(){
    ChangeForm(favFoods)
}