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
    getOnePlace(token,id){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/place/one/${id}`,{
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
    },
    getAllTypePlace(token){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/type-place/all`,{
            method : "GET",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            },
        }).then(res => res.json())
    },
    createPlace(token,place){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/place`,{
            method : "POST",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            },
            body: JSON.stringify(place)
        }).then(res => res.json())
    },
    updatePlace(token,place){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/place/myplace/${place._id}`,{
            method : "PUT",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            },
            body: JSON.stringify(place)
        }).then(res => res.json())
    },
    deletePlace(token,placeID){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/place/myplace/${placeID}`,{
            method : "DELETE",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            }
        }).then(res => res.json())
    }
}
