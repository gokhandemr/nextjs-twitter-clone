import style from './style.module.css'

function PinnedLists({ isOther, params, userCookie }) {
    console.log(isOther.login.uuid === userCookie ? 'okey' : 'no');
    const userActive = isOther.login.uuid === userCookie ? true : false
    return (
        <div className={style.pinnedLists}>
            {
                userActive && <h3>Sabitlenen Listeler</h3>
            }
            {
                userActive ? <p>Burada henüz hiçbir şey görünmüyor. Hızlıca erişmek istediğin favori Listelerini üste sabitleyebilirsin.</p> : <p style={{ fontSize: '31px', fontWeight: '800', textAlign: 'center', color: '#ddd' }}>@{params} henüz Liste oluşturmadı</p>
            }

        </div>
    )
}

export default PinnedLists