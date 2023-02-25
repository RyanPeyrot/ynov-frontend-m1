import '../styles/globals.scss'
import AdminLayout from "../layouts/AdminLayout";
import MainLayout from "../layouts/MainLayout";
import {useRouter} from "next/router";
import {WishlistContextProvider} from "../context/WishlistContext";
import {UserContextProvider} from "../context/UserContext";
import {PlaceContextProvider} from "../context/PlaceContext";

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
              <PlaceContextProvider>
                  <MainLayout>
                    <Component {...pageProps} />
                  </MainLayout>
              </PlaceContextProvider>
              </WishlistContextProvider>
              </UserContextProvider>
              )
      }
      </>
  )
}

export default MyApp
