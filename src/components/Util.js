import {intervalToDuration} from "date-fns";
export const Duration = () =>{
    return intervalToDuration({
        start: new Date(),
        end: new Date("01 Aug 2012")
      })
}
