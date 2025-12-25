const getData= async ()=>{
const params= new URLSearchParams(location.search);
const id=params.get('id')
const response= await axios.get(`http://ums12.runasp.net/api/users/${id}`)
return response.data;
}


const displayData = async () => {
  const result = await getData();
 
 const user=result.data;
  const row = `
    <tr>
    
      <td>${user.name}</td>
         <td>${user.email}</td>
      <td>${user.age}</td>
     <td> <img src="${user.imageUrl}" width="100" height="50" /></td>
    </tr>
  `;

  document.querySelector(".Users-data").innerHTML = row;
};

displayData();
