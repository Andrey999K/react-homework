export interface DataItem {
  id: number,
  title: string
}

export type OnSubmit = (form: { [field: string]: string }) => void;


export interface FormProps {
  onSubmit: OnSubmit;
}
