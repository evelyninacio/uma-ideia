function Tempo({ staticDateString }) {
    console.log("Passando pelo frontEnd");
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
  return (
    <div>
      <h1>Tempo Page</h1>
      {dynamicDateString}(dinamico)
        <br />
      {staticDateString}(estatico com delay)
    </div>
  );
}

export async function getStaticProps() {
    console.log("Passando pelo getStaticProps");
    console.log("Delay de 5 segundos");

    await delay(5000);
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
  return {
    props: { staticDateString },
  };
}
const delay = ms => new Promise(res => setTimeout(res, ms));
export default Tempo;