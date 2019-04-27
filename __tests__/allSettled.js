import CustomPromise from "../index.js";
import { scheduleResolve, scheduleReject } from "../__utils__";

test("CustomPromise.allSettled handles arrays of primitives", () => {
  return CustomPromise.allSettled([1, "string", false]);
});

test("CustomPromise.allSettled throws for non-array inputs", () => {
  return expect(() => {
    CustomPromise.allSettled("string");
  }).toThrow();
});

test(`CustomPromise.allSettled resolves with an array of promises when given an array of resolved and rejected promises`, async () => {
  const mockInput = [
    scheduleResolve(110, 1),
    scheduleResolve(120, 2),
    scheduleReject(130, "reject1")
  ];
  const mockOutput = [
    { status: "fulfilled", value: 1 },
    { status: "fulfilled", value: 2 },
    { status: "rejected", reason: "reject1" }
  ];
  const resultValues = await CustomPromise.allSettled(mockInput);
  return expect(resultValues).toMatchObject(mockOutput);
});

test(`CustomPromise.allSettled saves values to output in order of their position in the input`, async () => {
  const mockInput = [
    scheduleReject(130, "reject1"),
    scheduleResolve(120, 2),
    scheduleResolve(110, 1)
  ];
  const mockOutput = [
    { status: "rejected", reason: "reject1" },
    { status: "fulfilled", value: 2 },
    { status: "fulfilled", value: 1 }
  ];
  const resultValues = await CustomPromise.allSettled(mockInput);
  return expect(resultValues).toMatchObject(mockOutput);
});
