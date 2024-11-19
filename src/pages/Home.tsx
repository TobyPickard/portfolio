// import { useState } from 'react'
import TopNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "./About";
import ListProjects from "./ListProjects";
export default function Home() {
    return (
        <>
            <TopNavbar />
            <About />
            <ListProjects />
            <Footer />
        </>
    )
}
