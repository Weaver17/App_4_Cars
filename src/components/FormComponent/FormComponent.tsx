import SearchBtn from "../SearchBtn/SearchBtn";
import "./FormComponent.css";

type FormComponentProps = {
  name: string;
  onSubmit?: () => void;
  children: React.ReactNode;
};

function FormComponent({ name, onSubmit, children }: FormComponentProps) {
  return (
    <form className={`form form_type_${name}`} name={name} onSubmit={onSubmit}>
      {children}
      <div className="form__btn">
        <SearchBtn />
      </div>
    </form>
  );
}

export default FormComponent;
