import '../styles/globals.scss'
import AdminLayout from "../layouts/AdminLayout";
import MainLayout from "../layouts/MainLayout";
import {useRouter} from "next/router";
import {WishlistContextProvider} from "../context/WishlistContext";
import {UserContextProvider} from "../context/UserContext";

function MyApp({ Component, pageProps }) {
    const router = useRouter()
  return (
      <>
      {
          router && router.asPath.startsWith('/admin') ? (
              <AdminLayout>
                  <Component {...pageProps} />
              </AdminLayout>
          ) : (

              <UserContextProvider>
                  <WishlistContextProvider>
                  <MainLayout>
                    <Component {...pageProps} />
                  </MainLayout>
                  </WishlistContextProvider>
              </UserContextProvider>
              )
      }
      </>
  )
}

export default MyApp
