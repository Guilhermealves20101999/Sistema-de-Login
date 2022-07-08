import * as React from 'react';
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const theme = createTheme();

const Signup = () => {

  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email |!emailConf |!password | !name | !cpf) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, password, name, cpf);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastra-se
          </Typography>
          <Box component="form" noValidate onSubmit={handleSignup} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                 fullWidth
                  type="varcha"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => [setName(e.target.value), setError("")]}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="varcha"
                  placeholder="Sobrenome"
                  value={sobrenome}
                  onChange={(e) => [setSobrenome(e.target.value), setError("")]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 fullWidth
                  type="varcha"
                  placeholder="000.000.000-00"
                  value={cpf}
                  onChange={(e) => [setCpf(e.target.value), setError("")]}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                   type="email"
                   placeholder="Digite seu E-mail"
                   value={email}
                   onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    fullWidth
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 fullWidth
                  type="password"
                  placeholder="Digite sua Senha"
                  value={password}
                  onChange={(e) => [setPassword(e.target.value), setError("")]}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Quero receber inspiração, promoções de marketing e atualizações via e-mail."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
            <labelError>{error}</labelError>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Singin" variant="body2">
                  Já tem conta? Entre
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}

export default Signup;