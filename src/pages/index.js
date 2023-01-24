import PlaceGrid from "../components/PlaceGrid";
import {useEffect, useState} from "react";
import placeService from "../service/place.service";

const plaaces = [
    {
        "pricing":{
            "perDay": 20
        },
        "address":{
            "city": "Samoreau",
            "street": "allée des arcades",
            "zipCode": 77210
        },
        "title": "chez Test1",
        "type": "Appartement",
        "owner": "63ca6117db2b69af0a0aa2d7",
        "image":[],
        "capacity": 10,
        "description": "Appartement spacieux et vue sur mer",
        "_id" : "63ca6472f872a456e65e01b1"
    },
    {
        "pricing":{
            "perDay": 30
        },
        "address":{
            "city": "Samoreau",
            "street": "allée des arcades",
            "zipCode": 77210
        },
        "title": "chez Test2",
        "type": "Appartement",
        "owner": "63ca6117db2b69af0a0aa2d7",
        "image":[],
        "capacity": 10,
        "description": "Appartement spacieux et vue sur mer",
        "_id" : "63ca6472f872a456e65e01b2"
    },
    {
        "pricing":{
            "perDay": 100
        },
        "address":{
            "city": "Samoreau",
            "street": "allée des arcades",
            "zipCode": 77210
        },
        "title": "chez Test3",
        "type": "Appartement",
        "owner": "63ca6117db2b69af0a0aa2d7",
        "image":[],
        "capacity": 10,
        "description": "Appartement spacieux et vue sur mer",
        "_id" : "63ca6472f872a456e65e01b3"
    },
    {
        "pricing":{
            "perDay": 2000
        },
        "address":{
            "city": "Samoreau",
            "street": "allée des arcades",
            "zipCode": 77210
        },
        "title": "chez Test4",
        "type": "Appartement",
        "owner": "63ca6117db2b69af0a0aa2d7",
        "image":[],
        "capacity": 10,
        "description": "Appartement spacieux et vue sur mer",
        "_id" : "63ca6472f872a456e65e01b4"
    },
    {
        "pricing":{
            "perDay": 20
        },
        "address":{
            "city": "Samoreau",
            "street": "allée des arcades",
            "zipCode": 77210
        },
        "title": "chez Test1",
        "type": "Appartement",
        "owner": "63ca6117db2b69af0a0aa2d7",
        "image":[],
        "capacity": 10,
        "description": "Appartement spacieux et vue sur mer",
        "_id" : "63ca6472f872a456e65e01b1"
    },
    {
        "pricing":{
            "perDay": 30
        },
        "address":{
            "city": "Samoreau",
            "street": "allée des arcades",
            "zipCode": 77210
        },
        "title": "chez Test2",
        "type": "Appartement",
        "owner": "63ca6117db2b69af0a0aa2d7",
        "image":[],
        "capacity": 10,
        "description": "Appartement spacieux et vue sur mer",
        "_id" : "63ca6472f872a456e65e01b2"
    },
    {
        "pricing":{
            "perDay": 100
        },
        "address":{
            "city": "Samoreau",
            "street": "allée des arcades",
            "zipCode": 77210
        },
        "title": "chez Test3",
        "type": "Appartement",
        "owner": "63ca6117db2b69af0a0aa2d7",
        "image":[],
        "capacity": 10,
        "description": "Appartement spacieux et vue sur mer",
        "_id" : "63ca6472f872a456e65e01b3"
    },
    {
        "pricing":{
            "perDay": 2000
        },
        "address":{
            "city": "Samoreau",
            "street": "allée des arcades",
            "zipCode": 77210
        },
        "title": "chez Test4",
        "type": "Appartement",
        "owner": "63ca6117db2b69af0a0aa2d7",
        "image":[],
        "capacity": 10,
        "description": "Appartement spacieux et vue sur mer",
        "_id" : "63ca6472f872a456e65e01b4"
    }
]

export default function Home() {
    const [places, setPlaces] = useState( [{
        _id: "",
        pricing:{
            perDay:null
        },
        address:{
            city: "",
            street: "",
            zipCode: null,
        },
        title: "",
        type: "",
        owner:"",
        image:[],
        capacity: null,
        description: "",
    }]);

    useEffect(() => {
        placeService.getAllPlaces(localStorage.getItem('token'))
            .then((res) => {
                const placesToDisplay = [...res]
                setPlaces(placesToDisplay );
            })
    }, [])

  return (
      <main>
          <PlaceGrid places={places}></PlaceGrid>
      </main>
  )
}
