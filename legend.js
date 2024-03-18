import React from "react";
import "./legend.css";
import data from "./jsons/sheets13.json";

var datalist1 = data["1"];
var datalist2 = data["2"];
var datalist3 = data["3"];
var datalist4 = data["4"];


class tableLeg extends React.Component {
  render() {
    return ( 
        <div>
            <table class="legend"  border={2} height={500} >
                <tbody >
                    <tr>
                        <td ><img src={require('./imOrPov11.png')} width={20} height={130}/></td>
                        <td height={125} width={300}>
                            <ul>
                                <li> id листа: {datalist1["id_slab"]}</li>
                                <li> номер заказа: {datalist1["order"]}</li>
                                <li> номер плавки: {datalist1["melting"]}</li>
                                <li> марка стали: {datalist1["steel_grade"]}</li>
                                <li> размер листа: {datalist1["size"][0]} {datalist1["size"][1]} {datalist1["size"][2]}</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td><img src={require('./imOrPov22.png')} width={20} height={130}/></td>
                        <td>
                            <ul>
                                <li> id листа: {datalist2["id_slab"]}</li>
                                <li> номер заказа: {datalist2["order"]}</li>
                                <li> номер плавки: {datalist2["melting"]}</li>
                                <li> марка стали: {datalist2["steel_grade"]}</li>
                                <li> размер листа: {datalist2["size"][0]} {datalist1["size"][1]} {datalist1["size"][2]}</li>
                            </ul>
                        </td>
                    </tr>  

                    <tr>
                        <td><img src={require('./imOrPov33.png')} width={20} height={130}/></td>
                        <td>
                            <ul>
                                <li> id листа: {datalist3["id_slab"]}</li>
                                <li> номер заказа: {datalist3["order"]}</li>
                                <li> номер плавки: {datalist3["melting"]}</li>
                                <li> марка стали: {datalist3["steel_grade"]}</li>
                                <li> размер листа: {datalist3["size"][0]} {datalist1["size"][1]} {datalist1["size"][2]}</li>
                            </ul>
                        </td>
                    </tr>  

                    <tr>
                        <td><img src={require('./imOrPov44.png')} width={20} height={130}/></td>
                        <td>
                            <ul>
                                <li> id листа: {datalist4["id_slab"]}</li>
                                <li> номер заказа: {datalist4["order"]}</li>
                                <li> номер плавки: {datalist4["melting"]}</li>
                                <li> марка стали: {datalist4["steel_grade"]}</li>
                                <li> размер листа: {datalist4["size"][0]} {datalist1["size"][1]} {datalist1["size"][2]}</li>
                            </ul>
                        </td>
                    </tr>  

                                    
                </tbody>
            </table>
        </div>
    );
    }
}

export default tableLeg;