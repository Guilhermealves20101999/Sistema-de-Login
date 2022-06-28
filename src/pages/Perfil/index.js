import React, { useState }  from "react";
import Navigation from "../../components/Navigation";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";

//var users_db = localStorage.getItem("@users_bd/name");


const Perfil = () => {   
  var users_bd = localStorage.getItem("users_bd");
  users_bd = JSON.parse(users_bd);

 
    
    console.log(users_bd)


  return (
    <div>
      <Navigation/>
         {/* <p>{value.name}</p> */}
    <div>
    <C.Container>
      <C.Label>Perfil Usuário</C.Label>
      <C.Content>
      <C.Label>E-mail </C.Label>
      <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={""}
        />
        
      <C.Label>Nome </C.Label>
      <Input
          type="varcha"
          placeholder="Nome completo"
          value={""}
        />
        <C.Label>CPF </C.Label>
        <Input
          type="varcha"
          placeholder="000.000.000-00"
          value={""}
        />
        <C.Label>Data de Nascimento </C.Label>
        <Input
          type="date"
          placeholder="Data de Nascimento"
          value={""}
        />
        <C.Label>CEP </C.Label>
        <Input
          type="text"
          placeholder="72000-000"
          value={""}
        />

  
        <Button Text="Salvar"  />
      </C.Content>
      
    </C.Container>
      
    </div>
    </div>
         
  );
};

export default Perfil;
