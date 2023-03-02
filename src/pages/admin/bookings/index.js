import React, {useEffect, useState} from 'react';
import Styles from './index.module.scss'
import BookingService from "../../../service/booking.service";

const Index = () => {
    const [bookings,setBookings] = useState([]);

    useEffect(() => {
        BookingService.getAll(localStorage.getItem('token')).then(res => {
            setBookings(res);
            console.log(res);
        })
    },[])

    return (
        <div>
            <table className={Styles.table__admin}>
                <thead>
                <tr>
                    <th>Place title</th>
                    <th>Guest</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                    <th>Number of night(s)</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    bookings.length > 0 && bookings.map((booking) => {
                       return (
                            <tr key = {booking._id}>
                                <td>{booking.place.title}</td>
                                <td>{booking.guest != null ? booking.guest.id : null}</td>
                                <td>{new Date(booking.arrival).toLocaleString('fr-FR').split(' ')[0]}</td>
                                <td>{new Date(booking.departure).toLocaleString('fr-FR').split(' ')[0]}</td>
                                <td>{booking.numberOfNight}</td>
                                <td>{booking.status}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Index;