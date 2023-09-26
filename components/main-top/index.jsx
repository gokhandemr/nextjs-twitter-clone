import Link from 'next/link'
import style from './style.module.css'

function MainTop() {
    return (
        <>
            <h2 className={style.mainH2}>Anasayfa</h2>
            <nav className={style.nav}>
                <div>
                    <Link href={'/'}>Sana özel</Link>
                </div>
                <div>
                    <Link href={'/'} className={style.navActive}>Takip edilenler</Link>
                </div>
            </nav>
        </>
    )
}

export default MainTop
