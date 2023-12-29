const redirect = (destination) => {
    // Redirect function - takes in the destination and sends user there.
    if (destination){
        window.location.href = destination+'.html';
    }else{
        console.log("Empty param, destination required.")
        return null
    }
}