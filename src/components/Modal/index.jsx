import { CardContainer, CartContainer, EmptyCart, ModalBackground, ModalContainer, TotalContainer } from "./styles";

import BinIcon from "../../assets/bin_icon.svg";
import { Button } from "../../styles/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Modal = ({ setOpenModal }) => {
    const { cartList, setCartList, addToCart, removeFromCart, removeItem, totalValue } = useContext(CartContext);

    return (
        <ModalBackground>
            <ModalContainer>
                <div className="header__modal">
                    <h3>Carrinho de compras</h3>

                    <button className="btn__close__modal" onClick={() => setOpenModal(false)}>X</button>
                </div>

                {cartList.length === 0 ?
                
                    <EmptyCart>
                        <p>Sua sacola está fazia</p>

                        <span onClick={() => setOpenModal(false)}>Adicione itens</span>
                    </EmptyCart>
                    
                :

                    <CartContainer>
                        <ul>
                            {cartList.map((product) => (
                                <CardContainer key={product.id}>
                                    <div className="img__container">
                                        <img src={product.img} alt={product.name} />
                                    </div>

                                    <div className="info__product__container">
                                        <div className="info__product">
                                            <h4>{product.name}</h4>

                                            <div className="btn__counter">
                                                <button onClick={() => removeFromCart(product)}>-</button>
                                                
                                                <div>
                                                    <span>{product.quantity}</span>
                                                </div>

                                                <button onClick={() => addToCart(product)}>+</button>
                                            </div>
                                        </div>

                                        <button className="btn__remove"><img src={BinIcon} alt="" className="bin__icon" onClick={() => removeItem(product)}/></button>
                                    </div>
                                </CardContainer>
                            ))}
                        </ul>

                        <TotalContainer>
                            <h5>Total</h5>

                            <span>R$ {totalValue.toFixed(2)}</span>
                        </TotalContainer>

                        <Button btnSize="big" btnColor="gray" onClick={() => setCartList([])}>Remover todos</Button>
                    </CartContainer>
                }

            </ModalContainer>
        </ModalBackground>
    )
}