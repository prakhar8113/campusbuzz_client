import axios from "axios";
import React, { useEffect, useState } from "react";

function Creator() {
  const [admin, setAdmin] = useState([]);
  console.log(admin);
  useEffect(() => {
    const fetchAdmins = async () => {
      const { data } = await axios.get(
        "https://campusbuzz-server.onrender.com/api/users/admins",
        {
          withCredentials: true,
        }
      );
      console.log(data.admins);
      setAdmin(data.admins);
    };
    fetchAdmins();
  }, []);
  return (
    // <div className=" container mx-auto p-4">
    //   <h1 className="text-2xl font-semibold mb-6">Club Coordinators</h1>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 rounded-full my-5">
    //     {admin && admin.length > 0 ? (
    //       admin.slice(0, 5).map((element) => {
    //         return (
    //           <div key={element._id}>
    //             <div className="">
    //               <img
    //                 src={element.photo.url}
    //                 alt="blog"
    //                 className="md:w-56 md:h-56 object-cover border border-black rounded-full items-center "
    //               />
    //               <div className="text-center md:ml-[-130px]">
    //                 <p>{element.name}</p>
    //                 <p className="text-gray-600 text-xs">{element.club}</p>
    //                 <p className="text-gray-600 text-xs">{element.phone}</p>
    //                 <p className="text-gray-600 text-xs">{element.email}</p>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })
    //     ) : (
    //       <div></div>
    //     )}
    //   </div>
    // </div>
    // <div className="container mx-auto p-4">
    //   <h1 className="text-2xl font-semibold mb-6">Club Coordinators</h1>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5">
    //     {admin && admin.length > 0 ? (
    //       admin.slice(0, 5).map((element) => {
    //         return (
    //           <div key={element._id}>
    //             <div className="flex flex-col items-center">
    //               <img
    //                 src={element.photo.url}
    //                 alt="club coordinator"
    //                 className="w-24 h-24 md:w-32 md:h-32 object-cover border border-black rounded-full"
    //               />
    //               <div className="text-center mt-2">
    //                 <p className="font-semibold">{element.name}</p>
    //                 <p className="text-gray-600 text-xs">{element.club}</p>
    //                 <p className="text-gray-600 text-xs">{element.phone}</p>
    //                 <p className="text-gray-600 text-xs">{element.email}</p>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })
    //     ) : (
    //       <div></div>
    //     )}
    //   </div>
    // </div>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Club Coordinators</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-6">
        {admin && admin.length > 0 ? (
          admin.slice(0, 5).map((element) => {
            return (
              <div key={element._id}>
                <div className="flex flex-col items-center">
                  <img
                    src={element.photo.url}
                    alt="club coordinator"
                    className="w-32 h-32 md:w-40 md:h-40 object-cover border border-black rounded-full"
                  />
                  <div className="text-center mt-3">
                    <p className="text-lg font-semibold">{element.name}</p>
                    <p className="text-gray-600 text-sm">{element.club}</p>
                    <p className="text-gray-600 text-sm">{element.phone}</p>
                    <p className="text-gray-600 text-sm">{element.email}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Creator;
