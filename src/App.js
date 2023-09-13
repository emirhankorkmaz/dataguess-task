import "./App.css";
import Home from "./Pages/Home";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";
function App() {
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com/graphql"
})




  return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
  );
}

export default App;
