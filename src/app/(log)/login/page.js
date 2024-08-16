import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm/LoginForm";
import { MenuBar } from "@/components/Navbar/MenuBar";

const Login = () => {
  return (
    <div className="relative">
    <div className="sticky top-0">
    <MenuBar/>
    </div>
      <LoginForm />
    </div>
  );
};

export default Login;
