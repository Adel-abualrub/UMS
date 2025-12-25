const UserData=document.forms["FormData"];
UserData.addEventListener("submit",async(e)=>{
e.preventDefault();
const Data= new FormData(UserData);
const response = await axios.post ('http://ums12.runasp.net/api/users/',Data);

})