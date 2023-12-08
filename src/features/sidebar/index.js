import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Icon } from '@iconify/react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import { useSelector, useDispatch } from 'react-redux';
import { setSidebarStatus } from '../admin/userSlice';

const drawerWidth = 244;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 0,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(12)})`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    borderRadius: 2,
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar() {

  const open = useSelector(state => state.user.sidebarStatus)
  const dispatch = useDispatch()

  return (
      <Drawer variant="permanent" open={open} >
        <DrawerHeader>
          <IconButton onClick={() => {dispatch(setSidebarStatus(!open))}}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
            <ListItem>
              <ListItemIcon>
                <Avatar sx={{ width: 60, height: 60 }} src='https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg' ></Avatar>
              </ListItemIcon>
              <Box sx={{ flexDirection: 'column', pl: 2 }} >
                <ListItemText primary={"Артем Иванов"} sx={{ opacity: open ? 1 : 0 }} />
                <ListItemText primary={"Собственник"} sx={{ opacity: open ? 1 : 0, color: "#9494A0" }} />
              </Box>
            </ListItem>
            <ListItem key={"Аналитика"} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  py: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mx: open ? 3 : 'auto',
                    ml: open ? 0 : 'auto',
                    justifyContent: 'center',
                    fontSize: 25
                  }}
                >
                  <Icon icon="fluent:data-pie-20-regular" />
                </ListItemIcon>
                {open && <ListItemText primary={"Аналитика"} sx={{ opacity: open ? 1 : 0, color: "#9494A0" }} />}
              </ListItemButton>
            </ListItem>
            <ListItem key={"Профиль"} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  py: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    ml: open ? 0 : 'auto',
                    justifyContent: 'center',
                    fontSize: 25
                  }}
                >
                  <Icon icon="solar:user-circle-outline" />
                </ListItemIcon>
                {open && <ListItemText primary={"Профиль"} sx={{ opacity: open ? 1 : 0, color: "#9494A0" }} />}
              </ListItemButton>
            </ListItem>
            <ListItem key={"Модерация"} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  py: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    ml: open ? 0 : 'auto',
                    justifyContent: 'center',
                    fontSize: 25
                  }}
                >
                  <Icon icon="mdi:text-box-check-outline" />
                </ListItemIcon>
                {open && <ListItemText primary={"Модерация"} sx={{ opacity: open ? 1 : 0, color: "#9494A0" }} />}
              </ListItemButton>
            </ListItem>
            <ListItem key={"Чаты"} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  py: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    ml: open ? 0 : 'auto',
                    justifyContent: 'center',
                    fontSize: 25
                  }}
                >
                  <Icon icon="tabler:message-2" />
                </ListItemIcon>
                {open && <ListItemText primary={"Чаты"} sx={{ opacity: open ? 1 : 0, color: "#9494A0" }} />}
              </ListItemButton>
            </ListItem>
            <ListItem key={"Баннеры"} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  py: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    ml: open ? 0 : 'auto',
                    justifyContent: 'center',
                    fontSize: 25
                  }}
                >
                  <Icon icon="mdi:image-multiple-outline" />
                </ListItemIcon>
                {open && <ListItemText primary={"Баннеры"} sx={{ opacity: open ? 1 : 0, color: "#9494A0" }} />}
              </ListItemButton>
            </ListItem>
            <ListItem key={"Команда"} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  py: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    ml: open ? 0 : 'auto',
                    justifyContent: 'center',
                    fontSize: 25
                  }}
                >
                  <Icon icon="heroicons:user-group" />
                </ListItemIcon>
                {open && <ListItemText primary={"Команда"} sx={{ opacity: open ? 1 : 0, color: "#9494A0" }} />}
              </ListItemButton>
            </ListItem>
            <ListItem key={"Блог"} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  py: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    ml: open ? 0 : 'auto',
                    justifyContent: 'center',
                    fontSize: 25
                  }}
                >
                  <Icon icon="grommet-icons:notes" />
                </ListItemIcon>
                {open && <ListItemText primary={"Блог"} sx={{ opacity: open ? 1 : 0, color: "#9494A0" }} />}
              </ListItemButton>
            </ListItem>
            <ListItem key={"Курс валют"} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  py: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    ml: open ? 0 : 'auto',
                    justifyContent: 'center',
                    fontSize: 25
                  }}
                >
                  <Icon icon="ant-design:dollar-outlined" />
                </ListItemIcon>
                {open && <ListItemText primary={"Курс валют"} sx={{ opacity: open ? 1 : 0, color: "#9494A0" }} />}
              </ListItemButton>
            </ListItem>
            <ListItem key={"Выйти"} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  py: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    ml: open ? 0 : 'auto',
                    justifyContent: 'center',
                    fontSize: 25,
                    color: "#FF9E90"
                  }}
                >
                  <Icon icon="tabler:logout" />
                </ListItemIcon>
                {open && <ListItemText primary={"Выйти"} sx={{ opacity: open ? 1 : 0, color: "#FF9E90" }} />}
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
  );
}
