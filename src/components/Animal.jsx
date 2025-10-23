import React, { useEffect, useState } from "react";

function AnimalList() {
  const [animals, setAnimals] = useState([]);
  const [quotes, setQuotes] = useState("");
  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/dogs?name=golden retriever ", {
      headers: {
        "X-Api-Key": "04fQGD2aTGGlAkV1osivfg==1eyjpmQ1IWN8jjWP"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // See the dog data in console
        setAnimals(data);
      })
      .catch(error => console.error(error));
  }, []);
    return (
    <div>
        
        {animals.map((animal, index) => (
            <li key={index}>
            {animal.image_link && (
              <img src={animal.image_link} className="m-10 w-[200px] h-[200px] object-cover"/>
            )}
            </li>
        ))}
    </div>
    );
}
export default AnimalList;