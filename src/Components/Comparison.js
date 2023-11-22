import React, { useState } from 'react';

export default function Comparison(car1, car2) {
    const [make1, model1, year1, price1, economy1, KBB1, seats1, hp1, dt1] = car1;
    const [make2, model2, year2, price2, economy2, KBB2, seats2, hp2, dt2] = car2;
    return (
        <body>
            <header>
                <h2>Comparisons</h2><br/>
                <a href="index.html">Home</a> | <a href="favorites.html">Favorites</a>
            </header>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/52722/2024-Honda-Accord-front_52722_032_1810x721_GC_cropped.png" alt="dark grey midsize sedan"/></td>
                            <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/51622/2024-Honda-Civic-front_51622_032_1811x735_BK_cropped.png" alt="black compact sedan"/></td>
                        </tr>
                        <tr>
                            <th>Make, Model, & Year</th>
                            <td>{year1} {make1} {model1}</td>
                            <td>{year2} {make2} {model2}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Starting Price</th>
                            <td>${price1}</td>
                            <td>${price2}</td>
                        </tr>
                        <tr>
                            <th>Fuel Economy</th>
                            <td>{economy1}</td>
                            <td>{economy2}</td>
                        </tr>
                        <tr>
                            <th>KBB Expert Rating</th>
                            <td>{KBB1}</td>
                            <td>{KBB2}</td>
                        </tr>
                        <tr>
                            <th>Seating Capacity</th>
                            <td>{seats1}</td>
                            <td>{seats2}</td>
                        </tr>
                        <tr>
                            <th>Horsepower</th>
                            <td>{hp1}</td>
                            <td>{hp2}</td>
                        </tr>
                        <tr>
                            <th>Drivetrain</th>
                            <td>{dt1}</td>
                            <td>{dt2}</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </body>
    );
}
