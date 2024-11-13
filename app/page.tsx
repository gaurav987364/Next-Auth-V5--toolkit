import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
   <>
    <main className=" flex h-full justify-center items-center flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="  space-y-6 text-center">
        <h1 className=" text-6xl font-semibold text-white drop-shadow-md">
          🔏 Auth.
        </h1>
        <p className=" text-white text-lg">
          A complete next authentication flow...
        </p>
        <div>
          <LoginButton>
           <Button variant="secondary" size="lg">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
   </>
  );
}
