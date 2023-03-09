import { Route, Redirect, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <div>
      <Layout>
        {/* Switch component renders just the first match he finds as its path */}
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
