import React, {useEffect, useState} from 'react';
import TitlePage from "../../components/TitlePage";
import PlaceService from "../../service/place.service";

const Index = () => {
    const [myPlaces,setMyPlaces] = useState([]);

    useEffect(()=>{
        PlaceService.getMyPlaces(localStorage.getItem('token')).then(res => {
            console.log(localStorage.getItem('token'));
            setMyPlaces(res);
        })
    },[])

    return (
        <div>
            <TitlePage title="Mes annonces"></TitlePage>
            {
                myPlaces.length > 0 ? (
                    <ul>

                        {
                            myPlaces.map(place => {
                                (
                                    <li key={place._id} onClick={handleModal(place)}>{place.title}</li>
                                )
                            })
                        }
                    </ul>
                ) : (null)
            }
        </div>
    );
};

export default Index;