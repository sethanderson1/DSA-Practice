const promises = async () => {
  function prom(delay, resolve = true) {
    return new Promise((res, rej) => {
      setTimeout(resolve ? res("resolved") : rej("rejected"), delay * 1000);
    });
  }

  prom(1)
    .then((res) => {
      console.log("res", res);
    })
    .catch((err) => {
      console.log("err", err);
    });

  // Promise.all([prom(1), prom(2), prom(3)])
  //   .then((res) => {
  //     console.log("res", res);
  //   })
  //   .catch((err) => {
  //     console.log("err", err);
  //   });

  // Promise.allSettled([prom(1), prom(2), prom(3, false)]);

  // Promise.any([prom(1), prom(2, true), prom(0.5, false)]);

  // Promise.any([prom(1, false), prom(2, false), prom(3, false)]);

  // Promise.race([prom(1), prom(0.5, false), prom(0.1)]);

  // const user = await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject("no user");
  //   }, [1000]);
  // });
};

promises();

module.exports = {
  promises,
};
