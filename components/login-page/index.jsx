import style from './style.module.css'
// components
import LoginPageLeft from './login-page-left'
import LoginPageRight from './login-page-right'
import Details from '../details'


function LoginPage() {

    return (
        <div className={style.loginPageContainer}>
            <LoginPageLeft />
            <LoginPageRight />
            <div className={style.loginPageBottom}>
                <Details />
            </div>
        </div>
    )
}

export default LoginPage