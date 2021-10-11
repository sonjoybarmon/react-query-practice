import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/layout";
import RQSuperHeroes from "./components/RQSuperHeroes";
import SuperHeros from "./components/SuperHeros";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/rq-superHeros">
              <RQSuperHeroes />
            </Route>
            <Route path="/super-heros">
              <SuperHeros />
            </Route>
          </Switch>
        </Layout>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
}

export default App;
