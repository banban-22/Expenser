import PropTypes from 'prop-types';

const CurrencyInputForm = (props) => {
  return (
    <>
      <select
        className="border-solid border-2 border-blue p-4 rounded-2xl bg-white focus:outline-none"
        value={props.currency}
        onChange={(e) => props.currencyChangeHandler(e.target.value)}
      >
        {props.currencies.map((currency, index) => {
          return (
            <option key={index} value={currency}>
              {currency}
            </option>
          );
        })}
      </select>

      <input
        type="number"
        value={props.amount}
        onChange={(e) => props.amountChangeHandler(e.target.value)}
        className="ml-20 border-b-blue border-b-2 pb-4 text-center focus:outline-none"
      />
    </>
  );
};

CurrencyInputForm.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  amountChangeHandler: PropTypes.func,
  currencyChangeHandler: PropTypes.func,
};

export default CurrencyInputForm;
