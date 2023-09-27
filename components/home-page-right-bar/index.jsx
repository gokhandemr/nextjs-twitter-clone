import style from './style.module.css'
import SearchForm from './SearchForm'
import SubscribeBox from './SubscribeBox'
import AgendaBox from './AgendaBox'
import FollowBox from './FollowBox'
import Details from './Details'

function HomePageRightBar() {
    return (
        <aside className={style.aside}>
            <SearchForm />
            <SubscribeBox />
            <AgendaBox />
            <FollowBox />
            <Details />
        </aside>
    )
}

export default HomePageRightBar