import React from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from "react"
import CartContext from "../../context/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import "../CartWidget/CartWidget.scss"
import { Link } from "react-router-dom"

function CartWidget() {
  const { cartProducts, eliminarProductoCarro } = useContext(CartContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let cantItems = cartProducts.length
 
  return (
    <>
      {
        
          <>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}

            >
              <ShoppingCartIcon className="iconoCart" />
              <p>{cantItems}</p>
            </Button>
            <Menu
              className="menuCart"
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            > <p className="tituloCart">Lista de productos</p>

              {cartProducts.map((cartProduct) => {
                return (
                  <MenuItem onClick={handleClose} className="itemCart" key={cartProduct.id}>

                    <img src={`${cartProduct.imagen}`} alt='img'/>
                    <p>{cartProduct.nombre}</p>
                    <p> $ {cartProduct.precio}</p>
                    <p>Cantidad: {cartProduct.cantidad}</p>

                    <Button ><DeleteIcon className="btnDelete" onClick={() => eliminarProductoCarro(cartProduct)} /></Button>
                  </MenuItem>

                  
                )
              })}

              <Link to="/cart"><Button className="btnConcluirCompra">Concluir compra</Button></Link>

            </Menu>
          </>
        
      }

    </>
  )


}
export default CartWidget 