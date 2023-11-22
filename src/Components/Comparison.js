import React from 'react';

export default function Comparison(car1, car2) {
    const [make1, model1, year1, price1, economy1, KBB1, seats1, hp1, dt1] = car1;
    const [make2, model2, year2, price2, economy2, KBB2, seats2, hp2, dt2] = car2;
    return (
        <section>
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
                            <td>{car1.year} {car1.make} {car1.model}</td>
                            <td>{car2.year} {car2.make} {car2.model}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Starting Price</th>
                            <td>${car1.price}</td>
                            <td>${car2.price}</td>
                        </tr>
                        <tr>
                            <th>Fuel Economy</th>
                            <td>{car1.economy}</td>
                            <td>{car2.economy}</td>
                        </tr>
                        <tr>
                            <th>KBB Expert Rating</th>
                            <td>{car1.KBB}</td>
                            <td>{car2.KBB}</td>
                        </tr>
                        <tr>
                            <th>Seating Capacity</th>
                            <td>{car1.seats}</td>
                            <td>{car2.seats}</td>
                        </tr>
                        <tr>
                            <th>Horsepower</th>
                            <td>{car1.hp}</td>
                            <td>{car2.hp}</td>
                        </tr>
                        <tr>
                            <th>Drivetrain</th>
                            <td>{car1.dt}</td>
                            <td>{car2.dt}</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </section>
    );
}