const SelectInput = ({
  options,
  label,
  guide,
  optionValue,
  onOptionChange,
  required,
}) => {
  return (
    <div className="form-control">
      <label>
        {label}
        {required && label && <span>*</span>}
      </label>
      {guide && <p>{guide}</p>}
      <select
        multiple={false}
        value={optionValue}
        onChange={onOptionChange}
        required={required}
        className="minimal"
      >
        <option value="select" disabled>
          --- Select An Option ---
        </option>
        {options}
      </select>
    </div>
  );
};

export default SelectInput;
