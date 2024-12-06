# React Native example project using Connect

This is an example project that demonstrates how to use the Connect SDK in a
React Native project.

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Run `react-native run-ios` or `react-native run-android`

## Usage

The Connect SDK is a JavaScript library that allows you to interact with the
Connect API.

Use this steps to remove the duplicate header error:
https://github.com/maksimlya/react-native-fast-encoder/issues/4

Logs:

```
 (NOBRIDGE) LOG  {"$typeName": "connectrpc.eliza.v1.IntroduceResponse", "sentence": "Hi John Doe. I'm Eliza."}
 (NOBRIDGE) LOG  Eliza introduce stream connected
 (NOBRIDGE) LOG  Trying to cancel the stream
 (NOBRIDGE) LOG  {"$typeName": "connectrpc.eliza.v1.IntroduceResponse", "sentence": "Before we begin, John Doe, let me tell you something about myself."}
 (NOBRIDGE) LOG  Eliza introduce stream connected
 (NOBRIDGE) LOG  Trying to cancel the stream
 (NOBRIDGE) LOG  {"$typeName": "connectrpc.eliza.v1.IntroduceResponse", "sentence": "I was one of the first programs capable of attempting the Turing test."}
 (NOBRIDGE) LOG  Eliza introduce stream connected
 (NOBRIDGE) LOG  Trying to cancel the stream
 (NOBRIDGE) LOG  {"$typeName": "connectrpc.eliza.v1.IntroduceResponse", "sentence": "How are you feeling today?"}
 (NOBRIDGE) LOG  Eliza introduce stream connected
 (NOBRIDGE) LOG  Trying to cancel the stream
 (NOBRIDGE) LOG  [FastEncoder] (assureJSILoaded) JSI install: Installed
 (NOBRIDGE) ERROR  undefined
```
