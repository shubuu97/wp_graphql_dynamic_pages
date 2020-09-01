import { ApolloProvider } from "@apollo/client";
import App from "next/app";
import Layout from "../components/Layout";
import { GET_MENUS } from "../gql/getMenus";
import client from "../apollo/client";
import "../styles/globals.css";

class MyApp extends App {
   static async getInitialProps({ req, Component, ctx }) {
      let pageProps = {};
      if (Component.getInitialProps) {
         pageProps = await Component.getInitialProps(ctx);
      }

      const { data, loading, networkStatus } = await client.query({
         query: GET_MENUS,
      });

      return { pageProps, menus: data?.headerMenus?.edges ?? [] };
   }

   render() {
      const { Component, pageProps, menus } = this.props;
      return (
         <>
            <ApolloProvider client={client}>
               <Layout menus={menus}>
                  <Component {...pageProps} menus={menus} />
               </Layout>
            </ApolloProvider>
         </>
      );
   }
}

export default MyApp;
