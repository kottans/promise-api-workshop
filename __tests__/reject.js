import CustomPromise from "../index.js";

describe("CustomPromise.reject", () => {
  test('when passed "error reason", rejects to "error reason"', () => {
    return expect(CustomPromise.reject("error reason")).rejects.toMatch(
      "error reason"
    );
  });
});
