import { ThemeToggle } from "@/components/theme-toggle";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <Card className="flex w-full flex-row justify-between p-5 tracking-wide">
      <div>
        <div className="text-2xl font-medium">
          <span className="font-bold">Hello</span>, Jethro
        </div>
        <div>Welcome Back!</div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-row items-center border rounded-full px-3">
          <FiSearch size={24}/>
          <Input className="border-0 shadow-none focus-visible:ring-0" placeholder="Search..."/>
        </div>
        <ThemeToggle/>
      </div>
    </Card>
  );
};

export default Header;
