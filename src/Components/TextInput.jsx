const TextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  id,
  required,
  pattern,
}) => {
  return (
    <div className="form-control">
      <label htmlFor={id}>
        {label}
        {required && <span>*</span>}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChangeText}
        required={required || false}
        pattern={pattern}
      />
    </div>
  );
};

export default TextInput;
