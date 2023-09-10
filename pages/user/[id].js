import React from "react";
import Head from "next/head";

import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";

const User = () => {
    return (
        <div>
            <Head>
                <title>Clipper</title>
                <meta name="description" content="Clipper - Short video platform" />
                <link
                    rel="icon"
                    href="https://th.bing.com/th/id/R.67bc88bb600a54112e8a669a30121273?rik=vsc22vMfmcSGfg&pid=ImgRaw&r=0"
                />
            </Head>
            <Header isShow={true} />
            <UserProfile />
        </div>
    );
};

export default User;
