import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

export function GetPosts(){
  logPostsToConsole();

  return (
    <h1>RESULT SHOULD BE IN CONSOLE SOON</h1> 
  )
}

async function logPostsToConsole(){
  let fetchResult = await fetch('https://f2vqpb9qja.execute-api.eu-north-1.amazonaws.com/prod/api/posts');
  let jsonResult = await fetchResult.json();

  console.log(jsonResult);
}
