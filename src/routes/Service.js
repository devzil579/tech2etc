import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

function Service(){
    return (
        <>
        <Navbar/>
        <Hero
        cName = 'hero'
        heroImg = 'https://burst.shopifycdn.com/photos/blue-mountain-landscape.jpg?width=925&format=pjpg&exif=1&iptc=1'
        title='Service'
        text='Choose your favourite destination'
        buttonText='Travel Plan'
        url='/'
        btnClass='show'
        />
        </>
    )
}

export default Service;