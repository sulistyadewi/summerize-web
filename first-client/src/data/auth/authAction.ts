"use server";
import { object, z, ZodError } from "zod";

const schemaRegister = z.object({
  email: z.string().email({
    message: "Please enter valid email address",
  }),
  username: z.string().min(6).max(10, {
    message: "Username must between 6-10 character",
  }),
  password: z.string().min(5).max(8, {
    message: "Password must between 5-8 character",
  }),
});

export async function RegisterAction(prevState: any, formData: FormData) {
  // console.log("hello from action");
  console.log(prevState);

  const user = schemaRegister.safeParse({
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  });
  if (!user.success) {
    return {
      ...prevState,
      ZodError: user.error.flatten().fieldErrors,
      strapiError: null,
      message: "Missing fields, failed to register",
    };
  }
  // console.log(user, "ini user");
  return {
    ...prevState,
    data: user,
  };
  // console.log(user, "ini user");
}
