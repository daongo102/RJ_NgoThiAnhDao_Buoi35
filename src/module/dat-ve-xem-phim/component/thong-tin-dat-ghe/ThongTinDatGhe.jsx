import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheCreator } from "../../../../redux/dat-ve-xem-phim/dat-ve-xem-phim.action";
class ThongTinDatGhe extends Component {
    render() {
    
        return (
            <div>
                <div className="mt-3">
                    <div>
                        <button className="gheDuocChon"></button>
                        <span
                            className="text-light"
                            style={{ fontSize: 15, marginLeft: 10 }}
                        >
                            Ghế đã đặt
                        </span>
                    </div>

                    <div className="mt-2">
                        <button className="gheDangChon"></button>
                        <span
                            className="text-light"
                            style={{ fontSize: 15, marginLeft: 10 }}
                        >
                            Ghế đang đặt
                        </span>
                    </div>

                    <div className="mt-2">
                        <button className="gheChuaChon"></button>
                        <span
                            className="text-light"
                            style={{ fontSize: 15, marginLeft: 10 }}
                        >
                            Ghế chưa đặt
                        </span>
                    </div>
                </div>
                <div className="mt-3">
                    <table className="table" border="2">
                        <thead>
                            <tr>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.danhSachGheDangDat.map(
                                (gheDangDat, index) => {
                                    return (
                                        <tr key={index}>
                                            <td style={{ color: "green" }}>
                                                {gheDangDat.soGhe}
                                            </td>
                                            <td style={{ color: "green" }}>
                                                {gheDangDat.gia.toLocaleString()}
                                            </td>
                                            <td>
                                                <button
                                                    style={{
                                                        width: 20,
                                                        height: 20,
                                                        fontSize: 10,
                                                        background: "red",
                                                        color: "white",
                                                        borderRadius: 5,
                                                        boxShadow:
                                                            "0.5px 0.5px 1px #171717",
                                                    }}
                                                    onClick={() => {
                                                        this.props.dispatch(
                                                            huyGheCreator(
                                                                gheDangDat.soGhe,
                                                            ),
                                                        );
                                                    }}
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>TỔNG TIỀN</td>
                                <td className="text-danger">
                                    {this.props.danhSachGheDangDat.reduce(
                                        (total, gheDangDat) => {
                                            return total + gheDangDat.gia;
                                        },
                                        0,                                      
                                    ).toLocaleString()}
                                </td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        danhSachGheDangDat: rootReducer.bookingTicketReducer.danhSachGheDangDat,
    };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
