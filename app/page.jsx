import About from "@components/About"
import Footer from "@components/Footer"
import Hero from "@components/Hero"
import Navbar from "@components/Navbar"
import Services from "@components/Services"
import Testimonials from "@components/Testimonials"

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}

export default Home
