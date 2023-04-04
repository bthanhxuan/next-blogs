import { useState } from "react";
import { Input } from "../shared/Input";
import { useRouter } from "next/router";

function HeaderSearch() {
  const router = useRouter();
  const [queryStr, setQueryStr] = useState('');

  function handleChangeValue(e: any) {
    setQueryStr(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (queryStr) {
      router.push(`/search?keyword=${queryStr}`);
    }
  }

  return (
    <div className="tcl-col-4">
      {/* Header Search */}
      <form onSubmit={handleSubmit}>
        <Input
          value={queryStr}
          onChange={handleChangeValue}
          type="search"
          placeholder="Nhap gia tri search ..."
        />
      </form>
    </div>
  );
}

export default HeaderSearch;
