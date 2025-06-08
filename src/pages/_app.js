import Layoute from "@/components/layout/Layoute";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layoute>
      <Component {...pageProps} />
    </Layoute>
  );
}
