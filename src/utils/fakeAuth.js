//!RETURN TOKEN FUNCTION
const fakeAuth = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("2342f2f1d131rf12"), 250);
  });
};

export default fakeAuth;
