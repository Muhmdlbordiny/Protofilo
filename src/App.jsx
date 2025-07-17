import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Box,
  Avatar,
  Stack,
  IconButton,
  Link,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  Chip,
  AppBar,
  Toolbar,
  Drawer,
  ListItemText,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,

} from '@mui/material';
import { Brightness4, Brightness7, Download, Menu as MenuIcon, GitHub, LinkedIn, Email } from '@mui/icons-material';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openProject, setOpenProject] = useState(null);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.addEventListener('load', AOS.refresh);
    return () => window.removeEventListener('load', AOS.refresh);
  }, []);

  const theme = createTheme({ palette: { mode: darkMode ? 'dark' : 'light' } });

  const projects = [
    {
      title: 'Online Exam System',
      description: 'Secure exam platform built with ASP.NET Core, SQL, and React.',
      fullDescription: "Online Exam System Follow a clean N-Tier Architecture Data Access layer & Business Logic Layer & presentation Layer Managed Exam using Dashboard and Student Can't be Take Exam more one ",
      image: '/onlineexam.png',
      link: 'https://github.com/Muhmdlbordiny/OnlineExam',
      skills: ['C#','OOP','Identity','Entityframeworkcore','ASP.NET CoreMVC', 'DesignPattern','Dependency injection', 'SQL Server', 'JWT', 'Html','Css','bootstrap','javascript','Ajax','jquery']
    },
    {
      title: 'E-Commerce App',
      description: 'Fully functional online store with payment gateway integration.',
      fullDescription: 'Core Features and Functionality:User Authentication:User registration, login, password reset,LockEnabled and UnLock To Control Users from during Admin ,and role-based authorization (Admin, Customer ,Editor).Product Catalog:Displaying products with filtering, searching, and pagination.Shopping Cart:Add products to cart, update quantity, remove items, and view cart summary.Checkout Process:Users can enter shipping information, review order, and place the order.Order Management:Admin panel to manage orders, view order details, change status ( Processing, Shipped, Completed,Canceled).Payment Integration:Integration with third-party payment gateways ( Stripe).',
      image: '/miso11.png',
      link: 'https://github.com/Muhmdlbordiny/myshop_E-Commerce',
      skills: ['C#','Asp.netCoreMVC', 'Identity', 'ASP.NET Core', 'Entityframeworkcore','SqlServer','LInq','OOP','Html','Css','bootstrap','javascript','Ajax','jquery','Toaster','Generic Design Pattern','UnitOfWork and Repositry Design Pattern','Refactor Design Pattern','Dependency injection']
    },
    {
      title: 'Mahawer App',
      description: 'Ecommerce online store to 3DPrinter allows users to a list ofproducts',
      fullDescription: 'simple E-commerce website 3D printer at the Information Technology Institute ITI The goal of the project was to create an online store to 3D printer that allows users to browse a list of products, view product details, and add items to a shopping cart Implementation accurate Shopping Cart Logic Add , Remove,update, Read , Quantity Using Local Storage to maintain Cart Make sure the Design works well on all Devices ',
      image: '/3D.png',
      link: 'https://github.com/Muhmdlbordiny/mahawer-master',
      skills: ['HTMl', 'Css', 'Javascript', 'Ajax']
    },
    {
      title: 'Clinics system',
      description: ' is a smart digital solution designed to  appointment booking .......',
      fullDescription: 'The Clinics Management System is a comprehensive software solution designed to streamline and automate the daily operations of medical clinics. It provides tools for managing appointments, patient records, doctors schedules, billing, test reports, and administrative tasks, improving overall efficiency and patient care. Book, reschedule, and cancel appointments View available time slots for doctors',
      image: '/clinics.png',
      link: 'https://github.com/Muhmdlbordiny/ClincicalDoctors',
      skills: ['C#','Asp.netCoreMVC', 'Identity', 'ASP.NET Core', 'Entityframeworkcore','SqlServer','LInq','OOP','Html','Css','bootstrap','javascript','Ajax','Jquery']
    },
    {
      title: 'API E-commerce',
      description: 'Fully functional online store using Restful Api, Dashboard Asp.NetCoreMVC',
      fullDescription: 'Key Feature: Architecture & Design Patterns :✅CQRS with MediatR Pattern✅Unit of Work & Generic Repository Pattern✅Specification Pattern✅Onion architecture🔑 Authentication :✅JWT Authenticatin✅Asp. Net Cor Identity📌 Middelware : ✅Exception MiddleWare✅Rate Limiting Middleware⚙️ Development Features:✅ DashBoard Using Asp.NetCoreMVC✅RestfulApi✅Swagger Documentatio✅Pagination Implementation✅Handel Not Found End Point✅SQL Server (Development Database)✅Stripe Payment Integration✅Redis Caching',
      image: '/api.jpg',
      link: 'https://github.com/Muhmdlbordiny/StoreOnlineAPIs',
      skills: ['C#','Asp.netCoreMVC', 'Identity','Redis','RestfulApi','Jwt','CQRS','ASP.NET Core', 'Entityframeworkcore','SqlServer','LInq','OOP','Html','Css','bootstrap','javascript','Ajax','Jquery']
    },
     {
      title: 'E-commerce_Using-React-Native',
      description: 'Fully functional online store Dumy Api and mobile app React Native',
      fullDescription: 'Fully functional CRUd Operation Add to Cart and add to favourite',
      image: '/storeapp.png',
      link: 'https://github.com/Muhmdlbordiny/E-commerce_Using-React-Native',
      skills: ['ReactNative', 'FakeApi', 'RestfulApi','Javascript']
    }
  ];

  const skills = [
    'C#', 'OOP', 'ASP.NET Core', 'MongoDb', 'SQL Server', 'EntityFrameworkCore', 'FluentApi', 'AutoMapper', 'Ado.Net', 'Asp.NetCore MVC', 'RestfulApi', 'CQRs', 'JWt', 'HTML/CSS', 'Html5/Css3', 'Bootstrap', 'MaterialUI','React', 'Nextjs', 'TypeScript', 'JavaScript', 'Es6','Ajax', 'Jquery', 'unitTesting', 'Clean Code', 'N-tier Architecture', 'Onion Architecture','DataStructure','Algorithm', 'Azure', 'Agile', 'PostMan', 'Swager', 'Github'
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>Mohamed Elbordiny</Typography>
      <Divider />
      <List>
        {['Profile', 'Internship', 'Experience', 'Education', 'Projects', 'Skills', 'Languages', 'Additional'].map((text, index) => (
          <ListItem button key={index} component="a" href={`#${text.toLowerCase()}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="static" color="default" enableColorOnDark>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton edge="start" color="inherit" onClick={handleDrawerToggle} sx={{ display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" fontWeight="bold">Mohamed Elbordiny</Typography>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      <Box sx={{ py: 5 }}>
        <Container>
          <Box textAlign="center" data-aos="zoom-in">
            <Avatar src="/Mohamed.jpg" alt="Profile" sx={{ width: 140, height: 140, mx: 'auto', mb: 2,cursor:'pointer' }} />
            <Typography variant="h4" fontWeight="bold">Mohamed Elbordiny</Typography>
            <Typography variant="subtitle1" color="text.secondary">Full Stack .NET Developer</Typography>
            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
              <IconButton color="inherit" component="a" href="https://github.com/Muhmdlbordiny" target="_blank">
                <GitHub />
              </IconButton>
              <IconButton color="inherit" component="a" href="https://www.linkedin.com/in/mohamed-elbordiny-4a74b9244/" target="_blank">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" component="a" href="mailto:mohamedelbordiny33@gmail.com">
                <Email />
              </IconButton>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={2} mt={3} flexWrap="wrap">
              <Button variant="outlined" startIcon={<Download />} href="/Mohamed-Elbordin-FullStack Developer_CV.pdf" download>
                Download CV
              </Button>
            </Stack>
          </Box>

          <Box id="profile" mt={5} data-aos="fade-up">
            <Typography variant="h5" fontWeight="bold" sx={{textDecoration:'underline'}}>Profile</Typography>
            <Typography mt={1} color="text.secondary">
              Well-written summary highlighting your expertise in .NET (C#, Asp.Net Core, MVC , Restful Api) and React,
              which aligns with your Full Stack Developer role.
              Mentions key technical skills (RESTful APIs, JWT authentication, SQL Server, responsive UI with React) and soft
              skills (clean code, scalability, maintenance, continuous learning).
              Focused on delivering business value, which is appealing to employers.
            </Typography>
          </Box>

          <Box id="internship" mt={5} data-aos="fade-up">
            <Typography variant="h5" fontWeight="bold" sx={{textDecoration:'underline'}}>Internship</Typography>
            <List >
              <ListItem> Institute Technology Information  ITI - Front-End Development& Cross Platform Mobile (03/2025 – 07/2025)</ListItem>
              <ListItem>Afro Egypt - Front-End  (06/2024 – 08/2024)</ListItem>
              <ListItem>Route Academy - Backend ASP.NET (03/2024 – 11/2024)</ListItem>
            </List>
          </Box>

          <Box id="experience" mt={5} data-aos="fade-right">
            <Typography variant="h5" fontWeight="bold" sx={{textDecoration:'underline'}}>Professional Experience</Typography>
            <Typography sx={{ marginRight: 'auto', pl: 5 }} variant="subtitle1">Junior .NET Developer at Creative School (12/2024 – 03/2025)</Typography>
            <List sx={{ marginRight: 'auto', pl: 5 }}>
              <ListItem>Backend Developer .NET – Developed App Zad</ListItem>
            </List>
          </Box>

          <Box id="education" mt={5} data-aos="fade-left">
            <Typography variant="h5" fontWeight="bold" sx={{textDecoration:'underline'}}>Education</Typography>
            <Typography variant="subtitle1">Bachelor’s in Computer Engineering & Technology (2017–2022)</Typography>
            <Typography color="text.secondary" sx={{marginRight:'auto',pl:5}}>BHI Academy, Alexandria, Egypt</Typography>
          </Box>
          <Box id="projects" mt={5} data-aos="zoom-in">
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{textDecoration:'underline'}}>
              Projects
            </Typography>
            <Grid container spacing={3} mt={1} justifyContent="center">
              {projects.map((project, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Box height="100%" display="flex">
                    <Card sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="img"
                        height="180"
                        image={project.image}
                        alt={project.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom>{project.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{project.description}</Typography>
                        <Button
                          size="small"
                          variant="outlined"
                          sx={{ mt: 2 }}
                          fullWidth
                          onClick={() => setOpenProject(project)}
                        >
                          View Project
                        </Button>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Dialog for project details */}
            {openProject && (
              <Dialog open={!!openProject} onClose={() => setOpenProject(null)} maxWidth="sm" fullWidth>
                <DialogTitle>{openProject.title}</DialogTitle>
                <DialogContent dividers>
                  <Box mb={2}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={openProject.image}
                      alt={openProject.title}
                      sx={{ objectFit: 'cover', borderRadius: 1 }}
                    />
                  </Box>
                  <Typography variant="body1" gutterBottom>{openProject.fullDescription || openProject.description}</Typography>
                  {openProject.skills && (
                    <Box mt={2} display="flex" gap={1} flexWrap="wrap">
                      {openProject.skills.map((skill, idx) => (
                        <Chip key={idx} label={skill} />
                      ))}
                    </Box>
                  )}
                </DialogContent>
                <DialogActions>
                  {openProject.link && (
                    <Button
                      component={Link}
                      href={openProject.link}
                      target="_blank"
                      rel="noopener"
                      variant="contained"
                    >
                      Visit Project
                    </Button>
                  )}
                  <Button onClick={() => setOpenProject(null)}>Close</Button>
                </DialogActions>
              </Dialog>
            )}
          </Box>

          <Box id="skills" mt={5} data-aos="fade-up">
            <Typography variant="h5" fontWeight="bold" sx={{textDecoration:'underline'}}>Skills</Typography>
            <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
              {skills.map((skill, i) => (
                <Chip key={i} label={skill} color="secondary" />
              ))}
            </Box>
          </Box>

          <Box id="languages" mt={5} data-aos="fade-left">
            <Typography variant="h5" fontWeight="bold" sx={{textDecoration:'underline'}}>Languages</Typography>
            <List>
              <ListItem>Arabic</ListItem>
              <ListItem>English</ListItem>
            </List>
          </Box>

          <Box id="additional" mt={5} data-aos="fade-left">
            <Typography variant="h5" fontWeight="bold" sx={{textDecoration:'underline'}}>Additional Information</Typography>
            <List>
              <ListItem>Military Service: Completed  </ListItem>
            </List>
          </Box>
      <Box component="footer" bgcolor="primary.main" color="white" py={3} mt={0} sx={{width:'100%'}} data-aos="fade-left">
        <Container maxWidth="lg">
          <Stack direction="column" alignItems="center" spacing={2}>
            <Typography variant="body1">Connect with me</Typography>
            <Stack direction="row" spacing={3}>
              <IconButton
                component="a"
                href="https://www.facebook.com/muhmd.elbordiny/"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                <i className="fab fa-facebook-f"></i>
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com/muhmdelbordiny"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                <i className="fab fa-instagram"></i>
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/mohamed-elbordiny-4a74b9244/"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="https://wa.me/+201500334493"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                <i className="fab fa-whatsapp"></i>
              </IconButton>
            </Stack>
            <Typography variant="caption">
              &copy; {new Date().getFullYear()} Mohamed Elbordiny. All rights reserved.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Container>
    </Box>
    </ThemeProvider>
  );
  }
export default App
