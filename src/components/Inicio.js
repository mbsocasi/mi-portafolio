import React from 'react';
import { Container, Typography, Grid, Paper, Link, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Inicio = () => {
  return (
    <section className="bg-light py-5">
      <Container maxWidth="xl" sx={{ px: 5, mt:5 }}>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item xl={8}>
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h2" className="display-5 fw-bolder">
                <span className="text-gradient d-inline">¡Bienvenido a mi portafolio!</span>
              </Typography>
              <Typography variant="lead" className="fw-light mb-5">
                Mi nombre es Moises Socasi
              </Typography>
              <Typography variant="body1" color="text.secondary">
              Soy un estudiante universitario apasionado por la programación y el desarrollo de software.
          A lo largo de mi carrera, he tenido la oportunidad de aprender y trabajar con diversos
          frameworks y tecnologías, lo cual ha enriquecido mi experiencia y habilidades en el campo
          de la informática.
              </Typography>
              <div className="mt-4 d-flex justify-content-center fs-2 gap-4">
                <Link href="#!" className="text-gradient">
                  <i className="bi bi-twitter"></i>
                </Link>
                <Link href="#!" className="text-gradient">
                  <i className="bi bi-linkedin"></i>
                </Link>
                <Link href="#!" className="text-gradient">
                  <i className="bi bi-github"></i>
                </Link>
              </div>
              <div className="mt-4">
                <Button sx={{ px: 5, mt:5 }} component={RouterLink} to="/proyectos" variant="contained" color="primary">
                  Proyectos
                </Button>
                <Button sx={{ px: 5, mt:5 }} component={RouterLink} to="/contacto" variant="contained" color="secondary" className="ms-2">
                  Contacto
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Inicio;
