import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";

import SelectInput from "../Components/SelectInput";
import TextInput from "../Components/TextInput";

import { useGetDataQuery } from "../services/currencyApi";
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
  const [form, setForm] = useState("");
  const [firstCountryCurrency, setFirstCountryCurrency] = useState("select");
  const [to, setTo] = useState("");
  const [secondCountryCurrency, setSecondCountryCurrency] = useState("select");
  const [amount, setAmount] = useState("");

  const { data, isFetching } = useGetDataQuery();

  useEffect(() => {
    setFirstCountryCurrency(data?.rates);
    setSecondCountryCurrency(data?.rates);
    dispatch(setCurrencyAmount(amount));
    dispatch(setCurrencyOne(form));
    dispatch(setCurrencyTwo(to));
  }, [data, amount, dispatch, form, to]);

  const onFormChange = ({ target }) => {
    setForm(target.value);
  };
  const onToChange = ({ target }) => {
    setTo(target.value);
  };
  const onAmountChange = ({ target }) => {
    setAmount(target.value);
  };
  const onConvertHandler = (e) => {
    e.preventDefault();
    dispatch(convertCurrency());
  };

  console.log({ form, to, amount });

  let firstCountryOptions;
  let secondCountryOptions;
  if (firstCountryCurrency && secondCountryCurrency) {
    firstCountryOptions = Object.keys(firstCountryCurrency).map(
      (value, index) => (
        <option key={index} value={firstCountryCurrency[value]}>
          {value}
          {console.log({ value, index })}
        </option>
      )
    );

    secondCountryOptions = Object.keys(secondCountryCurrency).map(
      (value, index) => (
        <option key={index} value={secondCountryCurrency[value]}>
          {value}
          {console.log({ value, index })}
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
          <form onSubmit={onConvertHandler}>
            <div className={styles.formInputs}>
              <TextInput
                label="Amount"
                value={amount || ""}
                onChangeText={onAmountChange}
                required={true}
              />
              <SelectInput
                label="Form"
                optionValue={form}
                onOptionChange={onFormChange}
                required={true}
                options={firstCountryOptions}
              />
              <SelectInput
                label="To"
                optionValue={to}
                onOptionChange={onToChange}
                required={true}
                options={secondCountryOptions}
              />
            </div>
            <input type="submit" className={styles.submit} value="Convert" />
          </form>
          <div>{result}</div>
        </div>
      </div>
    );
  }
};

export default Home;
