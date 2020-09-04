import React from "react";

const Trending = ({ data }) => {
    return (
        <div>
            {" "}
            {(data || []).map((album) => {
                const { id, title } = album || {};
                return (
                    <div key={id}>
                        <p>{title || ""}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Trending;
