import { useEffect, useState } from "react";

const CURRENCY_SYMBOLS = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  ZAR: "R",
  // Add more as needed
};

export function useCurrency(usdAmount) {
  const [converted, setConverted] = useState({ amount: usdAmount, symbol: "$", code: "USD" });

  useEffect(() => {
    async function fetchCurrency() {
      try {
        // Get user's country/currency (freegeoip or ipapi or similar)
        const geoRes = await fetch("https://ipapi.co/json/");
        const geo = await geoRes.json();
        const currency = geo.currency || "USD";

        // Fetch exchange rates (exchangerate-api, openexchangerates, etc.)
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

// Example inside your pricing component
import { useCurrency } from "../utils/useCurrency";

function PriceTag({ usd }) {
  const { amount, symbol, code } = useCurrency(usd);
  return (
    <span>
      {symbol}{amount} <small>{code !== "USD" ? code : ""}</small>
    </span>
  );
}

// Usage:
// <PriceTag usd={2500} />