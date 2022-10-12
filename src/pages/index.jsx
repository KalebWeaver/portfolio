import { CogIcon, WalletIcon } from '@heroicons/react/24/outline'

import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'

import Sample from '../images/Sample.jpg'
import Portfolio from '@/images/projects/portfolio.png'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

import logoHTML from '@/images/svg/html.svg'
import logoCSS from '@/images/svg/css.svg'
import logoJavascript from '@/images/svg/javascript.svg'
import logoReact from '@/images/svg/react.svg'
import logoNextjs from '@/images/svg/next.svg'
import logoRedux from '@/images/svg/redux.svg'
import logoTailwind from '@/images/svg/tailwind.svg'
import logoBootstrap from '@/images/svg/bootstrap.svg'
import logoMongo from '@/images/svg/mongo.svg'
import logoNode from '@/images/svg/node.svg'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

function Projects() {
  let projects = [
    {
      title: 'Portfolio Website',
      description:
        'The start of it all, this is my portfolio. Its the very website you are viewing at the moment. It is built using NextJs, Tailwind CSS and hosted on Vercel.',
      img: Portfolio,
      logos: [logoNextjs, logoTailwind],
      url: 'https://www.google.com/',
      git: 'https://www.google.com/',
    },
    {
      title: 'Bug Tracker App',
      description: 'My personal portfolio website',
      img: Sample,
      logos: [logoReact, logoRedux, logoTailwind, logoNode, logoMongo],
      url: 'https://www.google.com/',
      git: 'https://www.google.com/',
    },
    {
      title: 'Portfolio',
      description: 'My personal portfolio website',
      img: Sample,
      logos: [logoNextjs, logoTailwind],
      url: 'https://www.google.com/',
      git: 'https://www.google.com/',
    },
    {
      title: 'Portfolio',
      description: 'My personal portfolio website',
      img: Sample,
      logos: [logoNextjs, logoTailwind],
      url: 'https://www.google.com/',
      git: 'https://www.google.com/',
    },
  ]

  return (
    <div className="w-full rounded-2xl border border-zinc-100 p-4 shadow dark:border-zinc-700/40 dark:shadow-cyan-700 sm:w-5/6">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <WalletIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Projects</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {projects.map((project, Index) => (
          <li
            key={Index}
            className=" flex flex-col gap-6 rounded-lg border p-4 shadow dark:border-zinc-700/40 dark:shadow-cyan-700 sm:flex-row"
          >
            <div className="mt-4 flex w-full items-center justify-center shadow-md shadow-zinc-800/5 sm:w-1/2">
              <Image
                src={project.img}
                alt="Project Image"
                width={400}
                height={300}
              />
            </div>
            <dl className="mt-4 flex w-full flex-auto flex-wrap gap-4 sm:w-1/3">
              <dt className="sr-only">Title</dt>
              <dd className="w-full flex-none text-lg font-medium text-zinc-900 underline dark:text-zinc-100">
                {project.title}
              </dd>
              <dt className="sr-only">Description</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {project.description}
              </dd>
              <div className="flex flex-row items-center gap-3">
                {project.logos.map((logo, i) => (
                  <Image
                    key={i}
                    src={logo}
                    alt="Project Image"
                    width={40}
                    height={40}
                  />
                ))}
              </div>
              <div className="text-md w-full flex-none font-medium text-cyan-400">
                <a href={project.url} className=" hover:text-cyan-600">
                  Live Demo
                </a>{' '}
                |{' '}
                <a href={project.git} className="hover:text-cyan-600">
                  Git Repo
                </a>
              </div>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-cyan-300" />
    </Link>
  )
}

function Skills() {
  let skills = [
    {
      name: 'HTML',
      logo: logoHTML,
      percent: '30%',
    },
    {
      name: 'CSS',
      logo: logoCSS,
      percent: '30%',
    },
    {
      name: 'Tailwind CSS',
      logo: logoTailwind,
      percent: '60%',
    },
    {
      name: 'Bootstrap',
      logo: logoBootstrap,
      percent: '30%',
    },
    {
      name: 'Javascript',
      logo: logoJavascript,
      percent: '70%',
    },
    {
      name: 'ReactJs',
      logo: logoReact,
      percent: '70%',
    },
    {
      name: 'Redux-toolkit',
      logo: logoRedux,
      percent: '50%',
    },
    {
      name: 'NextJs',
      logo: logoNextjs,
      percent: '80%',
    },
    {
      name: 'NodeJs',
      logo: logoNode,
      percent: '70%',
    },
    {
      name: 'MongoDB',
      logo: logoMongo,
      percent: '80%',
    },
  ]

  return (
    <div className="h-fit w-full rounded-2xl border border-zinc-100 p-4 shadow dark:border-zinc-700/40 dark:shadow-cyan-700 sm:w-1/3">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <CogIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Skills</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {skills.map((skill, skillIndex) => (
          <li key={skillIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={skill.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Name</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {skill.name}
              </dd>
              <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-2.5 rounded-full bg-cyan-400"
                  style={{ width: skill.percent }}
                />
              </div>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaleb Weaver - Aspiring software developer</title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software developer, designer and entrepreneur.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            My name is Kaleb, I&aposm an aspiring full stack software developer
            based in Houston, Texas. I have worked with a variety of
            technologies and frameworks, with a strong focus currently on NextJs
            and React. I&aposm passionate about learning new and challenging
            technologies that will help me grow as a developer.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <Projects />
          <Skills />
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
