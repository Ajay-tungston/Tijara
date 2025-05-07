// import { useState } from "react";
// import { LayoutDashboard, List, Grid, ChevronDown } from "lucide-react";

// export default function Sidebar() {
//   const [active, setActive] = useState("Dashboard");
//   const [isUsersOpen, setIsUsersOpen] = useState(false);
//   const [selectedUserType, setSelectedUserType] = useState("Seller"); // Default selection

//   return (
//     <div className="w-64 h-screen bg-white p-4 border-r">
//       {/* Logo */}
//       <h2 className="text-2xl font-bold text-black flex items-center justify-center mb-6">
//         tijara
//         <span className="text-green-500">.</span>
//       </h2>

//       {/* Sidebar Navigation */}
//       <nav className="space-y-2">
//         <button
//           className={`flex items-center w-full p-3 rounded-md text-left ${
//             active === "Dashboard"
//               ? "bg-green-300 text-black font-bold"
//               : "hover:bg-gray-100"
//           }`}
//           onClick={() => setActive("Dashboard")}
//         >
//           <LayoutDashboard className="w-5 h-5 mr-2" />
//           Dashboard
//         </button>

//         <button
//           className={`flex items-center w-full p-3 rounded-md text-left ${
//             active === "Subscription"
//               ? "bg-green-300 text-black"
//               : "hover:bg-gray-100"
//           }`}
//           onClick={() => setActive("Subscription")}
//         >
//           <List className="w-5 h-5 mr-2" />
//           Subscription
//         </button>

//         {/* Users Dropdown */}
//         <div>
//           <button
//             className={`flex items-center w-full p-3 rounded-md text-left ${
//               active === "Users" ? "bg-green-300 text-black" : "hover:bg-gray-100"
//             }`}
//             onClick={() => {
//               setActive("Users");
//               setIsUsersOpen(!isUsersOpen);
//             }}
//           >
//             <Grid className="w-5 h-5 mr-2" />
//             Users
//             <ChevronDown
//               className={`w-4 h-4 ml-auto transform ${
//                 isUsersOpen ? "rotate-180" : "rotate-0"
//               }`}
//             />
//           </button>

//           {/* Dropdown Items - Seller & Buyer Selection */}
//           {isUsersOpen && (
//             <div className="ml-6 mt-2 space-y-2">
//               {/* Seller Option */}
//               <label className="flex items-center cursor-pointer">
//                 <input
//                   type="radio"
//                   name="userType"
//                   value="Seller"
//                   className="hidden"
//                   checked={selectedUserType === "Seller"}
//                   onChange={() => setSelectedUserType("Seller")}
//                 />
//                 <span
//                   className={`w-4 h-4 mr-2 flex items-center justify-center rounded-full border-2 ${
//                     selectedUserType === "Seller" ? "bg-green-500 border-green-500" : "border-gray-400"
//                   }`}
//                 />
//                 <span className="text-green-500">Seller</span>
//               </label>

//               {/* Buyer Option */}
//               <label className="flex items-center cursor-pointer">
//                 <input
//                   type="radio"
//                   name="userType"
//                   value="Buyer"
//                   className="hidden"
//                   checked={selectedUserType === "Buyer"}
//                   onChange={() => setSelectedUserType("Buyer")}
//                 />
//                 <span
//                   className={`w-4 h-4 mr-2 flex items-center justify-center rounded-full border-2 ${
//                     selectedUserType === "Buyer" ? "bg-green-500 border-green-500" : "border-gray-400"
//                   }`}
//                 />
//                 <span className="text-black">Buyer</span>
//               </label>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// }


// import { useState } from "react";
// import { LayoutDashboard, Grid, ChevronDown } from "lucide-react";

// export default function Sidebar() {
//   const [active, setActive] = useState("Dashboard");
//   const [isUsersOpen, setIsUsersOpen] = useState(false);
//   const [selectedUserType, setSelectedUserType] = useState("Seller"); // Default selection

//   return (
//     <div className="w-64 h-screen bg-white p-4 border-r">
//       {/* Logo */}
//       <h2 className="text-2xl font-bold text-black flex items-center justify-center mb-6">
//         tijara<span className="text-green-500">.</span>
//       </h2>

