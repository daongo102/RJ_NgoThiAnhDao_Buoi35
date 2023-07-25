import { BOOKING_TICKET } from "./dat-ve-xem-phim.const";

export const datGheCreator = (payload) => {
    return {
        type: BOOKING_TICKET.DAT_GHE,
        payload,
    };
};
