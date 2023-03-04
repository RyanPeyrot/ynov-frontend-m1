import React, {useEffect, useState} from 'react';
import TitlePage from "../../components/TitlePage";
import PlaceService from "../../service/place.service";
import styles from "./index.module.scss";
import edit from "../../../public/edit.png";
import remove from "../../../public/delete.png";
import PlaceModal from "../../components/PlaceModal";

const Index = () => {
    const [showEdit,setShowEdit] = useState(false);
    const [showNew,setShowNew] = useState(false);
    const [myPlaces,setMyPlaces] = useState([]);
    const [thisPlace, setThisPlace] = useState(null)


    function deletePlace(placeId){
        PlaceService.deletePlace(localStorage.getItem('token'),placeId)
            .then( res => {
                router.push('/myPlaces');
            })
            .catch(err=>console.log(err));
    }

    function handleEdit(place) {
        if(showEdit){
            setThisPlace(null)
            setShowEdit(false);
            document.getElementById("main").classList.remove("blur")
            document.getElementsByTagName("header")[0].classList.remove("blur")
        } else {
            setThisPlace(place)
            setShowEdit(true);
            console.log(place._id)
            document.getElementById("main").classList.add("blur")
            document.getElementsByTagName("header")[0].classList.add("blur")
        }
    }

    function handleNew() {
        if(showNew){
            setThisPlace(null)
            setShowNew(false);
            document.getElementById("main").classList.remove("blur")
            document.getElementsByTagName("header")[0].classList.remove("blur")
        } else {
            setThisPlace(null)
            setShowNew(true);
            document.getElementById("main").classList.add("blur")
            document.getElementsByTagName("header")[0].classList.add("blur")
        }
    }

    useEffect(()=>{
        PlaceService.getMyPlaces(localStorage.getItem('token')).then(res => {
            setMyPlaces(res);
        })
    },[])

    return (
        <div>
            <div id="main">
                <TitlePage title="Mes annonces"></TitlePage>
                <div className={styles.wrapper}>
                    <table className={`${styles.table} ${styles.table__places}`}>
                        <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Type</th>
                            <th>Prix/nuit</th>
                            <th>Note</th>
                            <th>images</th>
                            <th>Capacité</th>
                            <th>Description</th>
                            <th>Adresse</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                           myPlaces.map(place =>
                                (
                                    <tr key={place._id}>
                                        <th>{place.title}</th>
                                        <th>{place.type.title}</th>
                                        <th>{place.pricing.perDay}</th>
                                        <th>{place.rate}</th>
                                        <th>{
                                            place.image.map(img => {
                                                return img.split(/(\\|\/)/g).pop()
                                            })
                                        }</th>
                                        <th>{place.capacity}</th>
                                        <th>{place.description}</th>
                                        <th>{place.address.city}, {place.address.zipCode}</th>
                                        <th><img src={edit.src} onClick={() => handleEdit(place)}/><img onClick={() => deletePlace(place._id)} src={remove.src}/></th>
                                    </tr>
                                )
                            )
                        }
                        </tbody>
                    </table>
                    <button className={styles.button} onClick={handleNew}>Ajouter une annonce</button>
                </div>
            </div>
            <PlaceModal thisPlace={null} modalTitle="Cree une annonce" id="NewPlace" show={showNew} handleModal={handleNew}></PlaceModal>
            <PlaceModal thisPlace={thisPlace} modalTitle="Modifier votre annonce" id="EditPlace" show={showEdit} handleModal={handleEdit}></PlaceModal>
        </div>
    );
};

export default Index;
