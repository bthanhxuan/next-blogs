import { Input } from "../shared/Input";

function HeaderSearch() {
  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form>
        <Input type="search" placeholder="Nhap gia tri search ..." />
      </form>
    </div>
  );
}

export default HeaderSearch;
