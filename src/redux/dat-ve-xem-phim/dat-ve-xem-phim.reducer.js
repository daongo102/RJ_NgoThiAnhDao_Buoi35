import { BOOKING_TICKET } from "./dat-ve-xem-phim.const";

const STATE_DEFAULT = {
    danhSachGheDangDat: [],
};

export const bookingTicketReducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) {
        case BOOKING_TICKET.DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(
                (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe,
            );
            if (index === -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
            } else {
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;

            return { ...state };
        }
        default:
            return state;
    }
};
