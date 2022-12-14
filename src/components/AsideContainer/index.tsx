import Logo from "../../assets/logo.svg";
import ShopBag from "../../assets/shopping-bag.svg";
import Dots from "../../assets/dots.svg"

import { AsideBox } from "./styles";

export const AsideContainer = () => {

    return (
        <AsideBox>
            <img src={Logo} alt="Logo" className="logo__img"/>

            <div>
                <div className="shop__bag__container">
                    <img src={ShopBag} alt="Shop bag" />
                </div>

                <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
            </div>

            <img src={Dots} alt="Imagem de pontos" className="dots__img"/>
        </AsideBox>
    )
}