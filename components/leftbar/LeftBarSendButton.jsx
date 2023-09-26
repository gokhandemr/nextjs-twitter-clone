import Link from 'next/link'
import style from './style.module.css'

function LeftBarSendButton() {
    return (
        <Link href={'/'} className={style.button}>
            Gönder
        </Link>
    )
}

export default LeftBarSendButton