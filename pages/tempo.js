function Tempo({ staticDateString }) {
    console.log("Passando pelo frontEnd");
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
  return (
    <div>
      <h1>Tempo Page</h1>
      {dynamicDateString}(dinamico)
        <br />
      {staticDateString}(estatico)
    </div>
  );
}

export async function getStaticProps() {
    console.log("Passando pelo getStaticProps");
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
  return {
    props: { staticDateString },
  };
}

export default Tempo;