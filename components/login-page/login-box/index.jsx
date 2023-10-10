'use client'
import style from './style.module.css'
import { useState } from 'react'
// store
import { loginPageButtonStore } from '@/store'
// data
import { getUsers } from '@/services/data'
// components
import LoginBoxStepTwo from './login-box-step-two'
import LoginBoxStepOne from './login-box-step-one'

function LoginBox() {
    const [inputValue, setInputValue] = useState('')
    const [user, setUser] = useState([])
    const loginCloseButton = loginPageButtonStore((state) => state.loginButtonInActive)

    const formSubmitFunction = async (e) => {
        e.preventDefault()
        const users = await getUsers()
        const userNameFilter = inputValue.replace(/[</>\\*'_!$½%{&}=|"`~¨´]/g, '')
        const usersFilter = users.filter(user => user["login"].username === userNameFilter)
        if (usersFilter.length > 0) {
            setUser(usersFilter)
        } else {
            alert('Malesef hesabını bulamadık')
        }
    }

    return (
        <div className={style.loginBox}>
            <div className={style.loginBoxContainer}>
                <div className={style.loginBoxTopArea}>
                    <button onClick={loginCloseButton} className={style.loginBoxCloseButton}>
                        <svg viewBox="0 0 24 24" width={20} height={20} style={{ fill: '#fff' }}><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" /></svg>
                    </button>
                    <div className={style.loginBoxLogo}>
                        <svg viewBox="0 0 24 24" width={32} height={53} style={{ fill: '#fff' }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </div>
                </div>
                {user.length <= 0
                    ?
                    <LoginBoxStepOne formSubmitFunction={formSubmitFunction} inputValue={inputValue} setInputValue={setInputValue} />
                    :
                    <LoginBoxStepTwo userFiltered={user} />
                }
            </div>
        </div>
    )
}

export default LoginBox