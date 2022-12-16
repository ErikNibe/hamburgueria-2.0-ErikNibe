import { CardContainer, CartContainer, EmptyCart, ModalBackground, ModalContainer, TotalContainer } from "./styles";

import Teste from "../../assets/teste.svg";
import BinIcon from "../../assets/bin_icon.svg";
import { Button } from "../../styles/Button";

export const Modal = ({ setOpenModal }) => {

    return (
        <ModalBackground>
            <ModalContainer>
                <div className="header__modal">
                    <h3>Carrinho de compras</h3>

                    <button className="btn__close__modal" onClick={() => setOpenModal(false)}>X</button>
                </div>

                {/* <EmptyCart>
                    <p>Sua sacola está fazia</p>

                    <span>Adicione itens</span>
                </EmptyCart> */}

                <CartContainer>
                    <ul>
                        <CardContainer>
                            <div className="img__container">
                                <img src={Teste} alt="" />
                            </div>

                            <div className="info__product__container">
                                <div className="info__product">
                                    <h4>Hamburguer</h4>

                                    <div className="btn__counter">
                                        <button>-</button>
                                        
                                        <div>
                                            <span>0</span>
                                        </div>

                                        <button>+</button>
                                    </div>
                                </div>

                                <img src={BinIcon} alt="" className="bin__icon"/>
                            </div>
                        </CardContainer>
                    </ul>

                    <TotalContainer>
                        <h5>Total</h5>

                        <span>R$ 50,00</span>
                    </TotalContainer>

                    <Button btnSize="big" btnColor="gray">Remover todos</Button>
                </CartContainer>
            </ModalContainer>
        </ModalBackground>
    )
}