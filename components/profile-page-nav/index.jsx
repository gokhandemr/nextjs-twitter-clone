import Link from 'next/link'
import style from './style.module.css'

function ProfilePageNav() {
    return (
        <nav className={style.profilePageNav}>
            <Link href={'#'} className={style.active}>Gönderiler</Link>
            <Link href={'#'}>Yanıtlar</Link>
            <Link href={'#'}>Medya</Link>
            <Link href={'#'}>Beğeni</Link>
        </nav>
    )
}

export default ProfilePageNav