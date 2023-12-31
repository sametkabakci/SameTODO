import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils"
import { Roboto } from "next/font/google";

const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
});

const textFont = Roboto({
    subsets: ["latin"],
    weight: [
        "100",
        "300",
        "500",
        "700",
        "900"
    ],
})

const MarketingPage = () => {
    return ( 
        <div className="flex items-center justify-center flex-col">
            <div className={cn("flex items-center justify-center flex-col", headingFont.className)}>
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2"/>
                    #1 Task Management
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    Elevate your team's productivity with
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-blue-800 to-blue-400 text-white px-4 p-2 rounded-md pb-4 w-fit">
                    sameTODO
                </div>
            </div>
            <div className={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto", textFont.className)}>
            The ultimate solution for seamless collaboration and efficient project management, whether in high-rises or remote work settings. Empower your team to thrive and scale new heights of success effortlessly.
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-up">
                    Get Started
                </Link>
            </Button>
        </div>
     );
}
 
export default MarketingPage;