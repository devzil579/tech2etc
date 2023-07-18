import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer';
import ContactForm from '../components/contactForm';

function Contact(){
    return (
        <>
        <Navbar/>
        <Hero
        cName = 'hero'
        heroImg = 'https://burst.shopifycdn.com/photos/setting-sun-illuminates-train-platform.jpg?width=925&format=pjpg&exif=1&iptc=1'
        title='Contact'
        text='Choose your favourite destination'
        buttonText='Travel Plan'
        url='/'
        btnClass='show'
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;