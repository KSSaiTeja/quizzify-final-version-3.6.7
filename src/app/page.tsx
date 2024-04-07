import SignInButton from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Image from 'next/image';

export default async function Home() {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center justify-center w-1/2">
        {/* Here you can adjust the src to your GIF location */}
        <Image src={"/login.gif"} alt="Fun Quiz GIF" width={500} height={300} />
      </div>
      <div className="w-1/2">
        <Card className="w-[500px] h-[250px] mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Welcome to Quizzify 🔥!</CardTitle>
            <CardDescription className="text-xl">
              Quizzify is a platform for creating quizzes using AI! Get started by logging in below!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-5">
            <SignInButton text="Sign In with Google" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
