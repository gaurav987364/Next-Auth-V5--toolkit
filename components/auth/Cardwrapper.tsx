"use client"

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import BackButton from "./BackButton";
import Header from "./Header";
import Social from "./Social";

interface cardWraperProps {
    children : React.ReactNode;
    headerLable:string;
    backButtonLable:string;
    backbtnHref:string;
    showSocial:boolean;
}
const Cardwrapper = ({
    children,
    headerLable,
    backButtonLable,
    backbtnHref,
    showSocial,
 
}: cardWraperProps) => {
  return (
    <Card className=" w-[400px] max-sm:w-[330px] max-sm:p-2 max-sm:h-[37.5rem] shadow-md">
        <CardHeader>
            <Header label={headerLable}/>
        </CardHeader>

        <CardContent>
         {children}
        </CardContent>

        {showSocial && (
            <CardFooter>
             <Social/>
            </CardFooter>
        )}
        <CardFooter>
            <BackButton
             href={backbtnHref}
             label={backButtonLable}
            />
        </CardFooter>
    </Card>
  )
}

export default Cardwrapper