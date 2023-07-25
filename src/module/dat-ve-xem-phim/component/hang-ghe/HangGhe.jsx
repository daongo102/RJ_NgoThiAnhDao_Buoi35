import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheCreator } from "../../../../redux/dat-ve-xem-phim/dat-ve-xem-phim.action";
class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = "";
            let disabled = false;
            if (ghe.daDat) {
                cssGheDaDat = "gheDuocChon";
                disabled = true;
            }

            let cssGheDangDat = "";
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
                (gheDangDat) => gheDangDat.soGhe === ghe.soGhe,
            );
            if (indexGheDangDat !== -1) {
                cssGheDangDat = "gheDangChon";
            }
            return (
                <button
                    onClick={() => {
                        this.props.handleDatGhe(ghe);
                    }}
                    disabled={disabled}
                    className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
                    key={index}
                >
                    {ghe.soGhe}
                </button>
            );
        });
    };

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return (
                <button className="rowNumber" key={index}>
                    {hang.soGhe}
                </button>
            );
        });
    };

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return (
                <div className="ml-1">
                    {this.props.hangGhe.hang} {this.renderSoHang()}
                </div>
            );
        } else {
            return (
                <div>
                    {this.props.hangGhe.hang} {this.renderGhe()}
                </div>
            );
        }
    };

    render() {
        console.log(this.props)
        return (
            <div
                className="text-light text-left"
                style={{ fontSize: 20, maxWidth: 800, width: 700 }}
            >
                {this.renderHangGhe()}
            </div>
        );
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        danhSachGheDangDat: rootReducer.bookingTicketReducer.danhSachGheDangDat,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleDatGhe: (ghe) => {
            dispatch(datGheCreator(ghe));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
