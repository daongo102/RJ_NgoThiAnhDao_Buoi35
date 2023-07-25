import React, { Component } from "react";
import "./style.css";
import ThongTinDatGhe from "./component/thong-tin-dat-ghe/ThongTinDatGhe";
import HangGhe from "./component/hang-ghe/HangGhe";
import danhSachGhe from "../dat-ve-xem-phim/danhSachGhe.json";

export default class DatVeXemPhim extends Component {
    renderHangGhe = () => {
        return danhSachGhe.map((hangGhe, index) => {
            return (
                <div key={index}>
                    <HangGhe hangGhe={hangGhe} soHangGhe={index} />
                </div>
            );
        });
    };

    render() {
        return (
            <div
                className="dat-ve-xem-phim"
                style={{
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url(./img/dat-ve-xem-phim/bgmovie.jpg)",
                    backgroundSize: "100%",
                }}
            >
                <div
                    style={{
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.6)",
                    }}
                >
                    <div className="text-warning text-center" style={{ fontSize: 30 }}>
                        ĐẶT VÉ XEM PHIM 
                    </div>

                    <div className="container-fluid">
                        {/* row không để trong container sẽ sinh croll ngang */}
                        <div className="row">
                            <div className="col-8 text-center">
                                <div
                                    className="mt-2 text-light"
                                    style={{ fontSize: "20px" }}
                                >
                                    MÀN HÌNH
                                </div>
                                <div
                                    className="mt-2"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <div className="screen"></div>
                                    {this.renderHangGhe()}
                                </div>
                            </div>
                            <div className="col-4 mt-2">
                                <div
                                    className="text-light"
                                    style={{ fontSize: 20 }}
                                >
                                    DANH SÁCH GHẾ BẠN CHỌN
                                </div>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
