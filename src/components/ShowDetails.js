import * as React from 'react'

export default function ShowDetails(props) {
    
  return (
    <div>
      <h1>MODELS</h1>
        <p>Manufacturer: {props.show.manufacturer}</p>
        <p>Year: {props.show.year}</p>
        <p>Origin: {props.show.origin}</p>      
    </div>
  )
}
