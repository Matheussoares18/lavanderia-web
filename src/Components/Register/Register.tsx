import React, { useState, useEffect } from "react";
import {
  useGetAllUserAccountQuery,
  useCreateUserAccountMutation,
  UserAccount,
} from "../../generated/graphql";

type Props = {};
const Register: React.FC<Props> = ({}) => {
  const [street, setStreet] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [createUserMutation] = useCreateUserAccountMutation();
  const { data, loading } = useGetAllUserAccountQuery();

  const createUser = async () => {
    await createUserMutation({
      variables: {
        email: email,
        cep: cep,
        city: city,
        name: name,
        number: number,
        senha: senha,
        state: state,
        street: street,
      },
    });
    window.location.reload(false);
  };

  return (
    <>
      <label>Street</label>
      <input type="text" onChange={(e) => setStreet(e.target.value)}></input>
      <label>cep</label>
      <input type="text" onChange={(e) => setCep(e.target.value)}></input>
      <label>state</label>
      <input type="text" onChange={(e) => setState(e.target.value)}></input>
      <label>city</label>
      <input type="text" onChange={(e) => setCity(e.target.value)}></input>
      <label>email</label>
      <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
      <label>senha</label>
      <input type="text" onChange={(e) => setSenha(e.target.value)}></input>
      <label>name</label>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <label>Numero</label>
      <input type="text" onChange={(e) => setNumber(e.target.value)}></input>

      <button onClick={() => createUser()}>Salvar</button>

      {data &&
        data.getAllUserAccount.map((value: any) => (
          <>
            <ul>
              <li>{value.name}</li>
              <li>{value.id}</li>
              <li>{value.email}</li>
            </ul>
          </>
        ))}
    </>
  );
};
export default Register;
