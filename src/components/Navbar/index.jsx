import React from 'react'

import {Link} from "react-router-dom";
import { Button,  } from '@chakra-ui/react'
import styles from './styles.module.css';
import { useBasket } from '../contexts/BasketContext';

function Navbar() {

  const { items } =useBasket();

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className='logo'>
            <Link to="/">
              <img src="https://images.unsplash.com/photo-1585944374711-d6221223317b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&q=80" alt="" />
            </Link>
        </div>
        <ul className={styles.menu}>
            <li>
                <Link to='/'>Products</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link to='/signin'>
            <Button colorScheme='blue'>Login</Button>
        </Link>
        <Link to='/signup'>
            <Button colorScheme='blue'>Register</Button>
        </Link>
        {
          items.length > 0 && (
            <Link to="/basket">
              <Button colorScheme='pink' variant='outline' marginLeft={2}>
                Basket ({items.length})
              </Button>
            </Link>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar
