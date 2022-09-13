//palindrome problem
    let N=5
    let str='naman'
   let bag='';
   let bag2='';
   for(i=0;i<N;i++){
       bag=bag+str[i]
      
   for(j=N;j>0;j--)
       bag2=bag2+str[j];
   }if(bag2===bag){
       console.log('Yes');
   }else { console.log('no');}
   
  
   //prime number problem
    let flag = 'prime'
   let num =13;
   for(i=2;i<num;i++){
   if(num%i==0){
   flag='not prime';
   break;
   }
}
  if(flag){
    console.log(num, flag);
  }
   else {console.log(num, flag)}
