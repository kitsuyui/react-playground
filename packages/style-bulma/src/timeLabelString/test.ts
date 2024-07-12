import { timeLabelString } from ".";

describe("timeLabelString", () => {
  it("should format time", () => {
    expect(timeLabelString(0)).toBe("00:00:00.000");
    expect(timeLabelString(1)).toBe("00:00:01.000");
    expect(timeLabelString(60)).toBe("00:01:00.000");
    expect(timeLabelString(61)).toBe("00:01:01.000");
    expect(timeLabelString(3600)).toBe("01:00:00.000");
    expect(timeLabelString(3601)).toBe("01:00:01.000");
    expect(timeLabelString(3661)).toBe("01:01:01.000");
    expect(timeLabelString(3661.123)).toBe("01:01:01.123");
  });
});
