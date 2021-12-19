import React from "react"

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readmore, setReadmore] = React.useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadmore(!readmore)}>
            {readmore ? "show less" : "Read more"}
          </button>{" "}
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
