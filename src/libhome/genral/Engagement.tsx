import LiveLearning from "../custom/LiveLearning"
import LiveShoppingHome from "../custom/LiveShoppingHome"
import LiveSports from "../custom/LiveSports"
import GameShows from "../custom/GameShows"
export default function Engagement(){
    return(
        <section>
            <LiveLearning/>
            <LiveShoppingHome/>
            <LiveSports/>
            <GameShows/>
        </section>
    )
}