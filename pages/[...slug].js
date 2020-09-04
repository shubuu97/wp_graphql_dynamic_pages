import React from "react";
import { useRouter } from "next/router";
import { GET_MENUS } from "../gql/getMenus";
import client from "../apollo/client";
import * as MenuItems from "../components/menuTemplates";

const Menu = ({ data }) => {
    const router = useRouter();
    const slug = router.query.slug;
    const slugInString = slug.join("/");

    const MenuItemsMap = {
        about: MenuItems["About"],
        treding: MenuItems["Trending"],
        featured: MenuItems["Featured"],
        "contact-us": MenuItems["ContactUs"],
        "my-account": MenuItems["MyAccount"],
        "category/uncategorized": MenuItems["Cars"],
    };

    let Template = MenuItemsMap[slugInString];

    return (
        <div style={{ margin: "50px" }}>
            <Template data={data} />
        </div>
    );
};

export default Menu;

export async function getServerSideProps({ params }) {
    const { slug } = params;
    const route = slug.join("/");

    const { data } = await client.query({
        query: GET_MENUS,
    });

    let templateData = {};

    let url = "";
    switch (route) {
        case "about":
            url = "https://jsonplaceholder.typicode.com/posts";
            break;
        case "contact-us":
            url = "https://jsonplaceholder.typicode.com/comments";
            break;
        case "treding":
            url = "https://jsonplaceholder.typicode.com/albums";
            break;
        default:
            break;
    }
    console.log(url, "url");
    if (url) {
        const response = await fetch(url);
        templateData = await response.json();
    }
    console.log(templateData, "templateData");

    return {
        props: {
            menus: data?.headerMenus?.edges ?? [],
            data: templateData,
        },
    };
}
