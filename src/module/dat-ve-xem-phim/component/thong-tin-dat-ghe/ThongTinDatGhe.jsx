import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheCreator } from "../../../../redux/dat-ve-xem-phim/dat-ve-xem-phim.action";
class ThongTinDatGhe extends Component {
    render() {
        console.log(this.props);
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
                                <th>SỐ GHẾ</th>
                                <th>GIÁ</th>
                                <th>HỦY</th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {this.props.danhSachGheDangDat.map(
                                (gheDangDat, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{gheDangDat.soGhe}</td>
                                            <td>{gheDangDat.gia}</td>
                                            <td>
                                                <button onClick={()=>{
                                                    this.props.dispatch(huyGheCreator(gheDangDat.soGhe))
                                                }}>Hủy</button>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
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
