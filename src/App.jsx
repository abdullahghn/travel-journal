import React from "react"
import Navbar from "../components/Navbar"
import Location from "../components/Location"
import Footer from "../components/Footer"
import locationData from "./locationData"
import './App.css'

export default function App() {

  const locationElement = locationData.map((location) => {
    return <Location 
              key={location.id}
              item={location}
            />
  })
  
  return (
    <div>
      <Navbar />
      {locationElement}
      <Footer />
    </div>
  )
}