const originalFetch = window.fetch;

let fetchPromise = null;
let cancelRequest = () => {};

class CancelableFetch {
  const race = new Promise((resolve, reject) => {
    cancelRequest = reject;
  });

  then(...args) {
    fetchPromise = fetchPromise.then(...args);
    return this;
  }

  catch(...args) {
    fetchPromise = fetchPromise.cancel(...args);
    return this;
  }

  cancel() {
    cancelRequest({ isCancelled: true });
  }
}

window.fetch = (...args) => new CancelableFetch(...args);

module.exports = CancelableFetch;
