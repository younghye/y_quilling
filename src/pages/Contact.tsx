export default function Contact() {
  return (
    <>
      <div
        style={{
          height: "68vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ lineHeight: "2" }} className="text-lg">
          <p>
            If you have any inquiries about commissions, projects, or anything
            else, <br />
            feel free to email me at
            <br />
            <a className="text-xl font-bold underline decoration-indigo-500">
              mdrdg117@yahoo.co.jp
            </a>
          </p>
          <center className="mt-3">
            <a href="https://www.facebook.com/YQuilling">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 93 92"
                fill="none"
              >
                <rect
                  x="1.13867"
                  width="91.5618"
                  height="91.5618"
                  rx="15"
                  fill="#337FFF"
                />
                <path
                  d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z"
                  fill="white"
                />
              </svg>
            </a>
          </center>
        </div>
      </div>
    </>
  );
}
