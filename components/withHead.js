import Head from "next/head";
import { useRouter } from "next/router"

const WithHead = ({title, metaData = null, linkData = null}) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>

        { metaData != null ? metaData.map((metaObject, index) => {
          return <meta key={index} name={metaObject.metaName} content={metaObject.contentData} />
        }) : ""}
        
        { linkData != null ? linkData.map((linkObject, index) => {
          return <link key={index} rel={linkObject.rel} href={linkObject.href} />
        }) : ""}
      </Head>
    </>
  )
};

export default WithHead;