//       {/* Sidebar Navigation */}
//       <nav className="space-y-2">
//         <button
//           className={`flex items-center w-full p-3 rounded-md text-left ${
//             active === "Dashboard"
//               ? "bg-green-300 text-black font-bold"
//               : "hover:bg-gray-100"
//           }`}
//           onClick={() => setActive("Dashboard")}
//         >
//           <LayoutDashboard className="w-5 h-5 mr-2" />
//           Dashboard
//         </button>

//         {/* Users Dropdown */}
//         <div>
//           <button
//             className={`flex items-center w-full p-3 rounded-md text-left ${
//               active === "Users" ? "bg-green-300 text-black" : "hover:bg-gray-100"
//             }`}
//             onClick={() => {
//               setActive("Users");
//               setIsUsersOpen(!isUsersOpen);
//             }}
//           >
//             <Grid className="w-5 h-5 mr-2" />
//             Users
//             <ChevronDown
//               className={`w-4 h-4 ml-auto transform ${
//                 isUsersOpen ? "rotate-180" : "rotate-0"
//               }`}
//             />
//           </button>

//           {/* Dropdown Items - Seller & Buyer Selection */}
//           {isUsersOpen && (
//             <div className="ml-6 mt-2 space-y-2">
//               {/* Seller Option */}
//               <label className="flex items-center cursor-pointer">
//                 <input
//                   type="radio"
//                   name="userType"
//                   value="Seller"
//                   className="hidden"
//                   checked={selectedUserType === "Seller"}
//                   onChange={() => setSelectedUserType("Seller")}
//                 />
//                 <span
//                   className={`w-4 h-4 mr-2 flex items-center justify-center rounded-full border-2 ${
//                     selectedUserType === "Seller"
//                       ? "bg-green-500 border-green-500"
//                       : "border-gray-400"
//                   }`}
//                 />
//                 <span className="text-green-500">Seller</span>
//               </label>

//               {/* Buyer Option */}
//               <label className="flex items-center cursor-pointer">
//                 <input
//                   type="radio"
//                   name="userType"
//                   value="Buyer"
//                   className="hidden"
//                   checked={selectedUserType === "Buyer"}
//                   onChange={() => setSelectedUserType("Buyer")}
//                 />
//                 <span
//                   className={`w-4 h-4 mr-2 flex items-center justify-center rounded-full border-2 ${
//                     selectedUserType === "Buyer"
//                       ? "bg-green-500 border-green-500"
//                       : "border-gray-400"
//                   }`}
//                 />
//                 <span className="text-black">Buyer</span>
//               </label>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// }



// import { useState } from "react";
// import { LayoutDashboard, Grid, ChevronDown } from "lucide-react";

// export default function Sidebar() {
//   const [active, setActive] = useState("Dashboard");
//   const [isUsersOpen, setIsUsersOpen] = useState(false);
//   const [selectedUserType, setSelectedUserType] = useState("Seller"); // Default selection

//   return (
//     <div className="w-64 h-screen bg-white p-4 border-r">
//       {/* Logo Image */}
//       <div className="flex justify-center items-center mb-6">
//         <img src="/image 6.png" alt="Logo" className="h-10 object-contain" />
//       </div>

//       {/* Sidebar Navigation */}
//       <nav className="space-y-2">
//         <button
//           className={`flex items-center w-full p-3 rounded-md text-left ${
//             active === "Dashboard"
//               ? "bg-[#B3DB48] text-black font-bold"
//               : "hover:bg-gray-100"
//           }`}
//           onClick={() => setActive("Dashboard")}
//         >
//           <LayoutDashboard className="w-5 h-5 mr-2" />
//           Dashboard
//         </button>

//         {/* Users Dropdown */}
//         <div>
//           <button
//             className={`flex items-center w-full p-3 rounded-md text-left ${
//               active === "Users" ? "bg-[#B3DB48] text-black font-bold" : "hover:bg-gray-100"
//             }`}
//             onClick={() => {
//               setActive("Users");
//               setIsUsersOpen(!isUsersOpen);
//             }}
//           >
//             <Grid className="w-5 h-5 mr-2" />
//             Users
//             <ChevronDown
//               className={`w-4 h-4 ml-auto transform ${
//                 isUsersOpen ? "rotate-180" : "rotate-0"
//               }`}
//             />
//           </button>

