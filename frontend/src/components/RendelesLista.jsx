import { useEffect, useState } from 'react';
import api from '../api/axiosInstance.js';

export default function RendelesLista() {
    const [rendelesek, setRendelesek] = useState([]);
    const [hiba, setHiba] = useState('');
    const [betoltes, setBetoltes] = useState(true);

    useEffect(() => {
        const fetchRendelesek = async () => {
            try {
                const response = await api.get('/rendelesek');
                setRendelesek(response.data);
            } catch (error) {
                setHiba(error.response?.data?.error || error.message || 'A rendelések betöltése nem sikerült.');
            } finally {
                setBetoltes(false);
            }
        };

        fetchRendelesek();
    }, []);

    const oszlopok = [...new Set(rendelesek.flatMap((rendeles) => Object.keys(rendeles)))];

    return (
        <section className="orders">
            <h1>Rendelések</h1>
            {betoltes && <p role="status">Rendelések betöltése...</p>}
            {hiba && <p role="alert">Hiba a rendelések betöltésekor: {hiba}</p>}
            {!betoltes && !hiba && rendelesek.length === 0 && <p>Nincs megjeleníthető rendelés.</p>}
            {!betoltes && !hiba && rendelesek.length > 0 && (
                <div className="orders-table-wrapper">
                    <table className="orders-table">
                        <thead>
                            <tr>
                                {oszlopok.map((oszlop) => <th key={oszlop} scope="col">{oszlop}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {rendelesek.map((rendeles, index) => (
                                <tr key={rendeles.id ?? index}>
                                    {oszlopok.map((oszlop) => {
                                        const ertek = rendeles[oszlop];
                                        return (
                                            <td key={oszlop}>
                                                {ertek == null
                                                    ? '—'
                                                    : typeof ertek === 'object'
                                                        ? JSON.stringify(ertek)
                                                        : String(ertek)}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}
