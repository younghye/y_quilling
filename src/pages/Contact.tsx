import { ImFacebook2 } from "react-icons/im";

export default function Contact() {
  return (
    <>
      <div className="flex justify-center items-center h-[63vh]">
        <div className="text-lg leading-loose">
          <p>
            If you have any inquiries about commissions, projects, or anything
            else, <br />
            feel free to email me at
            <br />
            <span className="text-xl font-bold underline">
              mdrdg117@yahoo.co.jp
            </span>
          </p>
          <center className="mt-3">
            <a href="https://www.facebook.com/YQuilling">
              <ImFacebook2 size={40} color="blue" />
            </a>
          </center>
        </div>
      </div>
    </>
  );
}
