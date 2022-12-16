import { CardContainer, CartBtn, FilterSearchContainer, Header, ImgContainer, InputSearchContainer, ListContainer, LogoutBtn, Main, ProductNotFound } from "./styles";

import Logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search_icon.svg";
import CartIcon from "../../assets/cart_icon.svg";
import LogoutIcon from "../../assets/logout_icon.svg";
import { Button } from "../../styles/Button";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Modal } from "../../components/Modal";

export const DashboardPage = () => {
    const { productList, setProductList } = useContext(UserContext);

    const [filterText, setFilterText] = useState("");
    const [filter, setFilter] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const filteredProducts = productList && productList.filter(
        (product) => (
            filter === "" ?
            true :
            product.name.toLowerCase().includes(filter.toLowerCase()) || product.category.toLowerCase().includes(filter.toLowerCase())
        )
    )

    const handleLogout = () => {
        localStorage.clear();
        
        setProductList(null);
    }

    return (
        <>
            {openModal && <Modal setOpenModal={setOpenModal} />}
            
            <Header>
                <div>
                    <img src={Logo} alt="Logo" />

                    <div className="nav__container">
                        <InputSearchContainer>
                            <input type="text" value={filterText} onChange={(event) => setFilterText(event.target.value)}/>

                            <button className="btn__search" onClick={() => setFilter(filterText)}>
                                <img src={SearchIcon} alt="Icone de pesquisar"/>
                            </button>
                        </InputSearchContainer>

                        <CartBtn onClick={() => setOpenModal(true)}>
                            <img src={CartIcon} alt="Icone de carrinho" />
                            <span>0</span>
                        </CartBtn>

                        <LogoutBtn onClick={() => handleLogout()}>
                            <img src={LogoutIcon} alt="Sair" />
                        </LogoutBtn>
                    </div>
                </div>
            </Header>

            <Main>
                {filter !== "" &&
                    <FilterSearchContainer>
                        <h2>Resultados para: <span>{filter}</span></h2>

                        <Button btnSize="small" btnColor="green" onClick={() => {
                            setFilter("");
                            setFilterText("");
                        }}>Limpar busca</Button>
                    </FilterSearchContainer>
                }

                {filteredProducts && filteredProducts.length === 0 ?
                    <ProductNotFound>
                        <p>Não foi possível encontrar nenhum produto</p>
                    </ProductNotFound>
                    
                    :

                    <ListContainer>
                        {
                            filteredProducts && filteredProducts.map((product) => (
                                <CardContainer key={product.id}>
                                    <ImgContainer>
                                        <img src={product.img} alt={product.name}/>
                                    </ImgContainer>

                                    <div className="content__container">
                                        <h3>{product.name}</h3>

                                        <span>{product.category}</span>

                                        <span>R${product.price.toFixed(2)}</span>

                                        <Button btnSize="small" btnColor="green">Adicionar</Button>
                                    </div>
                                </CardContainer>
                            ))
                        }
                    </ListContainer>
                }

            </Main>
        </>
    )
}