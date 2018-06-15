import Link from 'next/link';

const Logo = ({ children }) => (
    <div>
        <style jsx>{`
            h1 {
                font-family: "Just Me Again Down Here", Georgia, serif;
                font-weight: normal;
                text-align: center;
                font-size: 6em;
                line-height: 1.3;
                margin-bottom: .25em;
                margin-top: 0;
            }
            a {
                text-decoration: none;
                border-bottom: 1px dotted #ccc;
                color: #333;
            }
        `}</style>
        <h1>
            <Link href="/">
                <a>{children}</a>
            </Link>
        </h1>
    </div>
);

export default Logo;
