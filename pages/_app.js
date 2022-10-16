import Layout from "../components/shared/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="bg-white">
      <Component {...pageProps} />{" "}
    </Layout>
  );
}

export default MyApp;

