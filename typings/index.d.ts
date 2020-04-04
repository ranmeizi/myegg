import 'egg';

declare module 'egg' {
  interface Application {
    jwt: any;
  }
}

declare module 'crypto-js' {
  export default any
}