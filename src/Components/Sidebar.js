
import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
export function DrawerForMobile(props) {



  return (
    <div onClick={() => { props.setOpen(false) }} style={{ display: props.open ? "flex" : "none", background: "rgba(0, 0, 0, 0.5)", height: '100%', width: '100%', position: 'absolute' }} >
      <div className="h-full absolute  shadow-xl bg-[#6962AD] text-white items-start " style={{ flexDirection: 'column' }}>


        <List>
          <ListItem >

            <h1 className="font-bold text-xl text-white">Menu</h1>

          </ListItem>
          <ListItem onMouseUp={() => { props.changeItem(2); props.setOpen(false) }}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" style={{ color: 'white' }} />
            </ListItemPrefix>

            <h1 className="text-white">Basic Details</h1>

          </ListItem>
          <ListItem onMouseUp={() => { props.changeItem(3); props.setOpen(false) }}>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" style={{ color: 'white' }} />
            </ListItemPrefix>
            <h1 className="text-white"> Education</h1>

          </ListItem>
          <ListItem onMouseUp={() => { props.changeItem(4); props.setOpen(false) }}>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" style={{ color: 'white' }} />
            </ListItemPrefix>

            <h1 className="text-white">Project</h1>


          </ListItem >
          <ListItem onMouseUp={() => { props.changeItem(5); props.setOpen(false) }}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" style={{ color: 'white' }} />
            </ListItemPrefix>
            <h1 className="text-white">Skill</h1>


          </ListItem>
          <ListItem onMouseUp={() => { props.changeItem(6); props.setOpen(false) }}>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5 " style={{ color: 'white' }} />
            </ListItemPrefix>
            <h1 className="text-white">Work</h1>

          </ListItem>

        </List>
        <div className="flex justify-around mt-5 w-full">
          <button onMouseDown={() => { props.changeItem(0); props.setOpen(false) }} className="h-[30px] w-[40%]  bg-black text-white rounded ">Add  section</button>
          <button onMouseDown={() => { props.changeItem(1); props.setOpen(false) }} className="h-[30px] w-[40%] bg-black text-white rounded ">Output</button>

        </div>
        <div className="flex flex-row items-center mt-3 p-3">
         
          <button className=" bg-black h-[30px] w-[90px] rounded  text-white self-end" onClick={(e) => {  }}>Add Review</button>
        </div>

      </div>
    </div>
  );
}


/*
function Dr() {
  return (
    <React.Fragment>

    <img className="h-[50px] w-[50px]" onClick={openDrawer} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII=" />
    <Drawer open={open} onClose={closeDrawer}>
      <div className="mb-2 flex items-center justify-between p-4">
        <Typography variant="h5" color="blue-gray">
          Side Menu
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <List>
        <ListItem onMouseUp={() => { props.changeItem(2); closeDrawer() }}>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Basic Details
    
        </ListItem>
        <ListItem onMouseUp={() => { props.changeItem(3); closeDrawer() }}>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Education
        </ListItem>
        <ListItem onMouseUp={() => { props.changeItem(4); closeDrawer() }}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Project
    
        </ListItem >
        <ListItem onMouseUp={() => { props.changeItem(5); closeDrawer() }}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Skill
        </ListItem>
        <ListItem onMouseUp={() => { props.changeItem(6); closeDrawer() }}>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Work
        </ListItem>
    
      </List>
      <div className="flex justify-around mt-5">
        <button onMouseDown={() => { props.changeItem(0); closeDrawer() }} className="h-[30px] w-[40%]  bg-black text-white rounded ">Add a section</button>
        <button onMouseDown={() => { props.changeItem(1); closeDrawer() }} className="h-[30px] w-[40%] bg-black text-white rounded ">Output</button>
    
      </div>
    </Drawer>
    </React.Fragment>
    )

}
*/
export default DrawerForMobile;

