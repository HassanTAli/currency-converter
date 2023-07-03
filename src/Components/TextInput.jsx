const TextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  id,
  required,
  pattern,
  guide,
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
      <p>{guide}</p>
    </div>
  );
};

export default TextInput;
