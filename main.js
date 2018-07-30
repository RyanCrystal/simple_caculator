       let radio = document.querySelector('.radio');
       let enterfield = document.querySelector('.enterField');
       let show = document.querySelector('.show');
       let add = document.querySelector('.add');
      let substract = document.querySelector('.substract');
        let multiply = document.querySelector('.multiply');
       let divide = document.querySelector('.divide');
       let addsub = document.querySelector('.addSub');
       let muldiv = document.querySelector('.mulDiv');
       let enterField = document.querySelector('.enterField');
       let equal = document.querySelector('.equal');
       let clear = document.querySelector('.clear');
       let undo = document.querySelector('.revert');
       let cancelflag = false;
      // var temp;
    //   var temp_result;
    
       let result = 0;
       let count = 1;
       let op = 0;
       let opflag =1;
       let a= '';
       let b= '';
       let c= '';
       let x=0;
     //  var opform =0;
      // var y = '';
       enterField.value = '';
       enterField.focus();
       equal.disabled = true;
       undo.disabled = true;
       var flag = false;
       //add.disabled = true;
        multiply.disabled = true;
         divide.disabled = true;
       
      function checkOp(){
           if(addsub.checked === true)
           {
               add.disabled = false;
              substract.disabled= false;
              multiply.disabled = true;
              divide.disabled = true;
              result = 0;
              opflag = 1;
          }
          else
          { add.disabled = true;
              substract.disabled= true;
              multiply.disabled = false;
              divide.disabled = false;
          result = 1;
          opflag = 2;}
           
       }
       function adder()
       {   
          if(cancelflag === true) x=0;
          if(op===2) 
          result-=x;//if the operation before is minus, do the subastraction
      else if(count>1)
          result+=x;
           b=show.textContent;
          // test2.textContent = x;
           show.textContent+= "+";
           a= show.textContent;
         // test1.textContent = a;
           enterField.value = '';
           enterField.focus();
         count++;  op = 1;
       
          flag = false;
          add.disabled = true;
          substract.disabled = true;
          equal.disabled = true;
             undo.disabled = false;
             cancelflag = false;
       }
       function substracter()
       {   
          if(cancelflag === true) x=0;
        if(op===1) 
          result+=x;
      else if(count>1)
          result-=x;
         //  test1.textContent = result;
           c = show.textContent;
           show.textContent+= "-";
           a= show.textContent;
           enterField.value = '';
           enterField.focus();
           count++;
           op=2;
            //undo.disabled = false;
            flag = false;
            add.disabled = true;
            substract.disabled = true;
            equal.disabled = true;
            undo.disabled = false;
            cancelflag = false;
       }
           function multiplyer()
       {   
          if(cancelflag === true) x=1;
        if(op===4) 
            result/=x;
            else if(count>1)
          result*=x;
         //  test1.textContent = result;
           d = show.textContent;
           show.textContent+= "×";
           a= show.textContent;
           enterField.value = '';
           enterField.focus();
           count++;
           op=3;
            //undo.disabled = false;
            flag = false;
            add.disabled = true;
            substract.disabled = true;
             multiply.disabled = true;
              divide.disabled = true;
            equal.disabled = true;
            undo.disabled = false;
            cancelflag = false;
       }
     function divider()
       {   
          if(cancelflag === true) x=1;
        if(op===3) 
            result*=x;
            else if(count>1)
          result/=x;
         //  test1.textContent = result;
           e = show.textContent;
           show.textContent+= "÷";
           a= show.textContent;
           enterField.value = '';
           enterField.focus();
           count++;
           op=4;
            //undo.disabled = false;
            flag = false;
            add.disabled = true;
            substract.disabled = true;
             multiply.disabled = true;
              divide.disabled = true;
            equal.disabled = true;
            undo.disabled = false;
            cancelflag = false;
       }   
       addSub.addEventListener('click',checkOp);
       mulDiv.addEventListener('click',checkOp);
      enterfield.addEventListener('input',showinput);
      enterfield.addEventListener('input',function(){
      addSub.disabled = true;
      mulDiv.disabled = true;});
      //enterfield.addEventListener('input',showinput1);
      add.addEventListener('click',adder);
      substract.addEventListener('click',substracter);
      multiply.addEventListener('click',multiplyer);
       divide.addEventListener('click',divider);
      equal.addEventListener('click', showResult);
      equal.addEventListener('click', function(){
       addSub.disabled = false;
      mulDiv.disabled = false;;});
      clear.addEventListener('click',reset);
      undo.addEventListener('click',cancel);
      
       function reset()
       {
           enterField.value = '';
           enterField.focus();
           result = 0;
           show.textContent = '';
           count = 1;
           op = 0;
           x = 0;
           a= '';
           flag = false;
           //test1.textContent = '';
           //test2.textContent = '';
       }
      
       function showinput()
       {
            x = enterfield.value;
           x=Number(x);
            if (isNaN(x))
           {alert("请输入数字！");
                 enterField.value = '';
               enterField.focus();
               return;}
                      //test1.textContent =a;
           if(flag===true)
           
               show.textContent= a+'\n'+x;
            else        
           show.textContent = a+ x;
           if(count===1)result = x;
          // checkOp();
          if(opflag===1)
          { add.disabled = false;
           substract.disabled = false;}
       if(opflag===2)
             {  multiply.disabled = false;
              divide.disabled = false;}
           equal.disabled = false;
           undo.disabled = true;
        //   test1.textContent = result;
          //  test2.textContent = x;
           
       }
 
      function showResult()
       {  
         switch(op){
             case 1: result+=x;break;
             case 2: result-=x;break;
             case 3: result*=x;break;
             case 4: result/=x;break;    
         } 
         //test2.textContent = x;
           show.textContent+= "="+result;
           a = show.textContent;
         // undo.disabled = true;
         enterField.value = '';
           enterField.focus();
           x=0;
           result = 0;
           flag= true;
           count = 1;
           op = 0;
            add.disabled = true;
            substract.disabled = true;
            multiply.disabled = true;
              divide.disabled = true;
            equal.disabled = true;
            undo.disabled = true;
           
       }
       
     function cancel(){
         cancelflag= true;
           switch(op){
             case 1: show.textContent = b; 
                     add.disabled = false;
                     substract.disabled = false;
                     equal.disabled = false;break;
             case 2: show.textContent = c;
                     add.disabled = false;
                     substract.disabled = false;
                     equal.disabled = false;break;
             case 3: show.textContent = d; 
                     multiply.disabled = false;
                     divide.disabled = false;
                     equal.disabled = false;break;
            case 4: show.textContent = e; 
                     multiply.disabled = false;
                     divide.disabled = false;
                     equal.disabled = false;break;
             default:
         } 
     }