//           {/* Dropdown Items - Seller & Buyer Selection */}
//           {isUsersOpen && (
//             <div className="ml-6 mt-2 space-y-2">
//               {/* Seller Option */}
//               <label className="flex items-center cursor-pointer">
//                 <input
//                   type="radio"
//                   name="userType"
//                   value="Seller"
//                   className="hidden"
//                   checked={selectedUserType === "Seller"}
//                   onChange={() => setSelectedUserType("Seller")}
//                 />
//                 <span
//                   className={`w-4 h-4 mr-2 flex items-center justify-center rounded-full border-2 ${
//                     selectedUserType === "Seller"
//                       ? "bg-[#B3DB48] border-[#B3DB48]"
//                       : "border-black"
//                   }`}
//                 />
//                 <span className="text-black">Seller</span>
//               </label>

//               {/* Buyer Option */}
//               <label className="flex items-center cursor-pointer">
//                 <input
//                   type="radio"
//                   name="userType"
//                   value="Buyer"
//                   className="hidden"
//                   checked={selectedUserType === "Buyer"}
//                   onChange={() => setSelectedUserType("Buyer")}
//                 />
//                 <span
//                   className={`w-4 h-4 mr-2 flex items-center justify-center rounded-full border-2 ${
//                     selectedUserType === "Buyer"
//                       ? "bg-[#B3DB48] border-[#B3DB48]"
//                       : "border-black"
//                   }`}
//                 />
//                 <span className="text-black">Buyer</span>
//               </label>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// }



// import { useState } from "react";
// import { LayoutDashboard, Grid, Users } from "lucide-react";

// export default function Sidebar() {
//   const [active, setActive] = useState("Users");

//   const menuItems = [
//     { name: "Dashboard", icon: LayoutDashboard },
//     { name: "Users", icon: Grid },
//     { name: "Agents", icon: Users },
//   ];

//   return (
//     <div className="w-64 h-screen bg-white p-4">
//       {/* Logo */}
//       <div className="flex justify-center items-center mb-8">
//         <img src="/image 6.png" alt="Logo" className="h-8 object-contain" />
//       </div>

//       {/* Menu */}
//       <nav className="space-y-2">
//         {menuItems.map(({ name, icon: Icon }) => (
//           <button
//             key={name}
//             onClick={() => setActive(name)}
//             className={`flex items-center w-full px-4 py-3 rounded-md text-left transition-colors duration-200 ${
//               active === name
//                 ? "bg-[#B3DB48] text-black font-semibold"
//                 : "bg-[#F2F2F2] text-black hover:bg-gray-100"
//             }`}
//           >
//             <Icon className="w-5 h-5 mr-3" />
//             {name}
//           </button>
//         ))}
//       </nav>
//     </div>
//   );
// }


import { useState } from "react";
import { LayoutDashboard, Grid, Users } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

export default function Sidebar() {
  const [active, setActive] = useState("Users");
  const navigate = useNavigate(); // ✅ Initialize navigate

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard }, 
    { name: "Users", icon: Grid },
    { name: "Agents", icon: Users },
  ];

  const handleClick = (name) => {
    setActive(name);
    if (name === "Users") {
      navigate("/sell"); // ✅ Redirect to /sell when Users is clicked
    }
  };

  return (
    <div className="w-64 h-screen bg-white p-4">
      {/* Logo */}
      <div className="flex justify-center items-center mb-8">
        <img src="/image 6.png" alt="Logo" className="h-8 object-contain" />
      </div>

      {/* Menu */}
      <nav className="space-y-2">
        {menuItems.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => handleClick(name)} // ✅ Updated handler
            className={`flex items-center w-full px-4 py-3 rounded-md text-left transition-colors duration-200 ${
              active === name
                ? "bg-[#B3DB48] text-black font-semibold"
                : "bg-[#F2F2F2] text-black hover:bg-gray-100"
            }`}
          >
            <Icon className="w-5 h-5 mr-3" />
            {name}
          </button>
        ))}
      </nav>
    </div>
  );
}
