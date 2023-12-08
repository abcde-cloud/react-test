import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/joy/Input';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';



import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, editUser, setUsers, setSidebarStatus } from './userSlice';

const userData = require('../../users.json');

const permissions = [
  "Модерация объявлений",
  "Блог",
  "Тех.поддержка",
  "Обращения",
  "Аналитика",
  "Акции"
]

var newPermission = []

export default function Admin() {
  const users = useSelector(state => state.user.users)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(setUsers(userData))
    },
    [],
  );


  const [addDlgStatus, setAddDlgStatus] = React.useState(false);
  const [emailStatus, setEmailStatus] = React.useState('');
  const [sendDlgStatus, setSendDlgStatus] = React.useState(false);
  const [editDlgStatus, setEditDlgStatus] = React.useState(false);
  const [deleteDlgStatus, setDelDlgStatus] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState({permissions: [] });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  
  // Menu handler
  const handleClick = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteMenuHandler = () => {
    handleClose();
    dispatch(deleteUser(selectedUser.email));
    setDelDlgStatus(true);
  }

  const editPermissionHandler = () => {
    handleClose();
    setEditDlgStatus(true);
  }

  const sendInviteHandler = () => {
    handleClose();
    setSendDlgStatus(true);
  }

  // Dialog handler
  const editDlgHandler = (permission) => {
    var user = {
      name : selectedUser.name,
      email : selectedUser.email,
      image : selectedUser.image,
      permissions : []
    };
    if (permission == "Все") {
      user.permissions = permissions;
      setSelectedUser(user);
      return;
    }
    if (selectedUser.permissions.indexOf(permission) != -1) {
      user.permissions = selectedUser.permissions.filter(per => !(per == permission) );
    }
    else {
      user.permissions = permissions.filter(per => selectedUser.permissions.indexOf(per) != -1 || per == permission );
    }
    setSelectedUser(user);
  }

  const addNewUser = () => {
    console.log(newPermission);
    dispatch(addUser({
      name: 'Пользователь',
      email: emailStatus,
      permissions: newPermission,
      image: '',
      authorized: false
    }));
    newPermission = [];
    setAddDlgStatus(false);
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, fontFamily: 'Futura PT' }} alignItems="center">
      <Grid container direction={'row'} justifyContent="center" rowSpacing={{ xs: 0, sm: 10 }}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={10}>
          <Card sx={{ borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ flexDirection: 'column' }}>
                <Grid container direction={'row'} justifyContent={{sm:'space-between', xs:'flex-start'}} alignItems='center' sx={{p: 2 }} spacing={1} >
                  <Grid item xs='auto' display={{ sm: 'none' }} >
                    <IconButton 
                      onClick={() => dispatch(setSidebarStatus(true))}
                    >
                      <Icon icon='ion:menu' />
                    </IconButton>
                  </Grid>
                  <Grid item sm xs='auto' >
                    <Typography variant="h5" sx={{ flexGrow: 1 }}><b>Команда</b></Typography>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Input
                      placeholder='Поиск по Email'
                      endDecorator={
                        <Icon icon = 'material-symbols-light:search'/>
                      }
                      sx={{ borderRadius: 3, flexBasis: 649 }}
                    />
                  </Grid>
                  <Grid item sm="auto" xs={12}>
                    <Button 
                      variant="contained"
                      onClick={() => setAddDlgStatus(true)}
                      sx={{ borderRadius: 3, backgroundColor: "#32C076", width: "100%" }}
                    >
                      Добавить пользователя
                    </Button>
                  </Grid>
                </Grid>
                <Divider />
                { users.map((user, index) => (
                  <Box 
                    sx={{ display: 'flex', 
                      flexDirection: 'row', 
                      p: 3, 
                      position: 'relative', 
                      '&:hover': { backgroundColor: '#EFEFF6' }
                    }} 
                    key={index} 
                    gap={1} 
                  >
                    { user.image == '' ? (
                        <Avatar sx={{ width: 64, height: 64 }}>
                          <Icon icon='ph:user-circle-light' />                    
                        </Avatar>
                      ) :
                      (
                        <Avatar sx={{ width: 64, height: 64 }} src={user.image} ></Avatar>
                      )
                    }
                    <Box sx={{ flexDirection: 'column' }} gap={1} >
                      <Box sx={{ display: 'flex', flexDirection: 'row' }} gap={1} >
                        <Typography level="title-md"><b>{user.name}</b></Typography>
                        {
                          !user.authorized &&  <Typography level="body-md">Не авторизирован</Typography>
                        }
                        <Typography level="body-md" color="#9494A0" >{user.email}</Typography>

                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Grid container spacing={1}>
                        { 
                          user.permissions.map((permission, index) => (
                            <Grid item sm='auto'>
                              <Card  
                                variant="outlined" 
                                sx={{ borderRadius: 2, maxHeight: 30, color: "#9494A0" }} 
                                color="#9494A0" 
                              >
                                <CardContent sx={{ py: 0.5 }} >{permission}</CardContent>
                              </Card>  
                            </Grid>                  
                          ))
                        }
                        </Grid>
                      </Box>
                    </Box>
                    <IconButton 
                      id="menu-button"
                      aria-controls={open ? 'user-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={e => handleClick(e, user)}
                      sx={{position: 'absolute', top: 0, right: 0}}
                    >
                      <Icon icon='solar:menu-dots-bold' />
                    </IconButton>
                    <Menu
                      id="user-menu"
                      key={index}
                      aria-labelledby="menu-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      sx={{ borderRadius: 3 }}
                    >
                      <MenuItem onClick={editPermissionHandler}>Изменить права доступа</MenuItem>
                      <MenuItem onClick={sendInviteHandler}>Отправить код повторно</MenuItem>
                      <MenuItem onClick={deleteMenuHandler} sx={{color: "#9494A0"}}>Удалить</MenuItem>
                    </Menu>
                  </Box>
                )) }
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog
        name="deleted-user-dialog"
        open={deleteDlgStatus}
        onClose={() => setDelDlgStatus(false)}
        width= 'xl'
      >
        <DialogTitle sx={{textAlign: 'center', pt: 5, px: 5}}>
          <Typography variant="h5"><b>Пользователь успешно удален</b></Typography>
        </DialogTitle>
        <DialogActions sx={{justifyContent: 'center', px: 5, pb: 5}}>
          <Button variant="contained" onClick={() => setDelDlgStatus(false)} sx={{ backgroundColor: "#32C076", flexGrow: 1 }}>Закрыть</Button>
        </DialogActions>
      </Dialog>
      
      <Dialog
        name="send-invite-dialog"
        open={sendDlgStatus}
        onClose={() => setSendDlgStatus(false)}
        width= 'xl'
      >
        <DialogTitle sx={{textAlign: 'center', pt: 5, px: 5}}>
          <Typography variant="h5"><b>Приглашение отправлено на почту</b></Typography>
          <Typography variant="h5"><b>{selectedUser.email}</b></Typography>
        </DialogTitle>
        <DialogActions sx={{justifyContent: 'center', px: 5, pb: 5}}>
          <Button variant="contained" onClick={() => setSendDlgStatus(false)} sx={{ backgroundColor: "#32C076", flexGrow: 1 }}>Закрыть</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        name="edit-permission-dialog"
        open={editDlgStatus}
        onClose={() => {
          setEditDlgStatus(false);
          dispatch(editUser(selectedUser))
        }}
      >
        <DialogContent>
          <FormGroup>
            <FormControlLabel 
              control={
                <Checkbox
                  checked={selectedUser.permissions.length == 6}
                  disabled={selectedUser.permissions.length == 6}
                  onChange={() => editDlgHandler("Все")}              
              />}
              label="Все" 
            />
            <FormControlLabel 
              control={
                <Checkbox
                  checked={selectedUser.permissions.indexOf("Модерация объявлений") != -1}
                  onChange={() => editDlgHandler("Модерация объявлений")}              
              />}
              label="Модерация объявлений" 
            />
            <FormControlLabel 
              control={
                <Checkbox
                  checked={selectedUser.permissions.indexOf("Блог") != -1}
                  onChange={() => editDlgHandler("Блог")}              
              />}
              label="Блог" 
            />
            <FormControlLabel 
              control={
                <Checkbox
                  checked={selectedUser.permissions.indexOf("Тех.поддержка") != -1}
                  onChange={() => editDlgHandler("Тех.поддержка")}              
              />}
              label="Тех.поддержка" 
            />
            <FormControlLabel 
              control={
                <Checkbox
                  checked={selectedUser.permissions.indexOf("Обращения") != -1}
                  onChange={() => editDlgHandler("Обращения")}              
              />}
              label="Обращения" 
            />
            <FormControlLabel 
              control={
                <Checkbox
                  checked={selectedUser.permissions.indexOf("Аналитика") != -1}
                  onChange={() => editDlgHandler("Аналитика")}              
              />}
              label="Аналитика" 
            />
            <FormControlLabel 
              control={
                <Checkbox
                  checked={selectedUser.permissions.indexOf("Акции") != -1}
                  onChange={() => editDlgHandler("Акции")}              
              />}
              label="Акции" 
            />
          </FormGroup>         
        </DialogContent>
      </Dialog>

      <Dialog
        name="add-user-dialog"
        open={addDlgStatus}
        onClose={() => setAddDlgStatus(false)}
        width= 'xl'
      >
        <DialogTitle sx={{textAlign: 'center', pt: 5, px: 5}}>
          <Typography variant="h5"><b>Отправьте приглашение</b></Typography>
        </DialogTitle>
        <DialogContent sx = {{px: 5, pb: 5}}>
          <Box  sx={{ flexDirection: 'column'}}>
            <Input
              placeholder="Email"
              sx={{
                '&::before': {
                  display: 'none',
                },
                '&:focus-within': {
                  outline: '2px solid var(--Input-focusedHighlight)',
                  outlineOffset: '2px',
                },
                my: 2,
              }}
              onChange={e => setEmailStatus(e.target.value)}
            />
            <Autocomplete
              multiple
              id="tags-outlined"
              options={permissions}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Выберите права доступа"
                />
              )}
              onChange={e => newPermission.push(e.target.innerText)}
            />
            <Button variant="contained" onClick={addNewUser} sx={{ backgroundColor: "#32C076", mt:1, width: '100%' }}>Отправить приглашение</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}