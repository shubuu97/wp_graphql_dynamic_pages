import React from "react";
import { GET_MENUS } from "../gql/getMenus";
import { useQuery } from "@apollo/client";

const Home = () => {
    const data = useQuery(GET_MENUS);

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
