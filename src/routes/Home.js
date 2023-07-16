import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

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
        </>
    )
}

export default Home;