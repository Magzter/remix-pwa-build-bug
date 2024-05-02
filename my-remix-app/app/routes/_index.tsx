import type {MetaFunction} from "@remix-run/node";
import {Card, CardHeader, CardBody, CardFooter, Image, Button, Avatar, Link, Skeleton} from "@nextui-org/react";
import {json} from "@remix-run/node"; // or cloudflare/deno
import {useLoaderData} from "@remix-run/react";

// Uncomment one of these to produce the error
// import { json } from "@remix-run/node"; // or cloudflare/deno
// import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        {title: "Supercoach Live"},
        {name: "description", content: "Live scores, Supercoach stats and news"},,
    ];
};

export default function Index() {

    return (
        <div className="container mx-auto content-center mt-5">
            <div className="flex w-full flex-col">

                <div class="text-center">
                    <h1 className="mb-4 text-2xl md:text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">2024
                        Toyota AFL Premiership</h1>

                    <h3 className="mb-4 text md:text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
                        Round {meta.round}
                    </h3>

                </div>


                <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
                    <Card className="md:col-span-4 col-span-6 h-[200px] md:h-[300px]" isPressable={true}
                          onPress={() => window.open("https://www.bigfooty.com/forum/threads/2024-round-8-trades.1380192", "_blank")}>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">BigFooty</p>
                            <h4 className="text-white text-start font-bold font-outline-1 text-2xl">Trades</h4>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="z-0 w-full w-[550px] object-cover h-[200px] md:h-[300px]"
                            src="/afl_match.jpg"
                        />
                    </Card>
                    <Card className="md:col-span-4 col-span-6 h-[200px] md:h-[300px]" isPressable={true}
                          onPress={() => window.open("https://www.bigfooty.com/forum/threads/round-8-vc-c.1380402/", "_blank")}>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">BigFooty</p>
                            <h4 className="text-white text-start font-bold font-outline-1 text-2xl">Captain Choices</h4>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="z-0 w-full w-[550px] object-cover h-[200px] md:h-[300px]"
                            src="/mcintosh.jpg"
                        />
                    </Card>
                    <Card className="md:col-span-4 col-span-6 h-[200px] md:h-[300px]" isPressable={true}
                          onPress={() => window.open("https://www.afl.com.au/matches/team-lineups", "_blank")}>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">AFL</p>
                            <h4 className="text-white text-start font-bold font-outline-1 text-2xl">Team Lineups</h4>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="z-0 w-full w-[550px] object-cover h-[200px] md:h-[300px]"
                            src="/port.jpg"
                        />
                    </Card>
                    <Card className="col-span-12 md:col-span-8 h-[200px] md:h-[300px] order-5 md:order-last"
                          isPressable={true}
                          onPress={() => window.open("https://www.youtube.com/watch?v=bjuxQXKoghI", "_blank")}>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">Supercoach with DR</p>
                            <h4 className="text-white text-start font-bold font-outline-1 text-2xl">Stock Market</h4>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="z-0 w-full w-[1550px] object-cover h-[200px] md:h-[300px]"
                            src="/marvel.jpg"
                        />
                    </Card>
                    <Card className="md:col-span-4 col-span-6 h-[200px] md:h-[300px]" isPressable={true}
                          onPress={() => window.open("https://www.bigfooty.com/forum/threads/2024-injuries-suspensions-and-concussion-protocols.1375210/", "_blank")}>
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">BigFooty</p>
                            <h4 className="text-white text-start font-bold font-outline-1 text-large md:text-2xl">Injuries,
                                Suspensions, and
                                Concussion</h4>
                        </CardHeader>
                        <Image
                            alt="Card background"
                            className="z-0 w-full w-[550px] object-cover h-[200px] md:h-[300px]"
                            src="/final.jpg"
                        />
                    </Card>
                </div>
            </div>
        </div>
    )
        ;
}
