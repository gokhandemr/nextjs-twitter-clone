import Link from 'next/link'
import style from './style.module.css'

function Details() {
    return (
        <div className={style.detailsPage}>
            <Link href={'/'}>Hizmet Şartları</Link>
            <Link href={'/'}>Gizlilik Politikası</Link>
            <Link href={'/'}>Çerez Politikası</Link>
            <Link href={'/'}>Imprint</Link>
            <Link href={'/'}>Erişilebilirlik</Link>
            <Link href={'/'}>Reklam bilgisi</Link>
            <Link href={'/'}>
                Daha fazla
                <svg viewBox="0 0 24 24"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
            </Link>
            <Link href={'https://github.com/gokhandemr/'} target='_blank' rel='noopener noreferrer'>Gökhan Demir</Link>
            <span>© 2023 X Corp.</span>
        </div>
    )
}

export default Details
