import { useContext } from "react";
import { Context } from "../Appcontext";
import React from "react";

var Inventory = () => {
    var { apidata, modalopenfn } = useContext(Context);

    return (
        <>
            <div className="inventory">
                <div className="container">
                    <h2>INVENTORY STOCK</h2>
                    <button onClick={modalopenfn}>ADD</button>
                    <button id="delete" onClick={modalopenfn}>DELETE</button>
                    <button id="update" onClick={modalopenfn}>UPDATE</button>
                    <table>
                        <thead>
                            <tr>
                                <td>SR.NO</td>
                                <td>ITEMS</td>
                                <td>STOCK</td>
                                <td>PRICE</td>
                                <td>MARGIN(in Rs)</td>
                            </tr>
                        </thead>
                        <tbody>
                            {apidata.map((value, index) => {
                                return <tr
                                    key={index + 1}
                                    style={(index + 1) % 2 === 0 ?
                                        { backgroundColor: "rgb(228, 176, 238)" } : {}}>
                                    <td>{index + 1}</td>
                                    <td>{value.items}</td>
                                    <td>{value.stock}</td>
                                    <td>{value.price}</td>
                                    <td>{value.margin}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Inventory;