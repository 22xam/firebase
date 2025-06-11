jsx
import React from 'react';

function PaymentForm() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Realizar Pago</h2>
      <p className="text-sm text-gray-600 mb-4">
        Esta es una interfaz de pago básica. La integración real con una pasarela
        de pagos como Stripe sería necesaria aquí.
      </p>
      <form>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Número de Tarjeta</label>
          <input
            type="text"
            id="cardNumber"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="**** **** **** ****"
            disabled // Placeholder - no se manejarán datos reales de tarjeta aquí
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Fecha Exp.</label>
            <input
              type="text"
              id="expiryDate"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="MM/YY"
              disabled // Placeholder
            />
          </div>
          <div>
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
            <input
              type="text"
              id="cvc"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="***"
              disabled // Placeholder
            />
          </div>
          <div className="col-span-1">
             <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Código Postal</label>
             <input
               type="text"
               id="zipCode"
               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
               placeholder="#####"
               disabled // Placeholder
             />
           </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          disabled // Deshabilitado ya que no hay integración real
        >
          Pagar
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;