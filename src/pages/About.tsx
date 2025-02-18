export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-serif w-full">
      <div className="flex justify-center items-center">
        {/* <div> */}
        <img src="./assets/images/me.jpg" alt="myPhoto" />
      </div>
      <div className="col-span-1 md:col-span-2 flex items-center text-lg text-left p-10">
        Hello, My name is Young. <br />
        <br />
        After working as dog groomer and software developer in Korea and Japan,
        I've been a mum of two children in New Zealand. <br />
        <br />
        One day I saw a quilling video online, what is quilling? It’s where you
        get strips of paper that are rolled, shaped and glued together to create
        decorative designs. It looked very simple at first, but finished pieces
        were amazing. During the lockdowns for COVID, I started learning
        quilling by YouTube, I found it's very relaxing and made me happy to
        find something I enjoyed and was good at. <br />
        <br />
        I’ve worked on different types of quilling, animals, landscapes,
        abstracts... Specially I like animals/pets as subjects, it takes a lot
        of time and patience to bring out the liveliness of the subject, but the
        result makes it all worthwhile. The best part is seeing people's joy
        when they receive my work.
      </div>
    </div>
  );
}
