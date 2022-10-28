/* 
  string : A collection of character is called as string.
  '' ,
  "",
  `` ->(backtrick operator) : To defined the multiple line of text.
    How to rerefe the one variable to another variable ?
    Ans => ${}
*/
  let s1 : string = 'Ram ...';
  let s2 : string = " Hello " +`${s1}`+" Welcome in 'to' typescript world ";
  console.log("S2 Value ",s2);
  