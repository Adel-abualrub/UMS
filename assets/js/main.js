const GetData = async () => {
  const data = await axios.get(`http://ums12.runasp.net/api/users?limit=200`);

  return data.data;
};

const displayData = async () => {
  const result = await GetData();
  const users = result.users.map((user) => {
    return `
<tr>
<td> ${user.id}</td>

<td> <img src="${user.imageUrl}" width="100" height="50" /></td>

<td>
 <button class="btn btn-danger " onclick=DeleteUser(${user.id})>Delete</button>
 <a href="./details.html?id=${user.id}" class="btn btn-primary">details</a>
 </td>


`;
  });
  document.querySelector(".Users-data").innerHTML = users.join(" ");
};
const DeleteUser = async (id) => {
  const DLuser = await axios.delete(`http://ums12.runasp.net/api/users/${id}`);
};

displayData();
