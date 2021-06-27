import { useEffect, useState } from 'react';
import useBreedlist from './useBreedlist';
import Results from './Results'

const ANIMALS = ["bird", "cat", "dog"]

const SearchParams = () =>{
  const [location, setLocation] = useState(" "); 
  const [animal, setAnimal] = useState(" ");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedlist(animal);

  useEffect(()=>{
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //square brackets tell it not to re-run after every render, telling it to only do it once. Putting animal in the brackets gives it the condition to change when animal does

  async function requestPets(){
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await response.json();
    setPets(json.pets);
  }

  return(
    <div className = "search-params">
      <form
        onSubmit={ e => {
            e.preventDefault();
            requestPets();
          }
        }
      >
        <label htmlFor = "location">
          location
          <input id ="location" onChange = {e => setLocation(e.target.value)} value = {location.toUpperCase()} placeholder ="Location " />
        </label>
        <label htmlFor ="animal">
          animal
          <select 
            id = "animal"
            value = {animal}
            onChange ={e => setAnimal(e.target.value)}
            onBlur = {e => setAnimal(e.target.value)}
          >
            <option value =""></option>
            {
              ANIMALS.map(animal =>(
                <option value = {animal} key = {animal}>
                  {animal}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor ="breed">
          breed
          <select 
            id = "breed"
            value = {breed}
            onChange ={e => setBreed(e.target.value)}
            onBlur = {e => setBreed(e.target.value)}
          >
            <option value =""></option>
            {
              breeds.map(breed =>(
                <option value = {breed} key = {breed}>
                  {breed}
                </option>
              ))
            }
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets = {pets} />
    </div>
  );
};

export default SearchParams;