export default {
    register(body){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/auth/register`,{
            method : "POST",
            headers: {
                'Content-type':"application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
    },
    login(body){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/v1/auth/login`,{
            method : "POST",
            headers: {
                'Content-type':"application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
    },
}

