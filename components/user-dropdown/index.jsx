'use client'
import Link from 'next/link';
import style from './style.module.css'
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import { userButtonStore } from '@/store'

function UserDropdown() {
    const buttonClose = userButtonStore((state) => state.userButtonInActive)
    const ref = useRef(null);
    useClickAway(ref, buttonClose);
    return (
        <div className={style.userDropdown} ref={ref}>
            <Link href={'/'}>Var olan bir hesap ekle</Link>
            <Link href={'/'}>@Bret hesabından çıkış yap</Link>
        </div>
    )
}

export default UserDropdown
