function getPageNumber(index){
    return index+1;
}
    
function getCurrentDate(){
    
    const date =  new Date().toISOString();

    const dateFormated = 
    date.substring(8,10) + "/" +
    date.substring(5,7) + "/" +
    date.substring(0,4) + " às "+
    date.substring(11,16)

    return dateFormated;
}
    
function getTotalElements(data){
    return data.length;
}

export default 
getPageNumber.toString()+"\n"+
getCurrentDate.toString()+"\n"+
getTotalElements.toString()