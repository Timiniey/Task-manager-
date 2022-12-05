var btns=document.querySelectorAll("#book-list ol");
for (var i = 0; i < btns.length; i++) {
    result=btns[i];
    answer=result.addEventListener("click",function(e){
            const li=e.target.parentElement;
            li.parentNode.removeChild(li);
    })
}
var addForm=document.forms[1];
answer=addForm.addEventListener("submit",function(e){
        e.preventDefault();
        const value=addForm.querySelector('input[type="text"]').value;
        const li=document.createElement("li");
        const addBook=document.createElement("span");
        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="delete";
        addBook.textContent=value;
        li.appendChild(addBook);
        li.appendChild(deleteBtn);
        result.appendChild(li);
})
