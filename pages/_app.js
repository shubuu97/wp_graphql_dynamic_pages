import { ApolloProvider } from "@apollo/client";
import Layout from "../components/Layout";
import client from "../apollo/client";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <ApolloProvider client={client}>
                <Layout menus={pageProps.menus}>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </>
    );
};

export default MyApp;
