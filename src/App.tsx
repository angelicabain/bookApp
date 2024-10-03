import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    //tanstack query in order to maintain async states 
    //ie. automatic caching and refetching 
    <QueryClientProvider client={queryClient}> 
      <HomeScreen />
    </QueryClientProvider> 
  );
};

export default App;

