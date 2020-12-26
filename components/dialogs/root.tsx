function* topGenerator() {
  let info = yield 1;
  console.log(info);
  
  yield 2;
  yield 3;
  yield 4;
}

const Dialogs = ({}) => {
  let generator = topGenerator()
  console.log(generator.next("heelllo"));
  console.log(generator.next("hellllo"));
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  
  return (
    <>
      <div>fergtrs</div>
    </>
  );
}

export default Dialogs