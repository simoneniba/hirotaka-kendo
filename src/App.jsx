import React from 'react';

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white p-6"
      style={{ backgroundImage: 'url(/ghibli-italy.png)' }}
    >
      <div className="max-w-3xl text-center bg-black bg-opacity-60 p-8 rounded-lg space-y-4">
        <img
          src="/sato.png"
          alt="Hirotaka Sato"
          className="w-40 h-40 rounded-full mx-auto shadow-xl border-4 border-white"
        />

        <h1 className="text-5xl font-bold">HIROTAKA SATO ITALIAN TOUR</h1>
        <p className="text-xl font-medium">Dal 31 Maggio all'8 Giugno 2025</p>
        <p className="text-lg">Milano, Brescia, Modena, Firenze</p>

        <p className="text-md leading-relaxed">
          Hirotaka Sato, vicecampione del campionato nazionale della polizia giapponese 2019, e 7 volte competitor agli ALL JAPAN KENDO CHAMPIONSHIP, arriva in Italia per seminari e allenamenti esclusivi.
        </p>

        <div className="pt-4">
          <p className="text-xl font-semibold mb-3">Donazione consigliata: 10€</p>
          <a
            href="https://donate.stripe.com/00g5n8fMUbj3fYs6oo"
            target="_blank"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
            rel="noopener noreferrer"
          >
            Dona ora
          </a>
        </div>
      </div>
    </div>
  );
}
