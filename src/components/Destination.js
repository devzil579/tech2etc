import Mountain1 from '../assets/1.jpg'
import Mountain2 from '../assets/2.jpg'
import Mountain3 from '../assets/3.jpg'
import Mountain4 from '../assets/4.jpg'

import DestinationData from './DestinationData'
import './DestinationStyle.css'

const Destination = ()=>{
    return(
        <div className='destination'>
            <h1>Popular Destination</h1>
            <p>Tours give you oppourtunity</p>

           <DestinationData
           className="first-des"
           heading="Taal Volcano: A Unique Geological Wonder"
           text="Taal Volcano is a small but active volcano located in the Philippines. 
           It is one of the most popular tourist destinations in the country, 
           thanks to its unique location on an island within a lake within an island. 
           Visitors can hike to the top of the volcano for stunning views of the surrounding area,
            or take a boat tour of the lake. Taal Volcano is a must-see for anyone interested in geology or natural wonders."
            img1={Mountain1}
            img2={Mountain2}
            />

            <DestinationData
            className="first-des-reverse    "
            heading="Mt. Daguldol: Batangas"
            text="Mt. Daguldol is a coastal mountain in Batangas that offers stunning views of the surrounding mountains and beaches. The hike to the summit is relatively easy, making it a popular destination for day hikers. Along the way, hikers will pass through lush vegetation and cool mountain air. The summit offers panoramic views of the coastline, making it a great place to watch the sunrise or sunset."
             img1={Mountain3}
             img2={Mountain4}
            />
        </div>
    )
}

export default Destination