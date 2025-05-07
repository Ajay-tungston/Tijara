import { useState, useEffect, useRef } from "react";
import { Pencil, Trash, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sellers = Array(8).fill({
  no: "01",
  managerName: "JOE JOY",
  companyName: "abc pvt ltd",
  sellerName: "JOE JOY",
  email: "Ajay132@gmail.com",
  phone: "6238945012",
  license: "1854879652",
  id: "123",
});

export default function SellerTable() {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsFilterOpen(false);
    };
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterClick = (type) => {
    setIsFilterOpen(false);
    navigate(`/${type.toLowerCase()}`);
  };

  return (
    <div className="p-6 min-h-screen bg-[#E9E9E9] relative">
      {/* Header and Filter Button */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-4 relative">
        <div>
          <p className="text-gray-500 text-sm">Users &gt; Seller</p>
          <h2 className="text-2xl font-semibold">Seller</h2>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="bg-[#B3DB48] text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <Filter size={25} /> Filter
          </button>

          {/* Filter Popup Positioned Top Right */}
          {isFilterOpen && (
            <div
              ref={popupRef}
              className="absolute right-0 mt-2 bg-[#F0EEEE] rounded-lg shadow-xl w-[180px] z-50"
            >
              <button
                onClick={() => handleFilterClick("Sell")}
                className="w-full text-left px-4 py-3 text-md hover:bg-[#B3DB48] rounded-t-lg"
              >
                Seller
              </button>
              <button
                onClick={() => handleFilterClick("Buyer")}
                className="w-full text-left px-4 py-3 text-md hover:bg-[#B3DB48] rounded-b-lg"
              >
                Buyer
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Table Box */}
      <div className="max-w-6xl mx-auto rounded-lg p-4" style={{ backgroundColor: "#F6F9EF" }}>
        {/* Table Headers */}
        <div className="p-3 rounded-lg shadow-sm grid grid-cols-10 font-bold text-black text-center text-sm whitespace-nowrap bg-white">
          <div>No</div>
          <div>Manager Name</div>
          <div>Company Name</div>
          <div>Seller Name</div>
          <div>Email.ID</div>
          <div></div>
          <div>Ph no</div>
          <div>Licence number</div>
          <div>Edit</div>
          <div>Delete</div>
        </div>

        {/* Table Rows */}
        <div className="space-y-3 mt-3">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow-sm grid grid-cols-10 text-center items-center text-sm whitespace-nowrap"
            >
              <div className="text-gray-700 font-medium">{seller.no}</div>
              <div
                className="text-[#B3DB48] font-medium cursor-pointer hover:underline"
                onClick={() => navigate(`/profile`)}
              >
                {seller.managerName}
              </div>
              <div className="text-gray-700">{seller.companyName}</div>
              <div className="text-gray-700">{seller.sellerName}</div>
              <div className="text-gray-700">{seller.email}</div>
              <div></div>
              <div className="text-gray-700">{seller.phone}</div>
              <div className="text-gray-700">{seller.license}</div>
              <div className="flex justify-center">
                <button className="text-green-500 hover:text-green-700">
                  <Pencil size={14} />
                </button>
              </div>
              <div className="flex justify-center">
                <button className="text-red-500 hover:text-red-700">
                  <Trash size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

