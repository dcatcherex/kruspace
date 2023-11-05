import { Icons } from "./icons";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <><div className="mb-4 rounded-lg border-[1px] px-2">
    <div className="flex items-center gap-2">
      <Icons.search />
      <Input className="border-none" placeholder="ค้นหา" />
      <Icons.setting2 />
    </div>
  </div></>
  )
}
export default Search