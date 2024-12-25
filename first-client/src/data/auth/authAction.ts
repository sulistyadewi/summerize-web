"use server";

export async function RegisterAction(prevState: any, formData: FormData) {
  // console.log("hello from action");
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  return {
    ...prevState,
    data: user,
  };
  // console.log(user, "ini user");
}

// export async function LoginAction(formData: FormData) {
//   const userLogin = {
//     email: formData.get("email"),
//     password: formData.get("password"),
//   };
//   console.log(userLogin, "ini dari login");
// }
