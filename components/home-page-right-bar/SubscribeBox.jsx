import Link from "next/link"
import style from './style.module.css'

function SubscribeBox() {
  return (
    <section className={style.subscribeBox}>
      <p>Premium&apos;a Abone Ol</p>
      <p>Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</p>
      <Link href={'/'}>Abone ol</Link>
    </section>
  )
}

export default SubscribeBox