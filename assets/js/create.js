const UserData=document.forms["createUserForm"];
UserData.addEventListener("submit",async(e)=>{
e.preventDefault();
const Data= new FormData(UserData);
const response = await axios.post ('https://ums12.runasp.net/api/users/',Data);
if (response.status==200){
    location.href='./index.html';
}
})