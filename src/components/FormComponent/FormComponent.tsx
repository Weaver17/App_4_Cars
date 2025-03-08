import SearchBtn from "../SearchBtn/SearchBtn";
import "./FormComponent.css";

type FormComponentProps = {
  onSubmit?: (e: { preventDefault: () => void }) => void;
  children: React.ReactNode;
};

function FormComponent({ onSubmit, children }: FormComponentProps) {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
      <div className="form__btn">
        <SearchBtn />
      </div>
    </form>
  );
}

export default FormComponent;
