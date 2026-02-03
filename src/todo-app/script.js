let editKey = null;
let editLi = null;

function addItem(taskText = null, checked = false, key = null) {
  const ul = document.getElementById("list");
  const taskInput = document.getElementById("task");

  taskText = taskText || taskInput.value.trim();
  if (!taskText) return;

  key = key || Date.now().toString();

  if (!localStorage.getItem(key)) {
    localStorage.setItem(
      key,
      JSON.stringify({ text: taskText, checked: checked }),
    );
  }

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = checked;
  checkbox.style.marginTop = "10px";

  checkbox.addEventListener("change", function () {
    textSpan.style.textDecoration = this.checked ? "line-through" : "none";
    localStorage.setItem(
      key,
      JSON.stringify({ text: textSpan.textContent, checked: this.checked }),
    );
  });

  // Text
  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;
  if (checked) textSpan.style.textDecoration = "line-through";

  // Delete button
  const delBtn = document.createElement("button");
  // delBtn.textContent = "Delete";
  delBtn.classList.add("delete");
  delBtn.className = "fa fa-trash";

  delBtn.style.marginLeft = "10px";

  delBtn.onclick = function () {
    li.remove();
    localStorage.removeItem(key);
  };

  // Update button
  const upBtn = document.createElement("button");
  // upBtn.textContent = "Update";
  upBtn.classList.add("update");
  upBtn.className = "fa fa-edit";
  upBtn.style.marginLeft = "10px";

  upBtn.onclick = function () {
    taskInput.value = textSpan.textContent;
    editKey = key;
    editLi = li;
    document.getElementById("add").innerHTML='<i class="fas fa-edit"></i>';
    
  };

  const btnWrap = document.createElement("div");
  btnWrap.className = "btn-wrap";

  btnWrap.appendChild(upBtn);
  btnWrap.appendChild(delBtn);

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(btnWrap);
  ul.appendChild(li);

  taskInput.value = "";
}

document.getElementById("add").onclick = function () {
  const taskInput = document.getElementById("task");
  const text = taskInput.value.trim();
  if (!text) return;

  // UPDATE
  if (editKey && editLi) {
    const span = editLi.querySelector("span");
    const checkbox = editLi.querySelector("input");

    span.textContent = text;
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";

    localStorage.setItem(
      editKey,
      JSON.stringify({ text, checked: checkbox.checked }),
    );

    editKey = null;
    editLi = null;
    this.textContent = "Add";
  }
  // ADD
  else {
    addItem();
  }

  taskInput.value = "";
};

//data persistent
window.onload = function () {
  document.getElementById("welcomeModal").style.display = "flex";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    try {
      const data = JSON.parse(localStorage.getItem(key));
      addItem(data.text, data.checked, key);
    } catch (e) {
      continue;
    }
  }
};

function closeModal() {
  document.getElementById("welcomeModal").style.display = "none";
}

//toggle list
function filterTasks(type) {
  const items = document.querySelectorAll("#list li");

  items.forEach((li) => {
    const checkbox = li.querySelector("input");

    if (type === "all") {
      li.style.display = "";
    } else if (type === "checked") {
      li.style.display = checkbox.checked ? "" : "none";
    } else if (type === "unchecked") {
      li.style.display = !checkbox.checked ? "" : "none";
    }
  });
}
