import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>© 2026 Expense Tracker | Made by Unnayan Saxena</p>

            <h1>EXPENSE TRACKER 💸</h1>
            <p>This is a simple Expense Tracker web application built using React.js.
                It allows users to add and manage their daily expenses easily.
                The app provides insights through weekly, monthly, and quarterly views.
                It helps users track spending and improve their financial habits. </p>

               <p>Tech used - react.js ,javascript, html ,css </p>
               <h3> EXPENSE TRACKER IS A APP WHERE U CAN GET ALLL UR SPENDS BROUGHT TOGETHER TO GIVE TRACK OF WHATUH SPEND !!  </h3>
        </footer>
    );
};

const styles = {
    footer: {
        background: "#111",
        color: "#fff",
        textAlign: "center",
        padding: "140px",
    },
};

export default Footer;