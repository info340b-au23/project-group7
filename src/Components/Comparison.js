import React from 'react';

export default function Comparison(props) {
    const { car1, car2 } = props;
    const { make: make1, model: model1, year: year1, price: price1, economy: economy1, KBB: KBB1, seats: seats1, hp: hp1, dt: dt1 } = car1;
    const { make: make2, model: model2, year: year2, price: price2, economy: economy2, KBB: KBB2, seats: seats2, hp: hp2, dt: dt2 } = car2;

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
        </section>
    );
}