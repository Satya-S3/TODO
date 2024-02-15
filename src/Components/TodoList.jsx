
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function TodoList({ todo,remove,toggle }) {

      const labelId = `checkbox-list-label-${todo.id}`;

      function removeTodo(){
            remove(todo.id)
      }

      function toggleTodo(){
            toggle(todo.id)
      }

      return <>
            <ListItem
                  secondaryAction={
                        <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                              <DeleteIcon color='danger'/>
                        </IconButton>
                  }
                  disablePadding
            >
                  <ListItemButton role={undefined} dense>
                        <ListItemIcon>
                              <Checkbox
                                    edge="start"
                                    checked={todo.complete}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                    onClick={toggleTodo}
                              />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={todo.text} />
                  </ListItemButton>
            </ListItem>
      </>

}