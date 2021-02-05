import React from 'react';
import { Link } from 'react-router-dom';
import { IoFastFood } from 'react-icons/io5';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';

function Explorar() {
  return (
    <div className="explore">
      <Header title="Explorar" />
      <div className="links-wrapper">
        <Link
          to="/explorar/comidas"
          data-testid="explore-food"
          className="form-button"
        >
          Explorar Comidas
        </Link>
        <Link
          to="/explorar/bebidas"
          data-testid="explore-drinks"
          className="form-button"
        >
          Explorar Bebidas
        </Link>
      </div>
      <IoFastFood className="ornament" />
      <Footer />
    </div>
  );
}

export default Explorar;
