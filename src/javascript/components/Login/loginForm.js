import { signInWithEmailAndPassword, signOut } from '@firebase/auth';
import Component from '../../core/Component.js';
import { auth } from '../../firebase.js';

class LoginForm extends Component {
    render() {
        const formCont = document.createElement('form');
        formCont.setAttribute('class', 'loginPage_form_inpCont');

        const inpId = document.createElement('input');
        inpId.setAttribute('type', 'text');
        inpId.setAttribute('placeholder', '이메일');
        inpId.setAttribute('class', 'loginPage_inp_id');
        inpId.attributes['required'];

        const inpPwd = document.createElement('input');
        inpPwd.setAttribute('type', 'password');
        inpPwd.setAttribute('placeholder', '비밀번호');
        inpPwd.setAttribute('class', 'loginPage_inp_pwd');
        inpPwd.attributes['required'];

        const loginBtn = document.createElement('button');
        loginBtn.setAttribute('class', 'loginPage_btn_login');
        loginBtn.textContent = '로그인';

        const logoutBtn = document.createElement('button');
        logoutBtn.textContent = '로그아웃!';

        formCont.appendChild(inpId);
        formCont.appendChild(inpPwd);
        formCont.appendChild(loginBtn);
        formCont.appendChild(logoutBtn);

        async function login(event) {
            event.preventDefault();
            const newId = inpId.value;
            const newPwd = inpPwd.value;

            inpId.value = '';
            inpPwd.value = '';

            try {
                await signInWithEmailAndPassword(auth, newId, newPwd);
                console.log('로그인 완료');
            } catch (error) {
                console.log(error);
            }
        }

        loginBtn.addEventListener('click', login);
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            signOut(auth);
            console.log('로그아웃!');
        });
        return formCont;
    }
}

export default LoginForm;
