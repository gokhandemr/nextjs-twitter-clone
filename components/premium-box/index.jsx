import style from './style.module.css'
import { premiumBoxStore } from '@/store';


function PremiumBoxComponent() {
    const premiumBoxClose = premiumBoxStore((state) => state.premiumBoxInActive)

    return (
        <div className={style.premiumBox}>
            <div className={style.premiumBoxContainer}>
                <button className={style.premiumBoxClose} onClick={premiumBoxClose}>
                    <svg viewBox="0 0 24 24"><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></svg>
                </button>
                <h3>Hesabının türü hangisi?</h3>
                <p>Sana uygun doğru aboneliği seç:</p>
                <div>
                    <div>
                        <p>Premium</p>
                        <p>Bireyim</p>
                        <p>Bireyler ve içerik üreticileri için</p>
                    </div>
                    <div>
                        <p>Onaylı Kuruluşlar</p>
                        <p>Kuruluşum</p>
                        <p>İşletmeler, devlet kurumları, kar amacı gütmeyen kuruluşlar için</p>
                    </div>
                </div>
                <button className={style.subscribeButton}>Abone ol</button>
                <p>Daha fazla bilgi al: <strong>Premium</strong> ve <strong>Onaylı</strong> Kuruluşlar</p>
            </div>
        </div>
    )
}

export default PremiumBoxComponent