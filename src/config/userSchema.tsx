export interface FieldSchema {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

export const userSchema: FieldSchema[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true
  }
];
