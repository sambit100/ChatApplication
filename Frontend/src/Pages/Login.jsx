import React, { useState } from 'react'
import { Avatar, Container, Paper, TextField, Typography,Stack, IconButton } from '@mui/material';
import{ Button } from '@mui/material';
import CameraAltIcon  from '@mui/icons-material/CameraAlt';
import { VisuallyHidden } from '../Components/styles/StyledComp.jsx';
import  { useFileHandler, useInputValidation ,useStrongPassword} from '6pp';
import { Validator } from '../Utils/Validators.jsx';
const Login = () => {
    const [IsLogin ,setLogin] = useState(true);
    const toggleLogin =()=>setLogin((prev)=>!prev)

   const name = useInputValidation("")
   const User = useInputValidation("",Validator);
   const pass= useStrongPassword("");
   const bio = useInputValidation("")

 const avtarImg = useFileHandler("single")


 const handleLogin = (e)=> { 
         e.preventDefault();

    };

    const handleSignUp = (e)=>
        { e.preventDefault()
    
        }

  return (
<div style={{
    backgroundImage: "linear-gradient(to bottom right, #43cea2, #185a9d)"
}}>

         
    <Container component={"main"} maxWidth="xs" 

    
    sx={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

    }}
    
    >
        <Paper
         elevation={3}
         sx={{
             padding:4,
             display:'flex',
             flexDirection:'column',
             alignItems:'center',
            //  backgroundImage:"linear-gradient(to bottom right, #43cea2, #185a9d)"
            

            }}
            >
      
 {
     IsLogin ? ( <>
    
    <Typography variant='h5'>Login</Typography>
    <form style={{
        width:"100%",
        marginTop:"1rem"
    }}
    onSubmit={handleLogin}
    >
        <TextField
         required
         fullWidth
         label="username"
         margin='normal'
         variant="outlined"
         value={User.value}
         onChange={User.changeHandler}
         >

        </TextField>
        <TextField
         required
         fullWidth
         label="Password"
         type='password'
         margin='normal'
         variant="outlined"
         value={pass.value}
         onChange={pass.changeHandler}
         >
 
        </TextField>
        <Button type="submit" sx={{marginTop:"1rem"}} fullWidth variant="contained">Login</Button>
        <Typography textAlign={'center'} marginTop={"1rem"}>OR</Typography>
        <Button sx={{
            marginTop:"1rem"
        }} 
        variant="text"
        fullWidth
        
        onClick={toggleLogin}
        > Sign up Instead
        </Button>
    </form>


     </> ) : ( <>
    








     <Typography variant='h5' textAlign={"center"}>Sign Up</Typography>
       <form style={{
           width:"100%",
           marginTop:'1rem' 
        }}
        onSubmit={handleSignUp}
        
        
        >
           <Stack position ={"relative"} width={"10rem"} margin={"auto"}>
         <Avatar
          sx={{
              width:"10rem",
              height:"10rem",
              objectFit:"contain"
            }}
            src={avtarImg.preview}
            />
    <IconButton 
    sx={{
        position:'absolute',
        bottom:"0",
        right:"0",
        color:"white",
        bgcolor:"rgba(0,0,0,0.5)",
        "&:hover": {
            bgcolor: "rgba(0,0,0,0.7)"
        }
    }}
    component="label"
>
    <>
        <CameraAltIcon/>
        <VisuallyHidden type="file" onChange={avtarImg.changeHandler}></VisuallyHidden>
    </>
        </IconButton>

        </Stack>
        <TextField
         required
         fullWidth
         label="Name"
         margin='normal'
         variant="outlined"
         value={name.value}
         onChange={name.changeHandler}
         >

        </TextField>
      
        <TextField
         required
         fullWidth
         label="UserName"
         margin='normal'
         variant="outlined"
         value={User.value}
         onChange={User.changeHandler}
         >

        </TextField>
        {
            User.error && (
                <Typography color="error" variant="caption">
                {User.error}
            </Typography>
        )
    } 
        <TextField
         required
         fullWidth
         label="password"
         type='password'
         margin='normal'
         variant="outlined"
         value={pass.value}
         onChange={pass.changeHandler}
         >

        </TextField>
        {
            pass.error && (
            <Typography color="error" variant="caption">
                {pass.error}
            </Typography>
        )
    } 
        <TextField
         required
         fullWidth
         label="bio"
         margin='normal'
         variant="outlined"
         value={bio.value}
         onChange={bio.changeHandler}
         >
 
        </TextField>
        <Button type="submit" sx={{marginTop:"1rem"}} fullWidth variant="contained">Sign Up</Button>
        <Typography textAlign={'center'} m={"1rem"}>OR</Typography>
        <Button sx={{
            
        }} 
        variant="text"
        fullWidth
        
        onClick={toggleLogin}
        > Login Instead
        </Button>
    </form>
     
     </>
     )
    }


        </Paper>
    </Container>
    </div>
  )
}

export default Login