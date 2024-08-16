"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { FaImage, FaPerson } from "react-icons/fa6";

function NavListMenu(data) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const buttons = data.data;

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {buttons?.buttonName}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          {buttons.Links.map((link, index) => (
            <Typography key={index} as="a" href={link?.link}>
              {link.name}
            </Typography>
          ))}
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
         {buttons.Links.map((link,index) => (
            <Typography
            key={index}
              as="a"
              href={link.link}
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              <ListItem className="flex items-center gap-2 py-2 pr-4">
                {link.name}
              </ListItem>
            </Typography>
          ))}
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <NavListMenu
        data={{
          buttonName: "Administration & Other's Info",
          Links: [
            { name: "Principle's Message", link: "principleMessage" },
            { name: "Founder's Message", link: "founderMessage" },
          ],
        }}
      />
      <NavListMenu
        data={{
          buttonName: "Academic",
          Links: [
            { name: "Academic Calender", link: "academicCalender" },
            { name: "Academic Result", link: "academicResult" },
            { name: "Academic Syllabus", link: "academicSyllabus" },
          ],
        }}
      />
      <Typography
        as="a"
        href="notice"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Notice</ListItem>
      </Typography>
      <NavListMenu
        data={{
          buttonName: "Routine",
          Links: [
            { name: "Class Routine", link: "classRoutine" },
            { name: "Exam Routine", link: "examRoutine" },
            { name: "Teacher's Schedule", link: "teacherRoutine" },
          ],
        }}
      />
      <Typography
        as="a"
        href="gallery"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Gallery <FaImage/> </ListItem>
      </Typography>
      <Typography
        as="a"
        href="about"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">About Us </ListItem>
      </Typography>
      <Typography
        as="a"
        href="about"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4"> Contact<FaPerson/> </ListItem>
      </Typography>
      <Typography
        as="a"
        href="login"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Login </ListItem>
      </Typography>
    </List>
  );
}

export function MenuBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="max-w-full py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button size="sm" fullWidth>
            Get Started
          </Button>
          <Button variant="outlined" size="sm" fullWidth>
            Log In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
