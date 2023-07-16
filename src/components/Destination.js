import Mountain1 from '../assets/1.jpg'
import Mountain2 from '../assets/2.jpg'
import Mountain3 from '../assets/3.jpg'
import Mountain4 from '../assets/4.jpg'
import Mountain5 from '../assets/5.jpg'
import Mountain6 from '../assets/6.jpg'
import Mountain7 from '../assets/7.jpg'


const Destination = ()=>{
    return(
        <div className='destination'>
            <h1>Popular Destination</h1>
            <p>Tours give you oppourtunity</p>

            <div className='first-des'>
                <div className='des-text'>
                    <h2>Taal Volcano: A Unique Geological Wonder</h2>
                    <p>
                    Taal Volcano is a small but active volcano located in the Philippines. 
                    It is one of the most popular tourist destinations in the country, 
                    thanks to its unique location on an island within a lake within an island. 
                    Visitors can hike to the top of the volcano for stunning views of the surrounding area,
                     or take a boat tour of the lake. Taal Volcano is a must-see for anyone interested in geology or natural wonders.
                    </p>
                </div>
                <div className='image'>
                    <img alt='img' src={Mountain1}/>
                    <img alt='img' src={Mountain2}/>
                </div>
            </div>
        </div>
    )
}

export default Destination