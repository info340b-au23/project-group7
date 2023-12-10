import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../index.css';

export default function Comparison({cars}) {

    const chartData = [
        {
            name: 'Price',
            car1: car1.price,
            car2: car2.price,
        },
        {
            name: 'Fuel Economy',
            car1: parseFloat(car1.economy.split(' ')[0]), // Assuming economy is a string like "30 MPG"
            car2: parseFloat(car2.economy.split(' ')[0]),
        },
        {
            name: 'KBB Rating',
            car1: car1.KBB,
            car2: car2.KBB,
        },
        {
            name: 'Seating Capacity',
            car1: car1.seats,
            car2: car2.seats,
        },
        {
            name: 'Horsepower',
            car1: parseInt(car1.hp.split(' ')[0]), 
            car2: parseInt(car2.hp.split(' ')[0]),
        },
    ];

    return (
        <section>
            <div className='body'>
                <header>
                    <h2>Comparisons</h2><br />
                    <a href="/">Home</a>
                </header>
                <main>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/52722/2024-Honda-Accord-front_52722_032_1810x721_GC_cropped.png" alt="dark grey midsize sedan" /></td>
                                <td><img src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/51622/2024-Honda-Civic-front_51622_032_1811x735_BK_cropped.png" alt="black compact sedan" /></td>
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

                    <BarChart width={600} height={300} data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="car1" fill="#8884d8" name={car1.make + ' ' + car1.model} />
                        <Bar dataKey="car2" fill="#82ca9d" name={car2.make + ' ' + car2.model} />
                    </BarChart>
                </main>
            </div>
        </section>
    );
}