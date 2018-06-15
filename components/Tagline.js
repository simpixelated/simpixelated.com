const Tagline = ({ children }) => (
    <div>
        <style jsx>{`
            h2 {
                font-family: "Coustard", Georgia, serif;
                font-size: .8em;
                font-weight: 400;
                text-align: center;
                margin: 1.4em 0 0.8em 0;
                line-height: 1.5;
            }
        `}</style>
        <h2>
            {children}
        </h2>
    </div>
);

export default Tagline;
