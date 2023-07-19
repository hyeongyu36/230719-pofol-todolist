const btn = document.getElementById("btn");
let addValue = document.getElementById("addValue");
let result = document.getElementById("result");

// 할일 추가하기
function addTodo() {
  if (addValue.value === false) {
    alert("내용을 입력하세요!");
  } else {
    let list = document.createElement("li"); //list에 li를 담는다
    let del = document.createElement("button");
    list.innerHTML = addValue.value;
    result.appendChild(list);
    list.appendChild(del);
    del.innerText = "X"; //del에 x라는 텍스트를 넣는다
    del.style.fontSize = "10px";
    del.style.border = "none";
    del.style.float = "right";
    del.style.right = "30px";
    // del.style.marginTop = "5px";
    del.style.cursor = "pointer";
    // del.style.textAlign = "center"
    del.style.backgroundColor = "rgba(0,0,0,0)";
    del.addEventListener("click", deleteList); //x(deletelist)에 클릭했을 때
    del.style.pisotion = "relative";
    del.style.padding = "5px";
    addValue.value = "";
    addValue.focus();
    list.addEventListener("click", function () {
      list.style.textDecoration = "line-through";
      list.style.color = "#333";
    });
  }
}
// 할일 목록 삭제시
function deleteList(e) {
  //deletelist에 e를 받아와서
  let removeOne = e.target.parentElement; //부모(할일목록) remove
  removeOne.remove();
}
//엔터 키 감지 이벤트 추가
addValue.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});
// 전체삭제시
function allClearList(e) {
  if (confirm("정말 삭제하시겠습니까?") == true) {
    if (result.innerHTML == "") {
      alert("삭제할 목록이 없습니다.");
    } else {
      result.innerText = ""; //전체 삭제
    }
  } else {
    return false;
  }
}
