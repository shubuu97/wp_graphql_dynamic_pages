import React from "react";
import { GET_MENUS } from "../gql/getMenus";
import client from "../apollo/client";

const Home = () => {
    return (
        <div
            style={{
                margin: "50px",
                justifyContent: "center",
                display: "flex",
                fontSize: "60px",
            }}
        >
            Welcome!
        </div>
    );
};

export default Home;

export async function getServerSideProps({}) {
    const { data } = await client.query({
        query: GET_MENUS,
    });

    return { props: { menus: data?.headerMenus?.edges ?? [] } };
}
