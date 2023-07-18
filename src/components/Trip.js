import './TripStyle.css'
import TripData from './TripData'
import Mountain5 from '../assets/5.jpg'
import Mountain6 from '../assets/6.jpg'
import Mountain7 from '../assets/7.jpg'
function Trip(){
    return(
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps</p>
            <div className='tripcard'>
                <TripData
                image={Mountain5}
                heading="Trip in indonesia"
                text="Indonesia is a vast archipelago with a rich culture and history. From the bustling streets of Jakarta to the serene beaches of Bali, there is something for everyone in Indonesia. Whether you're interested in ancient temples, lush rainforests, or stunning coral reefs, you're sure to have an unforgettable trip to Indonesia. "
                />
                <TripData
                image={Mountain6}
                heading="Trip in Malaysia"
                text="Indonesia is a vast archipelago with a rich culture and history. From the bustling streets of Jakarta to the serene beaches of Bali, there is something for everyone in Indonesia. Whether you're interested in ancient temples, lush rainforests, or stunning coral reefs, you're sure to have an unforgettable trip to Indonesia. "
                />
                <TripData
                image={Mountain7}
                heading="Trip in France"
                text="Indonesia is a vast archipelago with a rich culture and history. From the bustling streets of Jakarta to the serene beaches of Bali, there is something for everyone in Indonesia. Whether you're interested in ancient temples, lush rainforests, or stunning coral reefs, you're sure to have an unforgettable trip to Indonesia. "
                />
            </div>
        </div>
    )
}

export default Trip;