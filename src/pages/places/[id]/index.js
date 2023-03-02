import React, {useContext, useEffect, useState} from 'react';
import PlaceService from "../../../service/place.service";
import {useRouter} from "next/router";
import styles from './index.module.scss'
import bookingService from "../../../service/booking.service";
import UserContext from "../../../context/UserContext";

const Index = () => {
    const {user} = useContext(UserContext);
    const router = useRouter();
    const [place,setPlace] = useState(null);
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [night, setNight] = useState();
    const [total, setTotal] = useState();
    const [booking,setBooking] = useState();

    useEffect(() => {
        if(router.isReady) {
            PlaceService.getOnePlace(localStorage.getItem('token'), router.query.id)
                .then(res => {
                    setPlace(res);
                })
        }
    },[router.isReady])

    function book(){
        if(checkIn.toString() === "Invalid Date"){
            document.getElementById("check-in").parentElement.style.borderColor = "#d62828"
            document.getElementById("iError").innerHTML = "Date invalide"
            return false;
        }
        if(checkOut.toString() === "Invalid Date" || checkOut <= checkIn){
            document.getElementById("check-out").parentElement.style.borderColor = "#d62828"
            document.getElementById("iError").innerHTML = "Date invalide"
            return false
        }

        if(user == null){
            router.push('/login');
            localStorage.setItem('redirect',router.asPath)
            return null;
        }

        const newBooking = {
            place : router.query.id,
            guest: user._id,
            arrival : checkIn,
            departure : checkOut,
            numberOfNight : night
        }

        bookingService.createOne(localStorage.getItem('token'),newBooking);
    }

    function inputEnter(e) {
        if(e.key === 'Enter' || e.key === 'Tab' || e.type === 'blur' ){
            const date = verifyDate(e.target.value);
            if(date.toString() === "Invalid Date" || date < new Date()){
                e.target.parentElement.style.borderColor = "#d62828"
                document.getElementById("iError").innerHTML = "Date invalide"
            } else {
                if(e.target.id === 'check-in'){
                    setCheckIn(date);
                    e.target.parentElement.style.borderColor = "#000"
                    document.getElementById("iError").innerHTML = ""
                } else if(e.target.id === 'check-out'){
                    if(checkIn != null && date > checkIn){
                        setCheckOut(date);
                        e.target.parentElement.style.borderColor = "#000"
                        document.getElementById("iError").innerHTML = ""
                    } else {
                        e.target.parentElement.style.borderColor = "#d62828"
                        document.getElementById("iError").innerHTML = "Date invalide"
                    }
                }
            }
        }

    }

    useEffect(() => {
        if(checkOut != null){
            if(checkOut.toString() !== "Invalid Date" || checkOut > checkIn){
                const numberOfDay = (checkOut.getTime() - checkIn.getTime())/ (1000 * 3600 * 24)
                setNight(numberOfDay);
                setTotal(numberOfDay * place.pricing.perDay);
            } else {
                setTotal('');
            }
        } else {
            setTotal('');
        }
        if(document.getElementById("totalPrice") != null){
            document.getElementById("totalPrice").innerHTML = total;
        }
    },[checkOut]);

    function verifyDate(value){
        const dateAr = value.split('/');
        const date = dateAr[2]+"-"+dateAr[1]+"-"+dateAr[0]+"T00:00:00Z";
        return new Date(date);
    }


    if(place != null) {
        return (
            <div className={styles.container}>
                <div className={styles.title__container}>
                    <h1 className={styles.title__header}>{place.title}</h1>
                    <div className={styles.title__sub}>
                        {
                            place.rate != null
                                ? (<span>{place.rate}</span>)
                                : (<span>0,00</span>)
                        }
                        <span>.</span>
                        <span>{place.owner.lastName}</span>
                        <span>.</span>
                        <span>{place.address.city}, {place.address.zipCode}</span>
                    </div>
                </div>
                <div className={styles.img__container}>
                    <div className={styles.img1}><img src={place.image[0]}/></div>
                    <div className={styles.img2}><img src={place.image[0]}/></div>
                    <div className={styles.img3}><img src={place.image[0]}/></div>
                    <div className={styles.img4}><img src={place.image[0]}/></div>
                    <div className={styles.img5}><img src={place.image[0]}/></div>
                </div>
                <div className={styles.desc__container}>
                    {place.description}
                </div>
                <div className={styles.booking__container}>
                    <div className={styles.booking__calendar}></div>
                    <div className={styles.booking__recap}>
                        <div className={styles.booking__recap__header}>
                            <div>
                                <span>€</span>
                                <span>{place.pricing.perDay}</span>
                                <span>/Nuit</span>
                            </div>
                            <div></div>
                            <div>
                                {
                                    place.rate != null
                                        ? (<span>{place.rate}</span>)
                                        : (<span>0,00</span>)
                                }
                            </div>
                        </div>
                        <div className={styles.booking__recap__input__container}>
                            <div>
                                <input id="check-in" onBlur={(e) => inputEnter(e)} onKeyDown={(e) => inputEnter(e)} placeholder="DD/MM/YYYY"/>
                            </div>
                            <div>
                                <input id="check-out" onBlur={(e) => inputEnter(e)} onKeyDown={(e) => inputEnter(e)} placeholder="DD/MM/YYYY"/>
                            </div>
                        </div>
                        <i id="iError" className={styles.errorDate}></i>
                        <div className={styles.booking__recap__button} onClick={book}>Reserver</div>
                        <div className={styles.booking__recap__divider}></div>
                        <div className={styles.booking__recap__total}>
                            <div><span>Total</span></div>
                            <div></div>
                            <div>
                                <span>€</span>
                                <span id="totalPrice"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div></div>);
    }
};

export default Index;