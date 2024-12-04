import classNames from "classnames";
import { useRef, useState } from "react";
import EmailIcon from "../icons/email-icon";
import PasswordIcon from "../icons/password-icon";
import SearchIcon from "../icons/search-icon";
import TextIcon from "../icons/text-icon";
import { InputType } from "../settings";

type InputProps = {
  type: InputType;
  placeholder: string;
  onInput?: (value: string) => void;
};

function Input({ type, placeholder, onInput = () => {} }: InputProps) {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const inputClasses = classNames({
    input: true,
    input__active: value,
  });

  const icons = {
    number: <TextIcon />,
    search: <SearchIcon />,
    text: <TextIcon />,
    email: <EmailIcon />,
    password: <PasswordIcon />,
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    onInput(event.target.value);
  }

  return (
    <label className={inputClasses} onClick={() => inputRef.current!.focus()}>
      {icons[type]}
      <input
        className="input_field"
        type={type}
        placeholder={placeholder}
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

export default Input;
