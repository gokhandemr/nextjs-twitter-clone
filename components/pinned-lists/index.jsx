import style from './style.module.css'

function PinnedLists({ isOther }) {
    return (
        <div className={style.pinnedLists}>
            {
                isOther === 'johndoe' && <h3>Sabitlenen Listeler</h3>
            }
            {
                isOther === 'johndoe' ? <p>Burada henüz hiçbir şey görünmüyor. Hızlıca erişmek istediğin favori Listelerini üste sabitleyebilirsin.</p> : <p style={{ fontSize: '31px', fontWeight: '800', textAlign: 'center', color: '#ddd' }}>@{isOther} henüz Liste oluşturmadı</p>
            }

        </div>
    )
}

export default PinnedLists