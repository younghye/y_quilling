export default function NotFound() {
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 max-w-6xl mx-auto my-8">
        <div className="text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="w-full text-2xl font-semibold md:text-3xl mb-10">
            Sorry, we couldn't find this page.
          </p>

          <a
            href={"/home"}
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-2.5 focus:outline-none"
          >
            Back to home
          </a>
        </div>
      </div>
    </section>
  );
}
