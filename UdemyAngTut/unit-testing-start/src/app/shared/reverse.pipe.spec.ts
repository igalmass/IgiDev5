import {ReversePipe} from "./reverse.pipe";

describe("reverse: pipe", () => {
  it("'should create the pipe", () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform("haa")).toEqual("aah");
  })
})
