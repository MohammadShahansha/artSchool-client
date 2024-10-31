import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import AboutMeForm from "./AboutMeForm";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const auth = getAuth();
  const [userInfo, setUserInfo] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    photoUrl: user?.photoURL || "",
  });
  const [aboutMe, setAboutMe] = useState("");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const { displayName, photoUrl } = userInfo;

    try {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: photoUrl,
      });

      Swal.fire("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile: ", error);
      Swal.fire("Error updating profile:", error.message, "error");
    }
  };

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //       if (currentUser) {
  //         // Update local state with the current user's info
  //         setUserInfo({
  //           displayName: currentUser.displayName || "",
  //           email: currentUser.email || "",
  //           photoUrl: currentUser.photoURL || "",
  //         });
  //       }
  //     });

  //     return () => unsubscribe(); // Clean up the listener on component unmount
  //   }, [auth]);

  const handleUpdateDescription = (newDescription) => {
    setAboutMe(newDescription); // Update local state
  };

  return (
    <div className="mx-5 ">
      <div className="flex flex-col-reverse md:flex-row gap-10 ">
        <div className="flex-1">
          <div className="text-3xl md:text-5xl font-normal">
            <h2>I am {userInfo.displayName}</h2>
            <h2>Contact me with {userInfo.email}</h2>
          </div>
          <form onSubmit={handleUpdateProfile} className="mt-8">
            <div className="mb-4">
              <label className="block text-lg font-medium">Display Name</label>
              <input
                type="text"
                value={userInfo.displayName}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, displayName: e.target.value })
                }
                className="input input-bordered w-[300px] md:w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium">
                Profile Picture URL
              </label>
              <input
                type="text"
                value={userInfo.photoUrl}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, photoUrl: e.target.value })
                }
                className="input input-bordered w-[300px] md:w-full"
              />
            </div>
            <button
              type="submit"
              className="btn bg-[#2046e0] hover:bg-[#062d50] text-white"
            >
              Update Profile
            </button>
          </form>
        </div>
        <div className="flex-1 mt-5 md:mt-0">
          <img
            src={userInfo.photoUrl}
            alt="User Image"
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full"
          />
        </div>
      </div>
      {/* <div className="mt-10">
        <AboutMeForm />
      </div> */}
    </div>
  );
};

export default Profile;
