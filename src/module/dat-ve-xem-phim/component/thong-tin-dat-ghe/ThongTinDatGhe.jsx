import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
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
                                <th>SỐ GHẾ</th>
                                <th>GIÁ</th>
                                <th>HỦY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Số ghế</td>
                                <td>Giá</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Số ghế</td>
                                <td>Giá</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
