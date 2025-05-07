
// import { Users } from "lucide-react";

// const stats = [
//   { title: "New users", value: 145, change: "+10%", color: "bg-green-100", textColor: "text-green-600" },
//   { title: "Buyer", value: 12, change: "+10%", color: "bg-green-100", textColor: "text-green-600" },
//   { title: "Seller", value: 234, change: "-10%", color: "bg-red-100", textColor: "text-red-600" },
//   { title: "No of enquiry", value: 775, change: "+10%", color: "bg-green-100", textColor: "text-green-600" },
// ];

// export default function DashboardCards() {
//   return (
//     <div className="bg-[#E9E9E9] p-6">
//       <h2 className="text-xl font-bold mb-4">Dashboard</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {stats.map((stat, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col relative h-44">
//             {/* Icon and Title */}
//             <div className="flex items-center gap-2">
//               <div className="bg-green-300 p-2 rounded-full">
//                 <Users className="w-5 h-5 text-white" />
//               </div>
//               <p className="text-md font-medium">{stat.title}</p>
//             </div>

//             {/* Number Moved Further Down */}
//             <p className="text-3xl font-bold text-center mt-auto">{stat.value}</p>

//             {/* Percentage Change (Bottom Right) */}
//             <div className={`text-xs px-2 py-1 rounded-md ${stat.color} ${stat.textColor} absolute bottom-2 right-2`}>
//               last month {stat.change}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { Users } from "lucide-react";
const stats = [
  { title: "New users", value: 145, change: "+10%", color: "bg-green-100", textColor: "text-green-600" },
  { title: "Buyer", value: 12, change: "+10%", color: "bg-green-100", textColor: "text-green-600" },
  { title: "Seller", value: 234, change: "-10%", color: "bg-red-100", textColor: "text-red-600" },
  { title: "No of enquiry", value: 775, change: "+10%", color: "bg-green-100", textColor: "text-green-600" },
];

export default function DashboardWithLayout() {
  return (
    <div className="flex bg-[#E9E9E9] min-h-screen">
      {/* Sidebar */}
      

      {/* Main content */}
      <div className="flex-1 p-6">
        
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col relative h-44">
              <div className="flex items-center gap-2">
                <div className="bg-green-300 p-2 rounded-full">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <p className="text-md font-medium">{stat.title}</p>
              </div>
              <p className="text-3xl font-bold text-center mt-auto">{stat.value}</p>
              <div className={`text-xs px-2 py-1 rounded-md ${stat.color} ${stat.textColor} absolute bottom-2 right-2`}>
                last month {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
