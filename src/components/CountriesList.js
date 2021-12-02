import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

function CountriesList(props) {
   
   
    return (
        <div> 
            <Link to={`${props.countries.alpha3Code}`} >
        {props.countries.name}
            </Link>

        </div>
    )
}

export default CountriesList
