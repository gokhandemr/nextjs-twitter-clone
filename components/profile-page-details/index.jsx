import Image from 'next/image'
import style from './style.module.css'

function ProfilePageDetails({ login, firstname, lastname, website, slug }) {
    const followed = Math.floor(Math.random() * 100)
    const follower = Math.floor(followed * 1.5)
    return (
        <div className={style.userPage}>
            <div className={style.banner}></div>
            <div>
                <div className={style.profilePhoto}>
                    <Image
                        src={`https://robohash.org/${login.username}`}
                        alt={login.username}
                        fill
                        placeholder='blur'
                        blurDataURL={`https://robohash.org/${login.username}`}
                        sizes="140px"
                    />
                </div>
                {slug === 'johndoe' && <button>Profili Ayarla</button>}
            </div>
            <div>
                <h3>{firstname + ' ' + lastname}</h3>
                <span>@{login.username}</span>
                <p>Et ea laboris esse mollit aute esse officia deserunt pariatur occaecat exercitation commodo officia.</p>
                <div>
                    <p>
                        <svg viewBox="0 0 24 24"><path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" /></svg>
                        {website}
                    </p>
                </div>
            </div>
            <div>
                <span><strong>{followed}</strong> Takip edilen</span>
                <span><strong>{follower}</strong> Takipçi</span>
            </div>
            {slug !== 'johndoe' && <div>Takip ettiğin kimse takip etmiyor</div>}

        </div>

    )
}

export default ProfilePageDetails