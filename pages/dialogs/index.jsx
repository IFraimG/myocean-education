import HeadComponent from "../../components/withHead"

function ContainerDialogs() {
  return (
    <>
      <HeadComponent
        title="MyOcean Education"
        metaData={[
          {
            metaName: "description",
            contentData:
              "Главная страница образовательной платформы MyOcean Education",
          },
        ]}
        linkData={[{}]}
      />
      <div>fergtrs</div>
    </>
  );
}

export default ContainerDialogs