import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

	const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
   //we just pass flname,usernm,pswd.cnfmpswd,gender to this function
   const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
		if (!success) return;

		setLoading(true);
		try {
			//vite config.js line 9-11 this is prefix
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
			});

			const data = await res.json();
      //console.log(data);
			if (data.error) {
				throw new Error(data.error);
			}
      //local storage
      //context
			localStorage.setItem("chat-user", JSON.stringify(data));//here data is the obj return from the backend
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };//states
};
export default useSignup;

//we also handle below error in serverside as well
function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
   //it will return some errors,if any of this field not provided during signup
	 if (!fullName || !username || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}
   //if above errors not occur then below code will proceed 
	return true;

}


// import toast from "react-hot-toast";
// import { useState } from "react";
// const useSignup = () => {
//   const [loading, setLoading] = useState(false);

//   const signup = async ({ fullName, username, password, confirmPassword, gender }) =>{
//     const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
//      if(!success) return;

//      try {
//       const res=await fetch("/api/auth/signup",{
//         method: "POST",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
//       })

//       const data= await res.json();
//       console.log(data);
      
//      } catch (error) {
//       toast.error(error.message)
      
//      }finally{
//       setLoading(false);
//      }
//   };
  
// };
// return {loading, signup }

// export default useSignup;

// function handleInputErrors({ fullName, username, password, confirmPassword, gender }){
//   if (!fullName || !username || !password || !confirmPassword || !gender) {
// 		toast.error("Please fill in all fields");
// 		return false;
// 	}

//   if (password !== confirmPassword) {
// 		toast.error("Passwords do not match");
// 		return false;
// 	}

// 	if (password.length < 6) {
// 		toast.error("Password must be at least 6 characters");
// 		return false;
// 	}
//    return true;

// }
