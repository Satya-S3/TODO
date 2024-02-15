import { useState } from "react"
import { Box, TextField } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';


export default function TodoForm({addTodo}) {
      const [text, settext] = useState('')

      function change(e) {
            settext(e.target.value)
      }

      function handelSubmit(e){
            e.preventDefault()
            addTodo(text)
            settext('')
      }

      return <>
      <form onSubmit={handelSubmit}>
      <Box sx={{maxWidth:340}}>

                  <TextField id="outlined-basic" value={text} label="Add Todo" variant="outlined" onChange={change}
                        InputProps={{
                              endAdornment: (
                                    <InputAdornment position="end">
                                          <IconButton type='submit' aria-label="toggle password visibility" color="success" edge="end">
                                               <DoneIcon/>
                                          </IconButton>
                                    </InputAdornment>
                              )
                        }}
                  />
      </Box>
      </form>
      </>
}