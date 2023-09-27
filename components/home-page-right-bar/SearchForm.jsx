'use client'
import { useState } from "react"
import style from './style.module.css'

function SearchForm() {
    const [inputValue, setInputValue] = useState('')
    const [isClick, setIsClick] = useState(false)

    const submitFunction = (e) => {
        e.preventDefault()
        alert(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={(e) => (submitFunction(e))} onFocus={() => (setIsClick(true))} onBlur={() => (setIsClick(false))} className={isClick ? `${style.active}` : ''}>
            <svg viewBox="0 0 24 24"><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></svg>
            {isClick &&
                inputValue.length > 0 &&
                <svg viewBox="0 0 24 24"><path d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"></path></svg>
            }
            <input placeholder="Ara" value={inputValue} onChange={(e) => (setInputValue(e.target.value))} />
            {isClick &&
                <div style={{ opacity: '0' }} className={style.formBox}>
                    <p>Kişileri, listeleri veya anahtar kelimeleri aramayı dene</p>
                </div>
            }
        </form>
    )
}

export default SearchForm