import React, {useContext, useEffect, useState} from 'react';
import styles from './index.module.scss'
import FormInput from "../FormInput";
import PlaceService from "../../service/place.service";
import {useRouter} from "next/router";
import UserService from "../../service/user.service";

const Index = ({modalTitle,show, handleModal,validModal,thisPlace}) => {
    const router = useRouter();
    const [images,setImages] = useState(thisPlace != null ? [thisPlace.image] : []);
    const placeSchema = {
        "title" : "",
        "type":"",
        "owner":"",
        "pricing":{
            "perDay":""
        },
        "rate" :"",
        "image":[],
        "capacity" : "",
        "description" : "",
        "address" : {
            "city" :"",
            "street" :"",
            "zipCode" :"",
        }
    }
    const [place,setPlace] = useState(thisPlace != null ? thisPlace : placeSchema);
    const [types,setTypes] = useState([]);
    const [nbImage,setNbImage] = useState(0)

    useEffect(()=>{
        PlaceService.getAllTypePlace(localStorage.getItem('token')).then(res => {
            setTypes(res);
        })
        UserService.getMe(localStorage.getItem('token')).then(res => {
            setPlace({...place, ['owner']: res._id});
        })
    },[])

    useEffect(() => {
        if(thisPlace != null){
            setPlace(thisPlace);
            setNbImage(thisPlace.image.length);
            setImages(thisPlace.image);
        }
        if(show === false){
            setPlace(placeSchema);
            setNbImage(0);
            setImages([]);
        }
    },[show])


    const handleInput = (e) => {
        if(e.target.name.includes('address')){
            setPlace({...place, ["address"]: {...place.address,[e.target.name.split('.')[1]]: e.target.value}});
        } else if(e.target.name.includes('pricing')){
            setPlace({...place, ["pricing"]: {...place.address,[e.target.name.split('.')[1]]: e.target.value}})
        } else {
            setPlace({...place, [e.target.name]: e.target.value});
        }
    }

    function addImageInput() {
        setNbImage(nbImage+1);
        let el = document.createElement("input");
        el.name = "image";
        el.type = "text";
        el.placeholder="Lien de l'image";
        el.classList.add(styles.in__img);
        el.key = nbImage;
        el.onchange = (e) => handleChangeImage(e,e.target.key)
        document.getElementById("img__in__wrapper").appendChild(el);
    }

    function submit() {
        setPlace({...place, ['description']: document.querySelector('[name="description"]').value});
        setPlace({...place, ['image']: images});
        setPlace({...place, ['type']: document.querySelector('[name="type"]').value});
        if(thisPlace != null){
            PlaceService.updatePlace(localStorage.getItem('token'),place)
                .then( res => {
                    router.push('/myPlaces');
                })
                .catch(err=>console.log(err));
        } else {
            PlaceService.createPlace(localStorage.getItem('token'),place)
                .then( res => {
                    router.push('/myPlaces');
                })
                .catch(err=>console.log(err));
        }
        handleModal();
    }

    function handleChangeImage(event, index) {
        const newImages = [...images];
        newImages[index] = event.target.value;
        setImages(newImages);
        console.log(images);
    }



    return ( show &&
            <div className={styles.wrapper}>
                <div onClick={handleModal} className={styles.overlay}></div>
                <div className={`${styles.modal__main}`}>
                    <div className={styles.modal__header}>
                    <h1>{modalTitle}</h1>
                    <button onClick={handleModal} className={styles.closeBtn}>X</button>
                    </div>
                    <div className={styles.modal__content}>
                        <FormInput titleLabel="Title" type="text" placeholder="Titre de l'annonce" inputName="title" inputValue={place != null ? place.title : ""} inputOnChange={(e) => handleInput(e)}></FormInput>
                        <label className={styles.lb__input} htmlFor="type">Type de logement</label>
                        <select className={styles.sl__type} name="type" onChange={(e) => setPlace({...place, ['type']: e.target.value})} >
                            <option value="">Choisis un type</option>
                            {
                                types.map(type => (
                                    place.type._id === type._id
                                        ? <option key={type._id} value={type._id} selected>{type.title}</option>
                                        : <option key={type._id} value={type._id}>{type.title} </option>
                                ))
                            }
                        </select>
                        <FormInput titleLabel="Prix/nuit" type="text" placeholder="Prix de la nuit" inputName="pricing.perDay" inputValue={place != null ? place.pricing.perDay : ""} inputOnChange={(e) => handleInput(e)}></FormInput>
                        <div className={styles.lb__img__wrapper}>
                            <label className={styles.lb__input} htmlFor="image">Image(s)</label>
                            <button className={styles.btn__image} onClick={() => addImageInput()}>+</button>
                        </div>
                        <div id="img__in__wrapper">
                            {
                                place != null ? place.image.map((img,index) => {
                                       return (<input key={index} className={`${styles.in__img}`} name="image" type="text" placeholder="Lien de l'image" value={images[index] != null ? images[index] : img} onChange={(e) => handleChangeImage(e,index)}/>)
                                    }
                                    ) : <input key={0} className={`${styles.in__img}`} name="image" type="text" placeholder="Lien de l'image" onChange={(e) => handleChangeImage(e,e.target.key)}/>
                            }
                        </div>
                        <FormInput titleLabel="Capacité" type="text" placeholder="Nombre de places" inputName="capacity" inputValue={place != null ? place.capacity : ""} inputOnChange={(e) => handleInput(e)}></FormInput>
                        <label className={styles.lb__input} htmlFor="description">Description de l'annonce</label>
                        <textarea className={styles.ta__description} name="description" rows="6" placeholder="Description de l'annonce" value={place != null ? place.description : ""} onChange={(e) => handleInput(e)} maxLength="500"></textarea>
                        <FormInput titleLabel="Adresse" type="text" placeholder="localisation de l'annonce" inputName="address.street" inputValue={place != null ? place.address.street : ""} inputOnChange={(e) => handleInput(e)}></FormInput>
                        <div className={styles.address__wrapper}>
                            <FormInput titleLabel="Ville" type="text" placeholder="Ville" inputName="address.city" inputValue={place != null ? place.address.city : ""} inputOnChange={(e) => handleInput(e)}></FormInput>
                            <FormInput titleLabel="Code postal" type="text" placeholder="Code postal" inputName="address.zipCode" inputValue={place != null ? place.address.zipCode : ""} inputOnChange={(e) => handleInput(e)}></FormInput>
                        </div>
                    </div>
                    <button onClick={submit} className={styles.validBtn}>Valider</button>
                </div>
            </div>
    );
};

export default Index;
