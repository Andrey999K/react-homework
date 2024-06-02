import { OnSubmit } from "../../shared/types";
import TextField from "../../shared/ui/TextField";
import { useForm } from "../../shared/lib/hooks/useForm.ts";

const initialState = {
  name: "",
  nickname: "",
  email: "",
  sex: "",
  password: "",
  repeatPassword: ""
};

interface SignUp {
  onSubmit: OnSubmit;
}

const SignUp = ({ onSubmit }: SignUp) => {
  const { formElement, handlerChange, handlerSubmit } = useForm(
    initialState,
    onSubmit
  );

  return (
    <form
      ref={formElement}
      onSubmit={handlerSubmit}
      onChange={handlerChange}
      className="form"
    >
      <TextField type="text" name="name" placeholder="name" label="Name" />
      <TextField
        type="text"
        name="nickname"
        placeholder="nickname"
        label="Nickname"
        rightIcon="@"
      />
      <TextField type="text" name="email" placeholder="email" label="Email" />
      <TextField type="text" name="sex" placeholder="sex" label="Sex" />
      <TextField
        type="password"
        name="password"
        placeholder="password"
        label="Password"
      />
      <TextField
        type="password"
        name="repeatPassword"
        placeholder="password"
        label="Repeat Password"
        description="Repeat Password"
      />
      <button>Зарегистрироваться</button>
    </form>
  );
};

export default SignUp;
