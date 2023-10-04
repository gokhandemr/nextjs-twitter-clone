import Link from 'next/link'
import style from './style.module.css'

function AgendaBox({ isMain }) {
    return (
        <section className={`${style.agendaBox} ${isMain && style.isMain}`}>
            <h3>İlgini çekebilecek gündemler</h3>
            <ul>
                <li>
                    <Link href={'/'}>
                        <p>Spor - Gündemdekiler</p>
                        <p>Galatasaray</p>
                        <p>22,3 posts</p>
                        <svg viewBox="0 0 24 24"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <p>Türkiye tarihinde gündemde</p>
                        <p>Tempor ut non aliquip excepteur occaecat.</p>
                        <p>13,1 posts</p>
                        <svg viewBox="0 0 24 24"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        <p>Türkiye tarihinde gündemde</p>
                        <p>Labore exercitation fugiat proident Lorem.</p>
                        <p>8,7 posts</p>
                        <svg viewBox="0 0 24 24"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
                    </Link>
                </li>
            </ul>
            <Link className={style.showMoreButton} href={'/'}>Daha fazla göster</Link>
        </section>
    )
}

export default AgendaBox