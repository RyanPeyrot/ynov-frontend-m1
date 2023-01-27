import PlaceGrid from "../components/PlaceGrid";
import {useEffect, useState} from "react";
import placeService from "../service/place.service";

export default function Home() {
    const [places, setPlaces] = useState( []);

   useEffect(() => {
        placeService.getAllPlaces(localStorage.getItem('token'))
            .then(res => {
                setPlaces(res);
            })
    }, [])

    return (
      <main>
          <PlaceGrid places={places}></PlaceGrid>
      </main>
  )
}
