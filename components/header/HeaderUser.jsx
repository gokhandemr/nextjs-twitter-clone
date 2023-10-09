'use client'
import Image from 'next/image'
import style from './style.module.css'
import Link from 'next/link'
import { userButtonStore } from '@/store'

function HeaderUser({ user }) {
    const userActiveButton = userButtonStore((state) => state.userButtonActive)

    return (
        <Link href={'#'} className={style.user} onClick={userActiveButton}>
            <div className={style.userIMG}>
                <Image
                    src={`https://robohash.org/${user[0]["login"].username}`}
                    alt='user-photo'
                    placeholder='blur'
                    blurDataURL={`https://robohash.org/${user[0]["login"].username}`}
                    fill
                    sizes="(max-width: 768px) 40px, (max-width: 1200px) 40px, 40px"
                />
            </div>
            <div className={style.userDetails}>
                <span>{user[0].firstname} {user[0].lastname}</span>
                <span className='lightText'>@{user[0]["login"].username}</span>
            </div>
            <svg viewBox="0 0 24 24"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
        </Link>
    )
}

export default HeaderUser