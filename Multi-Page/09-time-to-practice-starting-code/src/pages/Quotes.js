import { useEffect } from "react";
import { getAllQuotes } from "../lib/api";
import useHttp from "../hooks/use-http";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";



const Quotes = (props) => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    <section>
      <QuoteList quotes={loadedQuotes} />
    </section>
  );
};

export default Quotes;
