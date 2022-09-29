function getData(){
    let xhr = new XMLHttpRequest(); 
    xhr.open("GET","https://api.github.com/users",true);
    xhr.onload = function ()  {
      let users = JSON.parse(this.responseText);
    users.forEach(user => {
        const li = document.createElement("li");
        li.className = "list-group-item user-item text-left";
        li.innerHTML = 
        `<img class="img-circle img-user img-thumbnail "src="${user.avatar_url}"><h3><a href="#">${user.login}</a><br></h3>`
                    document.querySelector(".list-group").append(li)
    });
    }
    xhr.send();
}
getData();