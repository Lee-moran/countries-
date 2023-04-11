import React,{useState, useEffect} from 'react'

const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    const [countries, setCountries] = useState([])

    const fetchCountryData = async() => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
    }

    useEffect(()=> {
        fetchCountryData()
    }, [])

  return (
    <>
    {countries.map((country)=>{
        const{ name, population, region, capital, flag} = country
        
        return <article key={flag}>
            <div>
                <img src={flag} alt={name}/>
                <h3>{name}</h3>
                <h4>Population: <span>{population}</span></h4>
                <h4>Region: <span>{region}</span></h4>
                <h4>Capital: <span>{capital}</span></h4>
            </div>
        </article>
    
    })}
    </>
  )
}

export default Countries
