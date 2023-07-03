import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";

import SelectInput from "../Components/SelectInput";
import TextInput from "../Components/TextInput";

import {
  useGetCurrencyCountryQuery,
  useGetDataQuery,
} from "../services/currencyApi";
import styles from "./Home.module.css";
import {
  convertCurrency,
  setCurrencyAmount,
  setCurrencyOne,
  setCurrencyTwo,
} from "../features/Currency/CurrencySlice";

const Home = () => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.currency);
  const [from, setFrom] = useState("select");
  const [firstCountryCurrency, setFirstCountryCurrency] = useState("");
  const [countryName, setCountryName] = useState("");
  const [to, setTo] = useState("select");
  const [secondCountryCurrency, setSecondCountryCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [finalResult, setFinalResult] = useState(0);
  const [error, setError] = useState("");

  const { data, isFetching } = useGetDataQuery();
  const { data: currencyCountryData } = useGetCurrencyCountryQuery();

  useEffect(() => {
    setFirstCountryCurrency(data?.rates);
    setSecondCountryCurrency(data?.rates);
    setCountryName(currencyCountryData?.symbols);
    dispatch(setCurrencyAmount(amount));
    dispatch(setCurrencyOne(from));
    dispatch(setCurrencyTwo(to));
  }, [data, amount, dispatch, from, to, currencyCountryData]);

  const onFromChange = ({ target }) => {
    setFrom(target.value);
  };
  const onToChange = ({ target }) => {
    setTo(target.value);
  };
  const onAmountChange = ({ target }) => {
    setAmount(target.value);
  };
  const onConvertHandler = (e) => {
    e.preventDefault();

    if (from === "select" || to === "select") {
      setError("Please select a currency");
    } else {
      dispatch(convertCurrency());
      setFinalResult(true);
      setError("");
    }
  };

  let firstCountryOptions;
  let secondCountryOptions;
  if (firstCountryCurrency && secondCountryCurrency) {
    firstCountryOptions = Object.keys(firstCountryCurrency).map(
      (value, index) => (
        <option key={index} value={firstCountryCurrency[value]}>
          {value} | {countryName[value]}
        </option>
      )
    );
    secondCountryOptions = Object.keys(secondCountryCurrency).map(
      (value, index) => (
        <option key={index} value={secondCountryCurrency[value]}>
          {value} | {countryName[value]}
        </option>
      )
    );
  }

  if (isFetching) {
    return <ClipLoader color="#1e3050" />;
  }

  if (data) {
    return (
      <div className={styles.fullPage}>
        <div className={styles.form}>
          <h1 className={styles.header}>Currency Converter</h1>
          <form onSubmit={onConvertHandler}>
            <div className={styles.formInputs}>
              <TextInput
                label="Amount"
                value={amount || ""}
                onChangeText={onAmountChange}
                required={true}
                pattern="^[1-9]\d*(\.\d+)?$"
                guide="amount accept numbers only"
              />
              <SelectInput
                label="From"
                optionValue={from}
                onOptionChange={onFromChange}
                required={true}
                options={firstCountryOptions}
              />
              {console.log({ from })}
              <SelectInput
                label="To"
                optionValue={to}
                onOptionChange={onToChange}
                required={true}
                options={secondCountryOptions}
              />
            </div>
            {error !== "" && <p className={styles.error}>{error}</p>}
            <input type="submit" className={styles.submit} value="Convert" />
          </form>
          {finalResult === true && (
            <div className={styles.result}>
              <p>{result}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Home;
