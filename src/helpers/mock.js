async function mockDelay(delayMillis) {
  return new Promise((resolve) => setTimeout(resolve, delayMillis));
}

async function mockAsyncWithData(dataToReturn, delayMillis) {
  return new Promise(
    (resolve) => setTimeout(() => resolve(dataToReturn), delayMillis),
  );
}

export {
  mockDelay,
  mockAsyncWithData,
};
