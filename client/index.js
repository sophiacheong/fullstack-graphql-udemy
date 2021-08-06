import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
})

const Root = () => {
  return (
    <div>
      Auth Starter
    </div>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
