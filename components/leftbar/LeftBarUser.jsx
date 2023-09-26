import Image from 'next/image'
import userPhoto from '../../img/userPhoto.png'
import style from './style.module.css'

function LeftBarUser() {
    return (
        <div className={style.user}>
            <div className={style.userIMG}>
                <Image
                    src={userPhoto}
                    alt='user-photo'
                    placeholder='blur'
                    fill
                    sizes="(max-width: 768px) 40px, (max-width: 1200px) 40px, 40px"
                />
            </div>
            <div className={style.userDetails}>
                <span>John Doe</span>
                <span>@johndoe</span>
            </div>
            <svg viewBox="0 0 24 24"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
        </div>
    )
}

export default LeftBarUser