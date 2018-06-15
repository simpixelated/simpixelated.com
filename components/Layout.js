import Header from './Header.js';

const Layout = ({ children, title }) => (
    <div>
        <style jsx>{`
            div {
                width: 80%;
                margin-left: auto;
                margin-right: auto;
            }
        `}</style>
        <Header title={title} />
        {children}
    </div>
);

export default Layout;
