import React from 'react';
import { Container, Typography, Grid, Card, CardContent, TextField, Button, Box, InputAdornment } from '@mui/material';
import { Email, Person, Phone, Message } from '@mui/icons-material';

const Contacto = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementa lógica de envío de formulario aquí
  };

  return (
    <section className="py-5">
      <Container maxWidth="xl" sx={{ px: 5 , mt:5}}>
        {/* Contact card */}
        <Card sx={{ p: 3, textAlign: 'center' }}>
          <CardContent>
            <Box className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
              <Email fontSize="large" />
            </Box>
            <Typography variant="h1" className="fw-bolder">
              Pongamonos en Contacto
            </Typography>
            <Typography variant="lead" className="fw-normal text-muted mb-0">
            ¡Trabajemos juntos!
            </Typography>
            <form id="contactForm" onSubmit={handleSubmit}>
              {/* Name input */}
              <TextField
                fullWidth
                margin="normal"
                id="name"
                label="Full name"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
                required
              />
              {/* Email address input */}
              <TextField
                fullWidth
                margin="normal"
                id="email"
                label="Email address"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                type="email"
                required
              />
              {/* Phone number input */}
              <TextField
                fullWidth
                margin="normal"
                id="phone"
                label="Phone number"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
                type="tel"
                required
              />
              {/* Message input */}
              <TextField
                fullWidth
                margin="normal"
                id="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Message />
                    </InputAdornment>
                  ),
                }}
                required
              />
              {/* Submit Button */}
              <Box mt={3}>
                <Button type="submit" variant="contained" size="large" color="primary">
                  Submit
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export default Contacto;
