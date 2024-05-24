import React from "react";
import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have a account?"
      backButtonHref="/auth/register"
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
};
