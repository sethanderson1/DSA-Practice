const promises = async () => {
  const user = await new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("no user");
    }, [1000]);
  });
  console.log("user", user);

  if (!user) {
    console.log("no user");
  } else {
    console.log("user");
  }
};

module.exports = {
  promises,
};
