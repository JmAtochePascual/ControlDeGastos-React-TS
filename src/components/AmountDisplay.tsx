import { formatCurrency } from "../utils";

type AmountDisplayProps = {
  label?: string;
  amount: number;
}

export const AmountDisplay = ({ label, amount }: AmountDisplayProps) => {
  return (
    <p className={`text-xl font-bold text-blue-600 md:text-2xl lg:text-3xl ${label ? `text-center` : 'text-right'}`}>
      {label ? `${label}:` : ''} <span className="font-black text-black">{formatCurrency(amount)}</span>
    </p>
  )
};