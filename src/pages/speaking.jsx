import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
} from '@/components/SocialIcons'
import sadImage from '@/images/sad.jpg'
import sadImage1 from '@/images/sad1.jpg'
import sadImage2 from '@/images/sad2.jpg'
import sadImage3 from '@/images/sad3.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export default function About() {
    return (
        <>
            <Head>
                <title>About - Levi</title>
                <meta
                    name="description"
                    content="I’m Levi. I live in VietNam, where I design the future."
                />
            </Head>
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={sadImage}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">

                        </h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                            <p>"The light breeze came and I thought it was spring</p>
                            <p>The sun rose and I thought winter had passed</p>
                                <p>Who would have thought that winter is still here</p>
                                <p>Spring has not yet arrived..."</p>

                        </div>
                    </div>
                  </div>

            </Container>
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={sadImage1}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-contain dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">

                        </h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                            <p>There was a boy named Shoya who had bullied a deaf girl named Shoko in elementary school. Years later, haunted by his past, Shoya tries to make amends and befriends Shoko, hoping to show her that he has changed.

                                As they spend time together, Shoya begins to develop feelings for Shoko. He knows that she cannot hear his voice, but he still wants to tell her how he feels, hoping that his actions will speak louder than words.

                                One spring day, Shoko and Shoya are waiting for the bus to take them to school. As they stand in silence, Shoya's heart beats faster and faster, knowing that this might be his chance to confess his love.

                                As the bus pulls up, Shoya turns to Shoko and signs, "I love you."</p>

                        </div>
                    </div>
                </div>

            </Container>
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={sadImage2}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">

                        </h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                            <p>But before Shoko can respond, the bus driver honks the horn, signaling that it's time to board.

                                As they ride the bus to school, Shoya watches Shoko, hoping to see some sign that she feels the same way. But Shoko remains quiet, lost in her own thoughts.

                                Days turned into weeks, and Shoya never had the chance to tell Shoko how he felt again. Eventually, Shoko had to move away, leaving Shoya to wonder what could have been.</p>

                        </div>
                    </div>
                </div>

            </Container>
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={sadImage3}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">

                        </h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                            <p>Years later, Shoya still thinks about that spring day, the missed opportunity to tell Shoko how he felt. He learned a painful lesson about the cost of his past mistakes and the importance of speaking his heart before it's too late.</p>

                        </div>
                    </div>
                </div>

            </Container>

        </>
    )
}
