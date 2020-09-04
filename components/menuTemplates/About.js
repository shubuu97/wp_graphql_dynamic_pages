import React from "react";

const About = ({ data }) => {
    return (
        <div>
            {(data || []).map((post) => {
                const { id, title, body } = post || {};
                return (
                    <div key={id}>
                        <p>{title || ""}</p>
                        <p>{body || ""}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default About;
