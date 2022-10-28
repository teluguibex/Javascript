function getSelected(){
   let fruits = document.getElementsByName('fruits');  
   for (var checkbox of fruits) {  
       document.body.append(checkbox.value + ' ');  
  }  
}