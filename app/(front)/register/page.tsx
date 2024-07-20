import LoginForm from "@/components/Auth/LoginForm";
import RegisterWithBg from "@/components/Auth/Register";
import RegisterForm from "@/components/Auth/RegisterForm";
import React from "react";

export default function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { role, plan } = searchParams;
  console.log(role, plan);
  return (
    <div className="">
      <RegisterWithBg role={role} plan={plan}/>
    </div>
  );
}
