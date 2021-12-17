import React, { useState } from "react"
import people from "./data"

import { BsBlockquoteLeft } from "react-icons/bs"
//import { BsFillArrowDownRightSquareFill } from "react-icons/bs"
import { SiAdguard } from "react-icons/si"
import { SiAcclaim } from "react-icons/si"
const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  return (
    <article className="review">
      {/* <BsFillArrowDownRightSquareFill /> */}
      <BsBlockquoteLeft />
      <SiAdguard />
      <div>
        <SiAcclaim />
      </div>
      {/* <div className="img-container"> */}

      {/* <img src={image} alt={name} className="person-img" />
        <span className="quote-icon"></span>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn"></button>
          <button className="next-btn"></button>
        </div>
        <button className="random-btn">surprise Me</button> */}
      {/* </div> */}
    </article>
  )
}

export default Review
