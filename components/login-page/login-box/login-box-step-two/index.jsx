'use client'
import Link from 'next/link'
import style from './style.module.css'
import { useState } from 'react'
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'


function LoginBoxStepTwo({ userFiltered }) {
    const [passwordValue, setPasswordValue] = useState('')
    const router = useRouter();

    const formSubmitFunction =  (e) => {
        e.preventDefault()
        if (userFiltered[0]["login"].uuid === passwordValue) {
            alert('Giriş başarılı')
            setCookie('user', userFiltered[0]["login"].uuid);
            router.refresh()
        } else {
            alert('Yanlış şifre')
        }
    }

    return (
        <div className={style.loginBoxStepTwo}>
            <h2>Şifreni gir</h2>
            <form onSubmit={(e) => (formSubmitFunction(e))}>
                <input placeholder={userFiltered[0]["login"].username} disabled />
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