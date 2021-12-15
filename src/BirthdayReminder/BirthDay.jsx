import React, { useState } from "react"
import "./styles.css"
import data from "./data"
import List from "./List"
const BirthDay = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  )
}

export default BirthDay
