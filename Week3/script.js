window.onload = function() {
    var todo = document.getElementById("todo");
    var done = document.getElementById("done");
    var btn = document.getElementById("btn");
    var tmp_todo = document.getElementById("tmp_todo");

    btn.addEventListener("click", create_todo);
    tmp_todo.addEventListener("keydown", enter_todo);
}

function enter_todo(event) {
    if(event.currentTarget.keyCode == 13) {
        create_todo(event);
    }
}

function create_todo(event) {    
    // 내용 표시해주기
    var input_str = event.currentTarget.previousElementSibling.value;

    if(input_str=="") return;

    var todo_element = document.createElement("li");
    todo_element.textContent = input_str;
    todo_element.addEventListener("click", create_done);
    
    // button 추가
    var todo_btn = document.createElement("input");
    todo_btn.type = "button";
    todo_btn.addEventListener("click", delete_item);
    
    todo.appendChild(todo_element);
    todo_element.appendChild(todo_btn);

    // 입력칸 초기화
    document.getElementById("tmp_todo").value = null;
}

function create_done(event) {
    var done_element = document.createElement("li");
    var delete_element = document.createElement("del")
    delete_element.textContent = event.innerText;
    delete_element.addEventListener("click", recreate_todo);

    done_element.appendChild(delete_element);

    var done_btn = document.createElement("input");
    done_btn.type = "button";
    done_btn.addEventListener("click", delete_item);

    done.appendChild(done_element);
    done_element.appendChild(done_btn);

    event.remove();
}

function delete_item(event) {
    event.remove();
}

function recreate_todo(event) {
    var input_str = event.innerText;
    var todo_element = document.createElement("li");
    todo_element.textContent = input_str;
    todo_element.onclick = create_done();
    
    // button 추가
    var todo_btn = document.createElement("input");
    todo_btn.type = "button";
    todo_btn.onclick = delete_item();
    
    todo.appendChild(todo_element);
    todo_element.appendChild(todo_btn);


    event.remove();
}