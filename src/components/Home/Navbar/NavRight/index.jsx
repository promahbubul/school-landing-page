import Button from "../../../shared/ui/Button";
import TextButton from "../../../shared/ui/TextButton";
import { IoSearch, IoCloseOutline } from "../../../../assets/icons/";
import { useState } from "react";

const NavRight = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  return (
    <div className="w-4/12 flex items-center flex-row justify-end">
      <button
        onClick={() => setShowSearchModal(!showSearchModal)}
        className="text-2xl font-normal hover:scale-95 active:scale-100 text-dark-red"
      >
        <IoSearch />
      </button>
      <TextButton text={"Login"} className={"px-6 py-3 "} />
      <Button text={"Register"} className={"px-6 py-3 "} />

      {/* Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 ">
          <div
            onClick={() => setShowSearchModal(!showSearchModal)}
            className="bg-dark2/50 absolute inset-0"
          ></div>
          <form
            action=""
            className="bg-white relative rounded-md w-1/2 top-32 left-1/2 -translate-x-1/2 "
          >
            <input
              type="text"
              name=""
              className="bg-white p-5 rounded-md border-none outline-none w-full"
              placeholder="What do you want to know?"
            />
            <button
              onClick={() => setShowSearchModal(!showSearchModal)}
              type="button"
              className="absolute text-3xl top-1/2 right-5 -translate-y-1/2"
            >
              <IoCloseOutline />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default NavRight;
