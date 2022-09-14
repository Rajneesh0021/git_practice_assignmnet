//palindrome problem
   let u='naman';
   let bag='';
   for(i=u.length-1;i>=0;i--){
      bag=bag+u[i]}
      if(u==bag){console.log('palindrome')
   }else{console.log(bag)}

    //prime number problem
    let flag = 'prime'
   let num =12;
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
