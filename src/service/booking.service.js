export default {
    createOne(token,booking){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/booking`,{
            method : "POST",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            },
            body:JSON.stringify(booking)
        }).then(res => res.ok)
    },
    getAll(token){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/booking`,{
            method : "GET",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            }
        }).then(res => res.json())
    },
    getMyBookingsAsGuest(token){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/booking`,{
            method : "GET",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            }
        }).then(res => res.json())
    },
    getMyBookingsAsHost(token){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/booking`,{
            method : "GET",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            }
        }).then(res => res.json())
    }
}