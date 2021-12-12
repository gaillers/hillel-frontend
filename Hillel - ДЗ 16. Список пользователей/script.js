const API = 'https://reqres.in/api/users';
const userCardTemplate = document.getElementById('userCardTemplate').innerHTML;

const getUsers = (page = 1) => {
   const xhr = new XMLHttpRequest();

   xhr.open('GET', `${API}?page=${page}`, false);
   xhr.send();

   const { data } = JSON.parse(xhr.responseText);
   return data; 
};

const render = (template, bind) => {
   let result = template;

   Object.keys(bind).forEach(e => {
      result = result.replaceAll(`{{${e}}}`, bind[e]);
   });

   return result;
}

const renderUserList = users => {
   const userListElement = document.getElementById('user-list');

   const templates = users
      .map(e => ({ ...e, name: `${e.first_name} ${e.last_name}` }))
      .map(e => render(userCardTemplate, e))
      .join('\n');

   userListElement.innerHTML = templates;
}

(() => {
   const actionPrev = document.getElementById('prevAction');
   const actionNext = document.getElementById('nextAction');
   let globalPage = 1;


   const renderCall = page => {
      const users = getUsers(page);
      renderUserList(users);
   };
   
   // actionNext.addEventListener('click', e => {
   //    renderCall(++globalPage)
   // });

   // actionPrev.addEventListener('click', e => {
   //    renderCall(--globalPage)
   // });
   
   renderCall(globalPage);
})();
