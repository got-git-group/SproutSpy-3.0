import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/link-context";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const ApolloWrapper = ({ children }) => {
  const { isAuthenticated, getAccessTokenSilently, getAccessTokenWithPopup } =
    useAuth0();
  const [bearerToken, setBearerToken] = useState("");
  useEffect(() => {
    let token = "";
    const getToken = async () => {
      if (isAuthenticated) {
        try {
          token = await getAccessTokenSilently({
            audience: process.env.REACT_APP_AUTH0_AUDIENCE,
            scope: "read:all",
          });
        } catch (error) {
          token = await getAccessTokenWithPopup({
            audience: process.env.REACT_APP_AUTH0_AUDIENCE,
            scope: "read:all",
          });
        }
      }
      setBearerToken(token);
    };
    getToken();
  }, [getAccessTokenSilently, getAccessTokenWithPopup, isAuthenticated]);

  const httpLink = new HttpLink({
    uri: "/graphql",
  });

  const authLink = setContext((_, { headers, ...rest }) => {
    if (!bearerToken) return { headers, ...rest };
    console.log(bearerToken);
    return {
      ...rest,
      headers: {
        ...headers,
        authorization: `Bearer ${bearerToken}`,
      },
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
