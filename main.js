showTask();

let addinput=document.getElementById("addinput");
let addtaskbtn= document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click",()=>{
    // console.log(12345)
   let inputvalue = addinput.value;
    if(inputvalue.trim() !==0){
        // console.log(122222)
    let localData = localStorage.getItem("localtask");
    if(localData === null){
    taskObj = [];
    }
    else{
    taskObj = JSON.parse(localData);
    }

    taskObj.push({"task_name":inputvalue, "status":false});
    console.log(122222)
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    addinput.value="";
    console.log(22222)
}
showTask();
})


function showTask () {
    let localData = localStorage.getItem("localtask");
    if(localData === null){
      return  taskObj = [];
    }
    taskObj = JSON.parse(localData);
   
    
    let html = '';
    let taskList = document.getElementById("taskList");
    taskObj.forEach((item, index) => {

        if(item.status==true){
          taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        }else{
            taskCompleteValue = `<td>${item.task_name}</td>`;
        }
        html += `<tr>
                    <th   scope="row">${index+1} </th>
    
                    ${taskCompleteValue}
                    <td><button type="button"  onclick="edittask(${index})" class="text-primary btned"><i class="fa fa-edit"></i>Edit</button></td>

                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger btned"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    taskList.innerHTML = html;


}

function edittask(index){
    let saveindex = document.getElementById("saveindex");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveindex.value = index;
    let localData = localStorage.getItem("localtask");
    let taskObj = JSON.parse(localData); 
    
    addinput.value = taskObj[index]['task_name'];
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="block";
}

let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function(){
    let addtaskbtn = document.getElementById("addtaskbtn");
    let localData = localStorage.getItem("localtask");
    let taskObj = JSON.parse(localData); 
    let saveindex = document.getElementById("saveindex").value;
    
    for (keys in taskObj[saveindex]) {
        if(keys == 'task_name'){
            taskObj[saveindex].task_name = addinput.value;
        }
      }

    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addinput.value='';
    showTask();
})

function deleteitem(index){
    let localData = localStorage.getItem("localtask");
    let taskObj = JSON.parse(localData);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showTask();
}




// let taskList = document.getElementById("taskList");
// taskList.addEventListener("click", function(e){
       
//         let localData = localStorage.getItem("localtask");
//         let taskObj = JSON.parse(localData);
        
//         let mytarget = e.target;
//         if(mytarget.classList[0] === 'text-success'){
//         let mytargetid = mytarget.getAttribute("id");
        
        
        
        
//         mytargetpresibling = mytarget.parentElement.previousElementSibling.previousElementSibling;
            
           
//             for (keys in taskObj[mytargetid]) {
//                 if(keys == 'status' && taskObj[mytargetid][keys]==true){
//                     taskObj[mytargetid].status = false;
                   
//                 }else if(keys == 'status' && taskObj[mytargetid][keys]==false){
//                     taskObj[mytargetid].status = true;
                  
//                 }
//               }
//         //}
//        // showtask();        
//         localStorage.setItem("localtask", JSON.stringify(taskObj));
//         showTask();
//     }
//     })

    let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function(){
    let savetaskbtn = document.getElementById("savetaskbtn");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let localData = localStorage.getItem("localtask");
    let taskObj = JSON.parse(localData);
    if(localData == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(localData);
        taskObj = [];
    }
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showTask();

})



let searchtextbox = document.getElementById("searchtextbox");
searchtextbox.addEventListener("input", function(){
    let trlist = document.querySelectorAll("tr");
    Array.from(trlist).forEach(function(item){
        let searchedtext = item.getElementsByTagName("td")[0].innerText;
        let searchtextboxval = searchtextbox.value;
        let re = new RegExp(searchtextboxval, 'gi');
        if(searchedtext.match(re)){
            item.style.display="table-row";
        }
        else{
            item.style.display="none";
        }
    })
})




