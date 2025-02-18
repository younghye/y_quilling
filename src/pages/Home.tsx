export default function Home() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-[82vh]"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/images/background.jpg"
        })`,
      }}
    ></div>
  );
}
