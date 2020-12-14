import React, { useState, useEffect } from "react"

const SingleColor = ({ rgb, weight, index, hex, type }) => {
  const [alert, setAlert] = useState(false)
  const bgc = rgb.join(",")
  const hexValue = `#${hex}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])
  return (
    <article
      style={{ backgroundColor: `rgb(${bgc})` }}
      className={`${index > 10 && "color-light"}`}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      <p className="color-type">{type}</p>
      {alert && <span className="alert">copied to clipboard</span>}
    </article>
  )
}

export default SingleColor
