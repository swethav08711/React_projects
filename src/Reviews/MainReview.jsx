import React from "react"
import Review from "./Review"
import "./style.css"
const MainReview = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Review />
    </main>
  )
}

export default MainReview
