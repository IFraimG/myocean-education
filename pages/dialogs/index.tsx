//@ts-ignore
import Dialogs from "../../components/dialogs/root"
import HeadComponent from "../../components/withHead"

function ContainerDialogs({}) {
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
      <Dialogs />
    </>
  );
}

export default ContainerDialogs