const GetData= async ()=>{
const data= await axios.get('http://ums12.runasp.net/api/users?limit=200')

return data.data;

}

const displayData= async()=>{
    const result = await GetData();
    const users=result.users.map((user)=>{
return `
<tr>
<td> ${user.id}</td>
<td> ${user.name} </td>
<td> ${user.email} </td>
<td> ${user.age} </td>
<td> <img src="${user.imageUrl}" alt="User Img" width=100px height=50px> </td>

`})
document.querySelector('.Users-data').innerHTML=users.join(" ");

}
displayData();

