type SearchFormPropTypes = {
  searchText:string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SearchForm({searchText, onChange}: SearchFormPropTypes) {

  return (
    <form action="#" className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
        value={searchText}
        onChange={(e)=>onChange(e)}
      />
    </form>
  );
}
