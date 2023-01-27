import {useEffect, useState} from 'react';
import {useRouter} from "next/router";

const WithAuth = (WrappedComponent) => {

    // eslint-disable-next-line react/display-name
    return () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const router = useRouter();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isLogged, setIsLogged] = useState(false)

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            const token = localStorage.getItem('token')
            if (!token) {
                setIsLogged(false);
                router.push("/login");
            } else {
                setIsLogged(true);
            }
        }, [])

        if (isLogged) {
            return <WrappedComponent></WrappedComponent>
        } else {
            return false;
        }
    }
};

export default WithAuth;