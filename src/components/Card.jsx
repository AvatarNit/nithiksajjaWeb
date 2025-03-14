import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({iconHTML,title="",disc="",link,btnText, target_="_blank"}) => {
  return (
    <div className="col-md-4 mb-4">
        <div className="card custom-card text-center p-3">
            {iconHTML}
            <h3 className="mt-3">{title}</h3>
            <p>{disc}</p>
            <Link href={link} target={target_} className="btn btn-website">{btnText}</Link>
        </div>
    </div>
  )
}

export default Card