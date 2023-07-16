import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/night.jpg"
function About(){
    return (
        <>
        <Navbar/>
        <Hero
        cName = 'hero-mid'
        heroImg = {AboutImg}
        title='About'
        text='Choose your favourite destination'
        btnClass='hide'
        />
        </>
    )
}

export default About;