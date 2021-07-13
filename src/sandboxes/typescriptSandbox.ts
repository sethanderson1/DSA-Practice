interface Cookie {
  [key: string]: string;
}

export const typescriptSandbox = (name: string) => {
  const cookie = <Cookie>{};

  cookie['user-token'] = "asdf";
  return cookie[name]
};

let name = "user-token";

const token = typescriptSandbox(name);
console.log('token', token)

// module.exports = {
//   typescriptSandbox,
// };
