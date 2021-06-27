import { useState, useEffect } from "react";

const localCache = {};
export default function useBreedlist(animal){
  const [breedList, setBreedlist] = useState([]);
  const [status, setStatus] = useState('unloaded');
  
  useEffect(()=>{
    if(!animal){
      setBreedlist([]);
    } else if (localCache[animal]){
      setBreedlist(localCache[animal]);
    } else{
      requestBreedlist();
    }
  
    async function requestBreedlist(){
      setBreedlist([]);
      setStatus('loading');
      const response = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await response.json();
      localCache[animal] = json.breeds || [];
      setBreedlist(localCache[animal]);
      setStatus('loaded');
    }
  }, [animal]);

  return [breedList, status];
}
