import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import { Input } from '@mui/base/Input';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, editUser } from './userSlice';

export default function Admin() {
  // const users = useSelector(state => state.user)
  // const dispatch = useDispatch()
  
  // const addUserHandler = (user) => {
  //   dispatch(addUser(user))
  // }


  return (
    <Box component="main" sx={{ flexGrow: 1, p: 5 }} alignItems="center" >
     <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Box sx={{ flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
              <span>Команда</span>
              <Input
                type= 'text'
                endAdornment={
                  <Icon icon = 'material-symbols-light:search'/>
                }
              />
              <Button>Добавить пользователя</Button>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Avatar sx={{ width: 64, height: 64 }}>
                  <Icon icon='ph:user-circle-light' />
                </Avatar>
                <Box sx={{ flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <span>Пользователь</span>
                    <span>Не авторизирован</span>
                    <span>example@email.com</span>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Card sx={{ borderRadius: 2 }}><CardContent>Модерация объявлений</CardContent></Card>
                    <Card sx={{ borderRadius: 2 }}><CardContent>Блог</CardContent></Card>
                    <Card sx={{ borderRadius: 2 }}><CardContent>Тех.поддержка</CardContent></Card>
                    <Card sx={{ borderRadius: 2 }}><CardContent>Обращения</CardContent></Card>
                    <Card sx={{ borderRadius: 2 }}><CardContent>Аналитика</CardContent></Card>
                    <Card sx={{ borderRadius: 2 }}><CardContent>Акции</CardContent></Card>
                  </Box>
                </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}