import { useParams } from 'react-router';
import allCountries from '../countries.json';
import { useState, useEffect } from 'react';

function CountryDetails() {
  const [countries, setCountries] = useState([]);
  const { alpha } = useParams();

  useEffect(() => {
    let filteredCountries = allCountries.filter((country) => {
      return country.alpha3Code === alpha;
    });

    setCountries(filteredCountries);
  }, [alpha]);

  if (!countries.length) {
    return <p>Loading . . . </p>;
  }

  let [details] = countries;
  console.log(details);

  return (
    <div>
      <p>Capital:{details.capital}</p>
      <p>Region: {details.region}</p>
      etc...
    </div>
  );
}

export default CountryDetails;
