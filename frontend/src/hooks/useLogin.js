import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (username, password) => {
		const success = handleInputErrors(username, password);
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}



// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useAuthContext } from "../context/AuthContext";

// const useLogin = () => {
// 	const [loading, setLoading] = useState(false);
// 	const { setAuthUser } = useAuthContext();

// 	const login = async (username, password) => {
// 		const success = handleInputErrors(username, password);
// 		if (!success) return;
// 		setLoading(true);
// 		try {
// 			const res = await fetch("/api/auth/login", {
// 				method: "POST",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify({ username, password }),
// 			});

// 			const data = await res.json();
// 			//********* */
// 			if (data.error) {
// 				throw new Error(data.error);
// 			}
// 			// if (res.status !== 200) {
// 			// 	throw new Error(data.message || "Username or password incorrect");
// 			// }

// 			localStorage.setItem("chat-user", JSON.stringify(data));
// 			setAuthUser(data);
// 		} catch (error) {
// 			toast.error(error.message);
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return { loading, login };
// };
// export default useLogin;

// //we also handle below error in serverside as well
// function handleInputErrors(username, password ) {
// 	//it will return some errors,if any of this field not provided during signup
// 	  if ( !username || !password) {
// 		 toast.error("Please fill in all fields");
// 		 return false;
// 	 }

 
// 	//if above errors not occur then below code will proceed 
// 	 return true;
 
//  }