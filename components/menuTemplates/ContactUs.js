import React from "react";

const ContactUs = ({ data }) => {
    return (
        <div>
            {" "}
            {(data || []).map((comment) => {
                const { id, name, email, body } = comment || {};
                return (
                    <div key={id}>
                        <p>{name || ""}</p>
                        <p>{email || ""}</p>
                        <p>{body || ""}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ContactUs;
