import "@testing-library/jest-dom";
import { formatDate } from "../lib/helper";

describe("function format date", () => {
  it("checking a number in a string", () => {
    const result = formatDate(6);
    expect(result).toBe("00:06");
  });
  it("checking for zero in a row", () => {
    const result = formatDate(0);
    expect(result).toBe("00:00");
  });
});
