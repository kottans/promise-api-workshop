import CustomPromise from "../index.js";

describe("CustomPromise.resolve", () => {
  test("when passed 3, resolves to 3", () => {
    return expect(CustomPromise.resolve(3)).resolves.toBe(3);
  });

  test("successfully unwraps pseudo-thenable", () => {
    const pseudoThenable = {
      then: (cb, errcb) => {
        cb("Success!");
        errcb("Error!");
      },
    };
    return CustomPromise.resolve(pseudoThenable).then((v) => v);
  });
});
