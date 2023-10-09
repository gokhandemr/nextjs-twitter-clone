'use client'
import Link from 'next/link'
import style from './style.module.css'
import { useState } from 'react'
import { getUsers } from '@/services/data'
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'


function LoginBoxStepTwo({ username }) {
    const [passwordValue, setPasswordValue] = useState('')
    const router = useRouter();

    const formSubmitFunction = async (e) => {
        e.preventDefault()
        const users = await getUsers()
        const usersFilter = users.filter(user => user["login"].uuid === passwordValue)
        if (usersFilter.length > 0) {
            alert('okey')
            setCookie('user', usersFilter[0]["login"].uuid);
            router.refresh()
        } else {
            alert('hata')
        }
    }

    return (
        <div className={style.loginBoxStepTwo}>
            <h2>Şifreni gir</h2>
            <form onSubmit={(e) => (formSubmitFunction(e))}>
                <input placeholder={username} disabled />
                <input type='password' placeholder='Şifre' value={passwordValue} onChange={(e) => (setPasswordValue(e.target.value))} required />
                <Link href={'/#'} className={style.resetPasswordText}>Şifreni mi unuttun?</Link>
                <button disabled={passwordValue ? false : true} style={{ backgroundColor: `${passwordValue.length <= 0 ? '#999' : '#fff'}` }}>Giriş Yap</button>
                <div className={style.loginBoxFormBottomText}>
                    <p>Henüz bir hesabın yok mu? <Link href={'/#'}>Kaydol</Link></p>
                </div>
            </form>
        </div>
    )
}

export default LoginBoxStepTwo