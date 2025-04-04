var input_text=document.getElementById("input_text");
var input_number=document.getElementById("input_number");
var input_select=document.getElementById("input_select");
var input_submit=document.getElementById("input_submit");
var input_button=document.getElementById("input_button");
var galgame=document.getElementsByClassName("galgame");
var galgame_item= document.getElementsByClassName("galgame_item");

input_submit.addEventListener("click",function(){
    // document.write("");
    alert("得到text: " + input_text.value + "\n得到number: " + input_number.value + "\n得到select: " + input_select.value + "\n得到radio: " + document.querySelector('input[name="background_color"]:checked').value);
    // parseFloat可以字串變數字
    if(input_number.value!="")
        input_button.value=parseFloat(input_button.value)+ parseFloat(input_number.value);
    // 用 ` 可以寫HTML語言, ${} 可以用變數
    if(input_text.value!=""){
        galgame[0].innerHTML += `<div class="galgame_item">${input_text.value}</div>`;
        input_select.innerHTML += `<option value=${input_text.value}>${input_text.value}</option>`
    }

})

input_button.addEventListener("click",function(){
    this.value++;
})