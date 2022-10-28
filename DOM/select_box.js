function getSelValues(ref){
    let opt = document.getElementById("selBoxId");
    //   let selVal = opt.value;
    //   let selText = ref.options[ref.selectedIndex].text; // One Way to get text value.
    //   let s =  opt.options[opt.selectedIndex].text; //second way to get the text value.
    //   console.log("selVal ",selVal ,'  ',selText,'',s);


    // Multiple value selection ....
        var options = opt.options;
        var result = [];
        for (var i=0, iLen=options.length; i<iLen; i++) {
            opt = options[i];
            if (opt.selected &&  opt.value == 'hindi') {
              console.log("remove ...");
              opt.remove();
            }else{
              result.push(opt.value || opt.text);
              } 
            }
        console.log("Multiple Values ",result);  
}

addEventListener('load', (e) => {
    alert("load");
    console.log('The page is fully loaded. load()');
    document.getElementById("selBox").text = "Dumy";
  });

