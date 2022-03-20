import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import displayActions from '../actions';

import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { user, signOut } = props;

    //bind function calls to use dispatch to change state
    const dispatch = useDispatch();
    const selPantry = () => dispatch(displayActions.displayActions.showPantry());
    const selMain = () => dispatch(displayActions.displayActions.showMain());

    //get display state
    const display = useSelector((state) => state.display);

    return (
        <div className="nav-container">
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand className="logo" />
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink
                                    tag={RouterNavLink}
                                    to="/"
                                    exact
                                    activeClassName={display === 0 ? 'router-link-exact-active' : ''}
                                    onClick={() => selMain()}
                                >
                                    Home
                                </NavLink>
                            </NavItem>
                            {user && (
                                <NavItem>
                                    <NavLink
                                        tag={RouterNavLink}
                                        to="/"
                                        exact
                                        activeClassName={display === 1 ? 'router-link-exact-active' : ''}
                                        onClick={() => selPantry()}
                                    >
                                        Pantry
                                    </NavLink>
                                </NavItem>
                            )}
                        </Nav>
                        <Nav className="d-none d-md-block" navbar>
                            {!user && (
                                <NavItem>
                                    <Button id="qsLoginBtn" color="primary" className="btn-margin" onClick={() => {}}>
                                        Log in
                                    </Button>
                                </NavItem>
                            )}
                            {user && (
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret id="profileDropDown">
                                        <img
                                            src={user.picture}
                                            alt="Profile"
                                            className="nav-user-profile rounded-circle"
                                            width="50"
                                        />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>{user.name}</DropdownItem>
                                        <DropdownItem
                                            tag={RouterNavLink}
                                            to="/profile"
                                            className="dropdown-profile"
                                            activeClassName="router-link-exact-active"
                                        >
                                            <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                                        </DropdownItem>
                                        <DropdownItem id="qsLogoutBtn" onClick={signOut}>
                                            <FontAwesomeIcon icon="power-off" className="mr-3" /> Log out
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            )}
                        </Nav>
                        {!user && (
                            <Nav className="d-md-none" navbar>
                                <NavItem>
                                    <Button id="qsLoginBtn" color="primary" block onClick={() => {}}>
                                        Log in
                                    </Button>
                                </NavItem>
                            </Nav>
                        )}
                        {user && (
                            <Nav className="d-md-none justify-content-between" navbar style={{ minHeight: 170 }}>
                                <NavItem>
                                    <span className="user-info">
                                        <img
                                            src={user.picture}
                                            alt="Profile"
                                            className="nav-user-profile d-inline-block rounded-circle mr-3"
                                            width="50"
                                        />
                                        <h6 className="d-inline-block">{user.name}</h6>
                                    </span>
                                </NavItem>
                                <NavItem>
                                    <FontAwesomeIcon icon="user" className="mr-3" />
                                    <RouterNavLink to="/profile" activeClassName="router-link-exact-active">
                                        Profile
                                    </RouterNavLink>
                                </NavItem>
                                <NavItem>
                                    <FontAwesomeIcon icon="power-off" className="mr-3" />
                                    <RouterNavLink to="#" id="qsLogoutBtn" onClick={signOut}>
                                        Log out
                                    </RouterNavLink>
                                </NavItem>
                            </Nav>
                        )}
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
