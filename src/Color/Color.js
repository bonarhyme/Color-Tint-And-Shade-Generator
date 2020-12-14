import React, { useState } from "react"
import Values from "values.js"
import SingleColor from "./SingleColor"
import "./Color.css"

const Color = () => {
  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [colorList, setColorList] = useState(new Values("#333333").all(5))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(5)
      setColorList(colors)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <main>
      <section>
        <h1>
          <span>Color</span> <span>Shade</span> <span>And</span>
          <span>Tint</span>
          <p>
            <span>G</span>
            <span>e</span>
            <span>n</span>
            <span>e</span>
            <span>r</span>
            <span>a</span>
            <span>t</span>
            <span>o</span>
            <span>r</span>
          </p>
        </h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="hex">Enter Hex color: </label>
            <input
              type="text"
              id="hex"
              name="hex"
              value={color}
              placeholder="#333333"
              onChange={(e) => setColor(e.target.value)}
              className={error ? "error" : null}
            />
            <button type="submit">Generate</button>
          </form>
        </div>
        <div className="content-container">
          {colorList.map((oneColor, index) => {
            return (
              <SingleColor
                {...oneColor}
                index={index}
                key={index}
                hex={oneColor.hex}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Color
