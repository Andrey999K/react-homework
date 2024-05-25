import { Button, Form, FormProps, Input } from "antd";
import { User } from "../../../types";

type FieldType = {
  email?: string;
  password?: string;
};

export interface SignInProps {
  onSubmit: (user: User) => void;
}

const SignIn = ({ onSubmit }: SignInProps) => {
  const [form] = Form.useForm();

  const handlerFinish: FormProps<User>["onFinish"] = values => {
    if (values.email && values.password) {
      onSubmit(values);
      form.resetFields();
    }
  };

  return (
    <Form
      form={form}
      onFinish={handlerFinish}
      className="flex flex-col w-full max-w-96 mt-[-20rem]"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
