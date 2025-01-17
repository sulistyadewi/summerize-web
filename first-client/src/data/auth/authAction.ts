"use server";
import { object, z, ZodError } from "zod";
import { RegisterService } from "@/data/services/authService";
import { ZodErrors } from "@/components/ZodError";

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
  console.log(prevState, "ini register action");

  const user = schemaRegister.safeParse({
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  });
  if (!user.success) {
    return {
      ...prevState,
      zodErrors: user.error.flatten().fieldErrors,
      strapiError: null,
      message: "Missing fields, failed to register",
    };
  }
  // console.log(user, "ini user");

  const responseData = await RegisterService(user.data);
  // console.log(user, "ini user");
  if (!responseData) {
    return {
      ...prevState,
      zodErrors: null,
      strapiError: null,
      message: "Someting when wrong",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      zodErrors: null,
      strapiError: responseData.error,
      message: "Failed to register",
    };
  }
  console.log("=========================");
  console.log(responseData.jwt, "ini token");
  console.log("=========================");
  return {
    ...prevState,
    data: user,
  };
  // console.log(user, "ini user");
}
