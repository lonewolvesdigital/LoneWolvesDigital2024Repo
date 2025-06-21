import { useCurrency } from "../utils/useCurrency";

function PriceTag({ usd }) {
  const { amount, symbol, code } = useCurrency(usd);
  return (
    <span>
      {symbol}
      {amount} <small>{code !== "USD" ? code : ""}</small>
    </span>
  );
}

// Usage:
// <PriceTag usd={2500} />