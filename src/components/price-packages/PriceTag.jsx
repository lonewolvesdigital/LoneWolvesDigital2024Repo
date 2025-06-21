import { useEffect, useState } from "react";

const CURRENCY_SYMBOLS = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  ZAR: "R",
  AUD: "A$", // Australian Dollar
  AED: "د.إ", // UAE Dirham
  SGD: "S$", // Singapore Dollar
  NZD: "NZ$", // New Zealand Dollar
  CAD: "C$", // Canadian Dollar
  // Add more as needed
};

export function useCurrency(usdAmount) {
  const [converted, setConverted] = useState({ amount: usdAmount, symbol: "$", code: "USD" });

  useEffect(() => {
    async function fetchCurrency() {
      try {
        // Get user's country/currency
        const geoRes = await fetch("https://ipapi.co/json/");
        const geo = await geoRes.json();
        const currency = geo.currency || "USD";

        // Fetch exchange rates
        const rateRes = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
        const rates = await rateRes.json();
        const rate = rates.rates[currency] || 1;

        setConverted({
          amount: (usdAmount * rate).toFixed(2),
          symbol: CURRENCY_SYMBOLS[currency] || currency,
          code: currency,
        });
      } catch {
        setConverted({ amount: usdAmount, symbol: "$", code: "USD" });
      }
    }
    fetchCurrency();
  }, [usdAmount]);

  return converted;
}

export default function PriceTag({ usd }) {
  const { amount, symbol, code } = useCurrency(usd);
  return (
    <span>
      {symbol}{amount} <small>{code !== "USD" ? code : ""}</small>
    </span>
  );
}
