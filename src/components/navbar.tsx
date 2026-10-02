import { buttonNavbar } from "../data/data";

export function Navbar() {
  return (
    <>
      <section className="navbar fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-[#041329] px-6 py-4 bg-[repeating-linear-gradient(45deg,#000_0,#000_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-opacity-5">
        <div className=" flex items-center gap-5 ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-primary-900 hover:opacity-65 md:hidden lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-neutral-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#aboutSection">about</a>
              </li>
              <li>
                <a href="#skillsSection">skills</a>
              </li>
              <li>
                <a href="#portofolioSection">portofolio</a>
              </li>
              <li>
                <a>experience</a>
              </li>
              <li>
                <a>testimonials</a>
              </li>
              <li>
                <a>contact</a>
              </li>
            </ul>
          </div>

          <div className="h9 w-9 rounded-2xl overflow-hidden cursor-pointer">
            <img
              src="/logo-jn-satu.jpg"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="">
            <h1 className="font-headline text-xl text-neutral-100">
              Jovin Najwan
            </h1>
            <h2 className="font-label text-[#4FDBC8] font-semibold text-[11px]">
              FULL-STACK <br /> DEVELOPER
            </h2>
          </div>
        </div>
        <div className="hidden md:flex md:gap-2">
          {buttonNavbar.map((menu) => {
            return (
              <a key={menu?.label} href={menu?.url}>
                <button className="btn btn-info rounded-md font-label">
                  {menu?.label}
                </button>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4 pl-2 pr-2">
          <div className="bg-primary-900 hover:opacity-65 rounded-lg w-7 h-7 flex justify-center items-center cursor-pointer">
            <a href="https://github.com/muzuijovin/Jovin-Personal-Website.git">
              <img src="/navbar-logo-github.svg" alt="share" />
            </a>
          </div>

          <a href="#formContact">
            <button className="btn btn-info font-label ">Hire Me</button>
          </a>

          <div className="w-9 h-9 cursor-pointer rounded-xl overflow-hidden">
            <img
              src="/foto-jovin-najwan.jpg"
              alt="profile-photo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
