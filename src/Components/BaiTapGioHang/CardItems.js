import React, { Component } from "react";

export default class CardItems extends Component {
  AddNumber = () => {
    // this.props.card.soLuong++;
    this.props.XuLyCong(this.props.card, true);
    // console.log("tang so sp len", this.props.card.soLuong);
  };
  DownNumber = () => {
    this.props.XuLyCong(this.props.card, false);
  };
  DeleteProduct = () => {
    this.props.DeleteSP(this.props.card);
  };

  render() {
    return (
      <tr className="card-item">
        <td>{this.props.card.maSP}</td>
        <td>{this.props.card.tenSP}</td>
        <td>
          <img src={this.props.card.hinhAnh} width={50} alt="vcvc" />
        </td>
        <td>
          <button onClick={this.DownNumber}>-</button>
          {this.props.card.soLuong}
          <button onClick={this.AddNumber}>+</button>
        </td>
        <td>{this.props.card.giaBan.toLocaleString()}</td>
        <td>
          {(this.props.card.soLuong * this.props.card.giaBan).toLocaleString()}
        </td>
        <td>
          <button className="btn btn-danger" onClick={this.DeleteProduct}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
