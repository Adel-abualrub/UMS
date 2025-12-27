const UserData=document.forms["createUserForm"];

UserData.image.addEventListener("change",()=>{
const file=UserData.image.files[0];
const reader= new FileReader();
reader.readAsDataURL(file);


reader.onload = function (e) {
  document
    .querySelector(".prev")
    .setAttribute("src", e.target.result);
};


})


UserData.addEventListener("submit",async(e)=>{
e.preventDefault();
const Data= new FormData(UserData);
const response = await axios.post ('https://ums12.runasp.net/api/users/',Data);
if (response.status==200){
    location.href='./index.html';
}
})

