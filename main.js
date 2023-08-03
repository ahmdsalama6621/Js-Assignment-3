var submit = document.querySelector("form button");
var inputName = document.getElementById("name");
var inputUrl = document.getElementById("url");
var tbody = document.getElementById("tbody");

var count = 1;

submit.addEventListener("click", function (e) {
  if (inputName.value === "" || inputUrl.value === "") {
    error();
  } else {
    var visitBtn = document.createElement("button");
    visitBtn.innerText = "Visit";
    visitBtn.setAttribute("target", "_blank");
    visitBtn.classList.add("visit");
    visitBtn.src = inputUrl.value;
    visitBtn.onclick = () => {
      visit(visitBtn);
    };
    var deleteBtn = document.createElement("button");
    deleteBtn.onclick = () => {
      del(deleteBtn);
    };
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Delete";
    var newTr = document.createElement("tr");
    var indexTd = document.createElement("td");
    indexTd.innerHTML = count++;
    var nameTd = document.createElement("td");
    nameTd.innerHTML = inputName.value;
    var visitTd = document.createElement("td");
    visitTd.append(visitBtn);
    var deleteTd = document.createElement("td");
    deleteTd.append(deleteBtn);
    newTr.appendChild(indexTd);
    newTr.appendChild(nameTd);
    newTr.appendChild(visitTd);
    newTr.appendChild(deleteTd);
    tbody.appendChild(newTr);
    resetInput();
  }
  e.preventDefault();
});
function error() {
  swal({
    title: "Site Name or Url is not valid :",
    text: "Site name must contain at least 3 characters",
    type: "error",
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "OK",
  });
}
function visit(e) {
  window.open(`https://${e.src}`, "_blank");
}
function resetInput() {
  inputName.value = "";
  inputUrl.value = "";
}
function del(e) {
  e.parentElement.parentElement.remove();
  count -= 1;
}
inputName.onchange = function () {
  if (inputName.value.length < 3) {
    console.log("Done");
    inputName.style.removeProperty("border");
    inputName.style.setProperty("border-color", "red");
  } else {
    inputName.style.setProperty("border-color", "transparent");
  }
};

inputUrl.onchange = function () {
  if (inputUrl.value.length < 8) {
    console.log("Done");
    inputUrl.style.removeProperty("border");
    inputUrl.style.setProperty("border-color", "red");
  } else {
    inputUrl.style.setProperty("border-color", "transparent");
  }
};
