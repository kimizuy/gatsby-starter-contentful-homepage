import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import "../styles.css"

const Layout = (props: any) => {
  return (
    <>
      <Head {...props} />
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
