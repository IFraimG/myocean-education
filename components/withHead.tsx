import Head from "next/head";

interface HeadType {
  title: string,
  metaData?: any | null,
  linkData?: any | null
}
const WithHead: React.FC<HeadType> = ({title, metaData = null, linkData = null}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        { metaData != null ? metaData.map((metaObject: any, index: number) => {
          return <meta key={index} name={metaObject.metaName} content={metaObject.contentData} />
        }) : ""}
        
        { linkData != null ? linkData.map((linkObject: any, index: number) => {
          return <link key={index} rel={linkObject.rel} href={linkObject.href} />
        }) : ""}
      </Head>
    </>
  )
};

export default WithHead;