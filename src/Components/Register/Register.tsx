import React, { useState, useEffect } from "react";
import {
  useGetAllUserAccountQuery,
  useCreateUserAccountMutation,
  UserAccount,
} from "../../generated/graphql";
import { RegisterCard } from "./Style";

type Props = {};
const Register: React.FC<Props> = ({}) => {
  return (
    <>
      <RegisterCard>
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-once="false"
          className=""
        >
          <input type="text"></input>
        </div>
      </RegisterCard>
    </>
  );
};
export default Register;
