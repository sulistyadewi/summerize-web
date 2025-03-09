"use server";
import qs from "qs";

export async function ProfileAction(
  //   userId: string,
  prevState: any,
  formData: FormData
) {
  const rawFormData = Object.fromEntries(formData);
  const query = qs.stringify({
    populate: "*",
  });
  console.log(rawFormData, "ini rawFormdata");
  console.log(query, "ini query");

  const payload = {
    firstName: rawFormData.firstName,
    lastName: rawFormData.lastName,
    bio: rawFormData.bio,
    id: rawFormData.id,
  };
  //   console.log(userId, "ini userId");
  console.log(payload, "ini payload");
  return {
    ...prevState,
    message: "Profile Update",
    data: payload,
    strapiErrors: null,
  };
}
