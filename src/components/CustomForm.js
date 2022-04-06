import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";

const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');
    return (
      <form className="mc__form">
        <Stack
            direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
            spacing={2}
            sx={{
              width: "100%",
            }}
          >
          <div className="mc__field-container">
            <TextField
                variant="outlined"
                size="small"
                label="Email"
                sx={{width: "calc(100%)",  flexBasis: "100%"}}
                onChange={(e) => setEmail(e.target.value)}
              >
                {email}
              </TextField>
          </div>
            <Button
              type="submit"
              sx={{backgroundColor: '#320A8D', color: 'white', textTransform: 'capitalize', padding:'0 40px', marginLeft: '20px'}}
            >
                Subscribe
            </Button>
          </Stack>
      </form>
    );
};

export default CustomForm;