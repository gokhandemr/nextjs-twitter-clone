'use client'
import Link from 'next/link';
import style from './style.module.css'
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import { userButtonStore } from '@/store'
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

function UserDropdown({ user }) {
    const buttonClose = userButtonStore((state) => state.userButtonInActive)
    const ref = useRef(null);
    const router = useRouter();
    useClickAway(ref, buttonClose);

    

    return (
        <div className={style.userDropdown} ref={ref}>
            <Link href={'/'}>Var olan bir hesap ekle</Link>
            <button onClick={() => (deleteCookie('user'), buttonClose(), router.push('/'), router.refresh())}>@{user[0]["login"].username} hesabından çıkış yap</button>
        </div>
    )
}

export default UserDropdown
