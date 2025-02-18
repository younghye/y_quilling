import { ImFacebook2 } from "react-icons/im";

export default function Contact() {
  return (
    <>
      <div className="flex justify-center items-center h-[63vh] font-serif">
        <div className="text-xl leading-loose">
          <div>
            If you have any inquiries about commissions, projects, or anything
            else, <br />
            feel free to email me at
          </div>
          <div className="text-xl font-bold underline mt-3">
            mdrdg117g@gmail.com
          </div>
          <center className="mt-4">
            <a href="https://www.facebook.com/YQuilling">
              <ImFacebook2 size={40} color="blue" />
            </a>
          </center>
        </div>
      </div>
    </>
  );
}
