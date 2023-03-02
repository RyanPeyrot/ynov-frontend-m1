export default {
    getAll(token){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/user/all`,{
            method : "GET",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            },
        }).then(res => res.json())
    },
    getMe(token){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/user`,{
            method : "GET",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            },
        }).then(res => res.json())
    },

    update(token,user){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/user`,{
            method : "PUT",
            headers: {
                'Content-type':"application/json",
                'authorization':token
            },
            body : JSON.stringify(user),
            userToken:JSON.stringify(token.id)
        }).then(res => res.json())
    }
}