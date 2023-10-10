'use client'
import Link from 'next/link';
import style from './style.module.css'
import { useEffect, useState } from 'react';
import { premiumBoxStore, showMoreStore, userButtonStore } from '@/store';

//components
import HeaderNav from './HeaderNav';
import HeaderSendButton from './HeaderSendButton';
import HeaderUser from './HeaderUser';
// boxs
import PremiumBoxComponent from '../premium-box'
import ShowMoreComponent from '../show-more';
import UserDropdown from '../user-dropdown';



function Header({ user }) {
    const [isWindow, setIsWindow] = useState(false)
    useEffect(() => { setIsWindow(true) }, [])

    const premiumBoxİsActive = premiumBoxStore((state) => state.premiumBoxIsActive)
    const showMoreIsActive = showMoreStore((state) => state.showMoreIsActive)
    const userButtonIsActive = userButtonStore((state) => state.userButtonIsActive)

    return (
        <header className={style.header}>
            <div>
                <div className={style.headerContainer}>
                    <h1>
                        <Link href={'/'}>
                            <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                        </Link>
                    </h1>
                    <HeaderNav user={user} />
                    <HeaderSendButton />
                    <HeaderUser user={user} />
                </div>
            </div>

            {(isWindow && premiumBoxİsActive) &&
                <PremiumBoxComponent />
            }
            {(isWindow && showMoreIsActive) &&
                <ShowMoreComponent />
            }
            {(isWindow && userButtonIsActive) &&
                <UserDropdown user={user} />
            }
        </header>
    )
}

export default Header