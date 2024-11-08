export default function Home() {
  return (
    <div
      className="max-w-6xl mx-auto mt-3"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/images/background.jpg"
        })`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "76vw",
        height: "80vh",
      }}
    ></div>
  );
}
