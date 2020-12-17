import Head from "next/head";
import Link from "next/link";

import api from "../service/api";

const Hello = ({ user }) => {
  console.log(user);

  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <h1>This is the HELLO page</h1>
      <Link href="/">Home</Link>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

Hello.getInitialProps = async () => {
  // Will throw an error
  const response = await api.get("/userqwdqws/lucasmallmann");

  return {
    user: response.data,
  };
};

export default Hello;
