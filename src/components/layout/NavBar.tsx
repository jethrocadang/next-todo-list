import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-green-300 w-full container">
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
      </div>
    </nav>
  );
};

export default NavBar;
