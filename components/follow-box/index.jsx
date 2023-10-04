import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import { getUsers } from '@/services/data'
import Link from 'next/link'

async function FollowBox() {
    const users = await getUsers()

    return (
        <section className={style.followBox}>
            <h3>Kimi takip etmeli</h3>
            <ul>

                {users &&
                    users.slice(5, 8).map(user => (
                        <li key={user.id}>
                            <Link href={`/${user["login"].username}`}>
                                <div className={style.followBoxUserIMG}>
                                    <Image
                                        src={`https://robohash.org/${user["login"].username}`}
                                        alt={user["login"].username}
                                        fill
                                        placeholder='blur'
                                        blurDataURL={`https://robohash.org/${user["login"].username}`}
                                        sizes="(max-width: 768px) 40px, (max-width: 1200px) 40px, 40px"
                                    />
                                </div>
                                <div className={style.followBoxUserDetails}>
                                    <p>{user.firstname + ' ' + user.lastname}</p>
                                    <p>{'@' + user["login"].username}</p>
                                    <button>Takip et</button>
                                </div>
                            </Link>
                        </li>
                    ))}
            </ul>
            <Link className={style.showMoreButton} href={'/'}>Daha fazla göster</Link>
        </section>
    )
}

export default FollowBox