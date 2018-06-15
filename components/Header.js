import Link from 'next/link';
import Head from 'next/head';
import Logo from './Logo';
import Tagline from './Tagline';

const Header = ({ title }) => (
    <header role="banner">
        <Head>
            <title>{title || 'Simpixelated.com'}</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Coustard|Lora:400,700,400italic,700italic|Just Me Again Down Here&amp;subset=latin" type="text/css" media="all" />
        </Head>
        <style jsx>{`
            hgroup {
                padding: 2.5em 0 1.875em 0;
            }

            nav ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: space-evenly;
                border-style: solid;
                border-width: 1px 0;
                border-color: #eee;
            }

            nav li {
                margin: 0 1.25em;
                padding: 1em 0;
                max-height: 1.5em;
                font-size: .9em;
            }

            nav a {
                color: #333;
                display: inline-block;
                text-decoration: none;
                font-family: "Coustard", Georgia, serif;
            }

            nav a:hover {
                border-bottom: 1px dotted #ccc;
            }
        `}
        </style>
        <style global jsx>{`
            body {
                font-family: "Lora", Georgia, serif;
            }
        `}</style>
        <hgroup>
            <Logo>Simpixelated</Logo>
            <Tagline>Thoughts on JavaScript, management, and life by Front End Engineer Jordan Kohl.</Tagline>
        </hgroup>
        <nav role="navigation">
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/resume"><a>Resume</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
