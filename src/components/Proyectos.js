import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const Proyectos = () => {
  return (
    <section className="py-5">
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, mb: 5, mt: 5 }}>
        <div className="text-center mb-5">
          <Typography variant="h1" className="display-5 fw-bolder mb-0">
            Proyectos
          </Typography>
        </div>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12} md={9} lg={8}>
            {/* Project Card 1 */}
            <Card sx={{ overflow: 'hidden', boxShadow: 'rounded-4', border: '0', mb: 3 }}>
              <CardContent sx={{ p: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs={12} md={8}>
                    <div sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                      <Typography variant="h2" className="fw-bolder">
                        Gestor de Inventarios
                      </Typography>
                      <Typography variant="body1">
                        Desarrollado con Angular y Express.
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CardMedia component="img" height="300" image={require('../Images/inventario.png').default} alt="Gestor de Inventarios" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Project Card 2 */}
            <Card sx={{ overflow: 'hidden', boxShadow: 'rounded-4', border: '0', mb: 3 }}>
              <CardContent sx={{ p: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs={12} md={8}>
                    <div sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                      <Typography variant="h2" className="fw-bolder">
                        Gestor de Tareas
                      </Typography>
                      <Typography variant="body1">
                        Desarrollado con React, MongoDB y Express.
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CardMedia component="img" height="300" image={require('../Images/tareas.png').default} alt="Gestor de Tareas" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Project Card 3 */}
            <Card sx={{ overflow: 'hidden', boxShadow: 'rounded-4', border: '0', mb: 3 }}>
              <CardContent sx={{ p: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs={12} md={8}>
                    <div sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                      <Typography variant="h2" className="fw-bolder">
                        Registro de Rutinas
                      </Typography>
                      <Typography variant="body1">
                        Desarrollado con Mongo, React, Express y Next.js.
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CardMedia component="img" height="300" image={require('../Images/rutinas.jpg').default} alt="Registro de Rutinas" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Project Card 4 */}
            <Card sx={{ overflow: 'hidden', boxShadow: 'rounded-4', border: '0' }}>
              <CardContent sx={{ p: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs={12} md={8}>
                    <div sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                      <Typography variant="h2" className="fw-bolder">
                        Aplicación CRUD para Consultorio Médico Veris
                      </Typography>
                      <Typography variant="body1">
                        Desarrollado con tecnologías modernas.
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <CardMedia component="img" height="300" image={require('../Images/consultorio.png').default} alt="Aplicación CRUD" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to action section */}
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, my: 5 }}>
          <div className="text-center">
            <Typography variant="h2" className="display-4 fw-bolder mb-4">
              Construyamos algo juntos
            </Typography>
            <Button component="a" href="/contacto" variant="outlined" size="large" className="px-5 py-3 fs-6 fw-bolder">
              Contacto
            </Button>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default Proyectos;
