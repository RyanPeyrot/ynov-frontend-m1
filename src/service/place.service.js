export default {
    getAllPlaces(token){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/place`,{
            method : "GET",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            },
        }).then(res => res.json())
    },
    getMyPlaces(token){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/place/myplaces`,{
            method : "GET",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            },
        }).then(res => res.json())
    },
    getMyPlace(token,id){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/place/myplace/${id}`,{
            method : "GET",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            },
        }).then(res => res.json())
    }
}