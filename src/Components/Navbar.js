import {
    Card,
    Typography,
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
   
  export function DefaultSidebar(props) {
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          <ListItem onMouseUp={()=>props.changeItem(0)}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
             Basic Details
           
          </ListItem>
          <ListItem onMouseDown={()=>{props.changeItem(1); console.log("1")}}>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Education
          </ListItem>
          <ListItem onMouseDown={()=>props.changeItem(2)}>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Project
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem >
          <ListItem onMouseDown={()=>props.changeItem(3)}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Skill
          </ListItem>
          <ListItem onMouseDown={()=>props.changeItem(4)}>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Work
          </ListItem>
          <ListItem onMouseDown={()=>props.changeItem(5)}>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Output
          </ListItem>
        </List>
      </Card>
    );
  }