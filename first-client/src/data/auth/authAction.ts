"use server";
import { cookies } from "next/headers";
import { object, z, ZodError } from "zod";
import { RegisterService } from "@/data/services/authService";
import { ZodErrors } from "@/components/ZodError";
import { redirect } from "next/navigation";
import { LoginService } from "@/data/services/authService";

const config = {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

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

const schemaLogin = z.object({
  identifier: z.string().min(6).max(10, {
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
  const cookiesStore = await cookies();
  cookiesStore.set("jwt", responseData.jwt, config);
  redirect("/dashboard");
  // console.log(user, "ini user");
}

export async function LoginAction(prevState: any, formData: FormData) {
  const validate = schemaLogin.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("passowrd"),
  });

  if (!validate.success) {
    return {
      ...prevState,
      zodErrors: validate.error.flatten().fieldErrors,
      strapiError: null,
      message: "Missing fields, failed to register",
    };
  }
  const responseData = await LoginService(validate.data);
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
      message: "Failed to login",
    };
  }
  const cookiesStore = await cookies();
  cookiesStore.set("jwt", responseData.jwt, config);
  redirect("/dashboard");
}

export async function LogOut() {
  const cookiesStore = await cookies();
  cookiesStore.set("jwt", "", { ...config, maxAge: 0 });
  redirect("/");
}
