import { ApiUrl } from "../../config/UserApis";
import User from "../../interfaces/UserModel";

const RegisterUser = async (user: User) => {
  try {
    const solicitud = await fetch(`${ApiUrl}/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      mode: "cors",
    });
    const data = await solicitud.json();
    return data;
  } catch (error) {
    return error;
  }
};
const LoginUser = async (user: User) => {
  try {
    const solicitud = await fetch(`${ApiUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      mode: "cors",
    });
    const data = await solicitud.json();
    return data;
  } catch (error) {
    return error;
  }
};

export { RegisterUser, LoginUser };
