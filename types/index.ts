export interface DataItem {
  id: number,
  title: string
}

export interface OnSubmit {
  (form: { [field: string]: string }): void;
}