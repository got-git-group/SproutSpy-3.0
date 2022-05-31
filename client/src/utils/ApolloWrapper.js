import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/link-context";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const ApolloWrapper = ({ children }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [bearerToken, setBearerToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const token = isAuthenticated ? await getAccessTokenSilently(
        {
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        }
      ) : "";
      setBearerToken(token);
      console.log(token);
    };
    getToken();
  }, [getAccessTokenSilently, isAuthenticated]);

  const httpLink = createHttpLink({
    uri: "/graphql"
  });

  const authLink = setContext((_, { headers, ...rest }) => {
    if (!bearerToken) return { headers, ...rest};
    console.log(bearerToken);
    return {
      ...rest,
      headers: {
        ...headers,
        authorization: `Bearer ${bearerToken}`
      }
    }
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
