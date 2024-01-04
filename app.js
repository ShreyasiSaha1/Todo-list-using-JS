let todo=[];
let req=prompt("enter your task ");

while(true){
     if(req=="quit"){
          console.log("you have quitted");
          break;
     }else if(req=="list"){
          console.log("-----------");
          for(let i=0;i<todo.length;i++){
               console.log(i,todo[i]);
          }
          console.log("-----------");
          
     }else if(req=="add"){
          let task=prompt("add your task");
          todo.push(task);
          console.log(todo);
          
     }else if(req=="delete"){
        let idx=prompt("enter index you want to delete");
       todo.splice(idx,1);
       console.log("task deleted");
     }else{
          console.log("wrong request.Sorry!!!");
     }
     req=prompt("enter your task ");

}