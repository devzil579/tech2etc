import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip';
import Footer from '../components/Footer';
function Home(){
    return (
        <>
        <Navbar/>
        <Hero
        cName = 'hero'
        heroImg = 'https://burst.shopifycdn.com/photos/top-of-tower.jpg?width=373&format=pjpg&exif=1&iptc=1'
        title='Your Journey Your story'
        text='Choose your favourite destination'
        buttonText='Travel Plan'
        url='/'
        btnClass='show'
        />
        <Destination />
       
        <Footer/>
        </>
    )
}

export default Home;