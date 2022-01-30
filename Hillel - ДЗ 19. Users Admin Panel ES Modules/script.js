import { LoginComponent } from './components/login';
import { UserComponent } from './components/users';

const mainContainer = document.getElementById('main');

const login = new LoginComponent(
   document.getElementById('loginTemplate').innerText,
   mainContainer  
);

login.onSuccess = onSuccessLogin;

function onSuccessLogin () {
   const userList = new UserComponent(
      document.getElementById('userListTemplate').innerText,
      document.getElementById('userCardTemplate').innerText,
      mainContainer
   );
}
