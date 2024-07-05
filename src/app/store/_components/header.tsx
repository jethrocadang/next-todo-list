import { ThemeToggle } from "@/components/theme-toggle";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <Card className="flex w-full flex-col justify-between gap-2.5 p-5 tracking-wide md:flex-row md:gap-0">
      <div className="flex justify-between">
        <div>
          <div className="text-xl font-medium md:text-2xl">
            <span className="font-bold">Hello</span>, Jethro
          </div>
          <p className="text-sm text-muted-foreground">Welcome Back!</p>
        </div>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex w-full flex-row items-center rounded-full border px-3 focus-within:ring-1 focus-within:ring-ring">
          <FiSearch size={24} />
          <Input
            className="border-0 shadow-none focus-visible:ring-0"
            placeholder="Search..."
          />
        </div>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
    </Card>
  );
};

export default Header;
