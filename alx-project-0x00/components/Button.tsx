import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({ title, size, }) => {
  let sizeClass = '';


  return <button>{title}</button>;
};
